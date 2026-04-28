import { useMemo } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLang } from "../hooks/useLang";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { t } from "../i18/i18n";
import ResearchGateIcon from "../components/ResearchGateIcon";

export default function Contact() {
  const [lang] = useLang();

  useDocumentMeta({
    title: `${t("contact", lang)} - MiS Lab`,
    description:
      lang === "tr"
        ? "Memory in Society Lab ile iletişim. MEF Üniversitesi Psikoloji Bölümü; topculab@gmail.com adresinden bize ulaşabilirsiniz."
        : "Contact the Memory in Society Lab at MEF University, Department of Psychology — reach us at topculab@gmail.com.",
  });

  const mapSrc = useMemo(() => {
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22990.29339393114!2d29.01016546906137!3d41.10776974519335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5cfa9c562b1%3A0xd94f6327566e85d6!2sMEF%20%C3%9Cniversitesi!5e0!3m2!1s${lang}!2str!4v1731272938553!5m2!1s${lang}!2str`;
  }, [lang]);

  const reachLabel = lang === "tr" ? "E-posta" : "Email";
  const followLabel = lang === "tr" ? "Yayınlarımızı takip edin" : "Follow our publications";
  const joinLabel = lang === "tr" ? "Laba Katılmak İsteyenler" : "Join the Lab";
  const affiliatedLabel =
    lang === "tr" ? "Bağlı olduğumuz kurum" : "Affiliated with";

  return (
    <section className="container mx-auto px-4 pb-16 md:pb-24">
      {/* Header */}
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight flex flex-col items-center">
          {t("contact", lang)}
          <div className="mt-3 h-[2px] w-48 bg-neutral-200" />
        </h2>
      </header>

      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-[17px] md:text-lg text-neutral-700 leading-relaxed">
          {t("contact_p1", lang)}
        </p>
      </div>

      {/* Contact card + affiliation card */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
        {/* Contact info */}
        <article className="md:col-span-3 rounded-2xl border border-neutral-200 bg-white shadow-sm p-6 md:p-8">
          <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {lang === "tr" ? "Bize Ulaşın" : "Get in Touch"}
          </h3>
          <div className="mt-3 h-px w-12 bg-neutral-300" />

          <div className="mt-6 space-y-5">
            {/* Email row */}
            <a
              href="mailto:topculab@gmail.com"
              className="group flex items-start gap-4 -mx-2 px-2 py-3 rounded-xl transition-colors duration-300 hover:bg-neutral-50"
            >
              <span className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-300 bg-white text-neutral-700 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition duration-300">
                <MailOutlineIcon fontSize="small" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-500">
                  {reachLabel}
                </span>
                <span className="block mt-1 text-[15px] text-neutral-900 underline decoration-neutral-300 group-hover:decoration-neutral-900 underline-offset-4 transition">
                  topculab@gmail.com
                </span>
              </span>
            </a>

            {/* ResearchGate row */}
            <a
              href="https://www.researchgate.net/profile/Meymune-Topcu-2"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 -mx-2 px-2 py-3 rounded-xl transition-colors duration-300 hover:bg-neutral-50"
            >
              <span className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-300 bg-white text-neutral-700 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition duration-300">
                <ResearchGateIcon size={18} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-500">
                  {followLabel}
                </span>
                <span className="mt-1 inline-flex items-center gap-1 text-[15px] text-neutral-900 underline decoration-neutral-300 group-hover:decoration-neutral-900 underline-offset-4 transition">
                  ResearchGate
                  <LaunchIcon sx={{ fontSize: 14 }} />
                </span>
              </span>
            </a>

            {/* Join the lab */}
            <div className="border-t border-neutral-100 pt-5">
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-500 mb-2">
                {joinLabel}
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                {t("contact_p4", lang)}
              </p>
            </div>
          </div>
        </article>

        {/* Affiliation */}
        <article className="md:col-span-2 rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white shadow-sm p-6 md:p-8 flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-500 mb-5">
            {affiliatedLabel}
          </p>
          <a
            href="https://www.mef.edu.tr/"
            target="_blank"
            rel="noreferrer"
            className="block w-40 md:w-48 group"
            aria-label="MEF University"
          >
            <img
              src={`/static/mef-logo-${lang === "tr" ? "tr" : "en"}.png`}
              alt={
                lang === "tr"
                  ? "MEF Üniversitesi Logosu"
                  : "MEF University Logo"
              }
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
          </a>
        </article>
      </div>

      {/* Map */}
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-300 bg-white text-neutral-700">
            <LocationOnIcon fontSize="small" />
          </span>
          <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {t("contact_location_title", lang)}
          </h3>
          <span className="h-px bg-neutral-200 flex-1" />
        </div>

        <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
          <iframe
            title="MEF University Map"
            className="w-full block"
            src={mapSrc}
            height={420}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
