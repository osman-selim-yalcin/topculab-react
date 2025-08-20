import { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { t } from "../i18n";

export default function NotFound() {
  const [lang] = useLang();
  useEffect(() => {
    document.title = `404 - MiS Lab`;
  }, []);
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-3">404</h2>
      <p className="text-center">{t("404", lang)}</p>
    </section>
  );
}
