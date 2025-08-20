import { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { t } from "../i18n";

export default function Contact() {
  const [lang] = useLang();
  useEffect(() => {
    document.title = `${t("contact", lang)} - MiS Lab`;
  }, [lang]);

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center">
        <p className="text-2xl font-medium mb-6">{t("contact_p1", lang)}</p>
        <div className="text-lg space-y-3">
          <p>
            {t("contact_p2", lang)}{" "}
            <a
              href="mailto:topculab@gmail.com"
              className="text-blue-700 underline"
            >
              topculab@gmail.com
            </a>
          </p>
          <p>
            {t("contact_p3", lang)}{" "}
            <a
              className="text-blue-700 underline"
              target="_blank"
              href="https://www.researchgate.net/profile/Meymune-Topcu-2"
              rel="noreferrer"
            >
              ResearchGate
            </a>
          </p>
          <p>{t("contact_p4", lang)}</p>
        </div>
      </div>
    </section>
  );
}
