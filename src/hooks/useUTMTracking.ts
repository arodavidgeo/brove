import { useEffect } from "react";

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const STORAGE_KEY = "brove_utm_params";

export function useUTMTracking() {
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utmKeys: (keyof UTMParams)[] = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
      ];

      const captured: UTMParams = {};
      let hasUtm = false;

      utmKeys.forEach((key) => {
        const val = urlParams.get(key);
        if (val) {
          captured[key] = val;
          hasUtm = true;
        }
      });

      if (hasUtm) {
        const existing = getStoredUTMs();
        const merged = { ...existing, ...captured };
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      }
    } catch (e) {
      // Ignore in non-browser contexts or strict storage policies
    }
  }, []);
}

export function getStoredUTMs(): UTMParams {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    // ignore
  }
  return {};
}
