const APP_VERSION = process.env.APP_VERSION || "dev";
const VERSION_KEY = "codesyariah_app_version";
const RELOAD_KEY = "codesyariah_cache_refresh_version";

async function clearAppCaches() {
  if (!("caches" in window)) return;

  const cacheNames = await window.caches.keys();
  await Promise.all(
    cacheNames
      .filter((name) => {
        return (
          name.includes("codesyariah") ||
          name.includes("workbox") ||
          name.includes("precache") ||
          name.includes("runtime")
        );
      })
      .map((name) => window.caches.delete(name))
  );
}

async function updateServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.all(registrations.map((registration) => registration.update()));
}

function clearAppCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!name || !name.startsWith("codesyariah_")) return;

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
}

export default () => {
  if (!process.client) return;

  window.addEventListener("load", async () => {
    try {
      await updateServiceWorker();

      const previousVersion = window.localStorage.getItem(VERSION_KEY);
      const alreadyReloaded = window.sessionStorage.getItem(RELOAD_KEY);

      if (previousVersion && previousVersion !== APP_VERSION && alreadyReloaded !== APP_VERSION) {
        window.sessionStorage.setItem(RELOAD_KEY, APP_VERSION);
        window.localStorage.setItem(VERSION_KEY, APP_VERSION);

        await clearAppCaches();
        clearAppCookies();

        window.location.reload();
        return;
      }

      window.localStorage.setItem(VERSION_KEY, APP_VERSION);
    } catch (error) {
      window.localStorage.setItem(VERSION_KEY, APP_VERSION);
    }
  });

  if ("serviceWorker" in navigator) {
    let refreshedByController = false;

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshedByController) return;
      refreshedByController = true;
      window.location.reload();
    });
  }
};
