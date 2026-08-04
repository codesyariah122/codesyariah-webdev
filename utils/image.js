export function toHttps(url, fallback = "") {
  return url
    ? url.startsWith("//")
      ? `https:${url}`
      : url
    : fallback;
}
