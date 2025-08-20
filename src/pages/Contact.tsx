import { useEffect, useMemo } from "react";
import { useLang } from "../hooks/useLang";
import { t } from "../i18n";

export default function Contact() {
  const [lang] = useLang();

  useEffect(() => {
    document.title = `${t("contact", lang)} - MiS Lab`;
  }, [lang]);

  // Google Maps embed src'sini dil parametresiyle üret
  const mapSrc = useMemo(() => {
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22990.29339393114!2d29.01016546906137!3d41.10776974519335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5cfa9c562b1%3A0xd94f6327566e85d6!2sMEF%20%C3%9Cniversitesi!5e0!3m2!1s${lang}!2str!4v1731272938553!5m2!1s${lang}!2str`;
  }, [lang]);

  return (
    <section className="container mx-auto px-4">
      {/* Header */}
      <h2 className="text-3xl font-semibold tracking-tight flex flex-col items-center">
        {t("contact", lang)}
        <div className="mt-3 h-[2px] w-48 bg-neutral-200" />
      </h2>
      {/* Üst metin */}
      <div className="text-center mb-12">
        <div className="mx-auto w-full md:max-w-2xl">
          <p className="text-2xl md:text-3xl font-medium">
            {t("contact_p1", lang)}
          </p>

          <div className="mt-3 text-lg leading-relaxed">
            <p className="mb-2">
              {t("contact_p2", lang)}{" "}
              <a
                href="mailto:topculab@gmail.com"
                className="underline underline-offset-4 decoration-2 decoration-neutral-400 hover:decoration-neutral-800 hover:text-neutral-900 transition"
              >
                topculab@gmail.com
              </a>
            </p>

            <p className="mb-2">
              {t("contact_p3", lang)}{" "}
              <a
                href="https://www.researchgate.net/profile/Meymune-Topcu-2"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 underline underline-offset-4 decoration-2 decoration-neutral-400 hover:decoration-neutral-800 hover:text-neutral-900 transition"
              >
                ResearchGate
                <span aria-hidden>↗</span>
              </a>
            </p>

            <p>{t("contact_p4", lang)}</p>
          </div>

          {/* MEF logosu */}
          <div className="mt-6 flex justify-center">
            <img
              className="w-40 md:w-48 h-auto mb-3 "
              src={`/static/mef-logo-${lang === "tr" ? "tr" : "en"}.png`}
              alt={
                lang === "tr"
                  ? "MEF Üniversitesi Logosu"
                  : "MEF University Logo"
              }
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Konum */}
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          {t("contact_location_title", lang)}
        </h3>

        <div className="rounded-xl overflow-hidden ring-1 ring-neutral-200">
          <iframe
            title="MEF University Map"
            className="w-full"
            src={mapSrc}
            height={450}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
