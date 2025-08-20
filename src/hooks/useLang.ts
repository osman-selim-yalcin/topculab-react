import { useMemo, useCallback } from "react";
import type { Lang } from "../i18n";

export function useLang(): [Lang, (next: Lang) => void] {
  const lang = useMemo<Lang>(() => {
    const p = new URLSearchParams(window.location.search);
    return (p.get("lang") === "tr" ? "tr" : "en") as Lang;
  }, []);

  const setLang = useCallback((next: Lang) => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    // Django'da window.location değişiyordu; burada da aynısını yapıyoruz.
    window.location.href = url.toString();
  }, []);

  return [lang, setLang];
}
