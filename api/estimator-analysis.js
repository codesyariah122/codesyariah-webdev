const OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions";

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
}

function sanitizeText(value, fallback = "") {
  return String(value || fallback)
    .replace(/[<>]/g, "")
    .slice(0, 600);
}

function normalizePayload(body) {
  const estimate = body && typeof body === "object" ? body : {};

  return {
    websiteType: sanitizeText(estimate.websiteType),
    pages: Number(estimate.pages || 0),
    contentHelp: sanitizeText(estimate.contentHelp),
    deadline: sanitizeText(estimate.deadline),
    features: Array.isArray(estimate.features)
      ? estimate.features.map((item) => sanitizeText(item)).slice(0, 12)
      : [],
    budgetPromo: sanitizeText(estimate.budgetPromo),
    budgetNormal: sanitizeText(estimate.budgetNormal),
    packageName: sanitizeText(estimate.packageName),
    complexity: sanitizeText(estimate.complexity),
    timeline: sanitizeText(estimate.timeline),
    promo: sanitizeText(estimate.promo),
    recommendation: sanitizeText(estimate.recommendation),
  };
}

function getFallbackAnalysis(scope) {
  const priority =
    scope.complexity === "Advanced"
      ? "Mulai dari MVP dan workflow paling penting dulu agar budget tetap terkendali."
      : "Fokuskan halaman inti, CTA WhatsApp, bukti kerja, dan struktur konten yang mudah dipahami.";

  return {
    summary:
      "Scope sudah cukup untuk bahan konsultasi awal. Estimasi ini sebaiknya dipakai sebagai range diskusi, bukan harga final sebelum audit kebutuhan.",
    customer_fit:
      "Cocok untuk owner bisnis yang ingin punya arah jelas sebelum masuk pembahasan teknis dan budget.",
    priority_features: [
      "CTA WhatsApp yang terlihat jelas",
      "Struktur halaman yang menjawab kebutuhan customer awam",
      "SEO basic dan tampilan mobile yang rapi",
    ],
    risk_notes: [
      "Harga final bisa berubah jika materi konten belum siap.",
      "Integrasi dashboard, payment, atau API perlu mapping teknis terpisah.",
    ],
    next_step: priority,
  };
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return sendJson(response, 200, {
      analysis: getFallbackAnalysis(normalizePayload(request.body)),
      fallback: true,
      message: "OPENAI_API_KEY belum dikonfigurasi di server.",
    });
  }

  const scope = normalizePayload(request.body);
  const timeout = Number(process.env.OPENAI_TIMEOUT || 30) * 1000;
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const openaiResponse = await fetch(OPENAI_ENDPOINT, {
      method: "POST",
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.35,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "Anda adalah konsultan digital Codesyariah Webdev. Buat analisis singkat dalam Bahasa Indonesia untuk calon customer awam teknologi. Jawab hanya JSON valid dengan keys: summary, customer_fit, priority_features, risk_notes, next_step. priority_features dan risk_notes harus array 3 item. Jangan menyebut harga baru selain budget yang diberikan user.",
          },
          {
            role: "user",
            content: JSON.stringify(scope),
          },
        ],
      }),
    });

    clearTimeout(timeoutId);

    if (!openaiResponse.ok) {
      return sendJson(response, 200, {
        analysis: getFallbackAnalysis(scope),
        fallback: true,
        message: "AI analysis sedang tidak tersedia, fallback lokal digunakan.",
      });
    }

    const result = await openaiResponse.json();
    const content = result.choices?.[0]?.message?.content;
    const analysis = content ? JSON.parse(content) : getFallbackAnalysis(scope);

    return sendJson(response, 200, {
      analysis,
      fallback: false,
    });
  } catch (error) {
    clearTimeout(timeoutId);

    return sendJson(response, 200, {
      analysis: getFallbackAnalysis(scope),
      fallback: true,
      message: "AI analysis timeout atau gagal diproses, fallback lokal digunakan.",
    });
  }
};
