import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLang } from "../hooks/useLang";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { t, type TKey } from "../i18/i18n";

export default function Home() {
  const [lang] = useLang();
  const { search } = useLocation();

  const withLang = useMemo(
    () => (path: string) => `${path}${search || `?lang=${lang}`}`,
    [lang, search]
  );

  useDocumentMeta({
    title: `${t("home_title", lang)} | MiS Lab`,
    description:
      lang === "tr"
        ? "Bellek ve Toplum Laboratuvarı, MEF Üniversitesi Psikoloji Bölümü'nde kolektif bellek, gelecek düşüncesi, algılanan faillik ve kolektif endişe üzerine araştırmalar yürütmektedir."
        : "Memory in Society Lab at MEF University studies collective memory, mental time travel, perceived agency, and collective anxiety in social contexts.",
  });

  const areas: { titleKey: TKey; image: string }[] = [
    { titleKey: "research_1_title", image: "/static/A.jpg" },
    { titleKey: "research_2_title", image: "/static/B.jpg" },
    { titleKey: "research_3_title", image: "/static/C.jpg" },
    { titleKey: "research_4_title", image: "/static/D.jpg" },
  ];

  const labels = {
    welcome: lang === "tr" ? "Hoş Geldiniz" : "Welcome",
    inquiry: lang === "tr" ? "Araştırma Alanları" : "Areas of Inquiry",
    latest: lang === "tr" ? "Son Haberler" : "Latest",
    connect: lang === "tr" ? "İletişim" : "Connect",
    viewResearch:
      lang === "tr" ? "Tüm araştırma alanları" : "View all research areas",
    viewNews: lang === "tr" ? "Tüm haberler" : "View all news",
    visit: lang === "tr" ? "İncele" : "Read more",
    email: lang === "tr" ? "E-posta gönder" : "Send an email",
    contactPage: lang === "tr" ? "İletişim sayfası" : "Contact page",
    getInTouch: lang === "tr" ? "Bize Ulaşın" : "Get in Touch",
    getInTouchBlurb:
      lang === "tr"
        ? "Araştırmamız, iş birlikleri veya laba katılma hakkında sorularınız için bize yazın."
        : "Reach out about our research, collaborations, or joining the lab.",
  };

  return (
    <div>
      {/* Hero */}
      <div className="relative">
        <picture>
          <source
            srcSet="/static/Home_mobile.jpg"
            media="(max-width: 1024px)"
          />
          <img
            src="/static/Home.jpg"
            alt={t("home_title", lang)}
            className="w-full select-none"
            draggable={false}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="528"
          />
        </picture>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl text-center px-4 font-semibold tracking-tight [text-shadow:2px_2px_4px_#000]">
            {t("home_title", lang)}
          </h1>
        </div>
      </div>

      <section className="container mx-auto px-4 pt-12 pb-16 md:pb-24">
        {/* Welcome — editorial opener, no box */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 md:gap-5">
              <span className="h-px w-10 md:w-16 bg-neutral-300" />
              <span className="text-[15px] md:text-[18px] uppercase tracking-[0.4em] font-bold text-neutral-800">
                {labels.welcome}
              </span>
              <span className="h-px w-10 md:w-16 bg-neutral-300" />
            </div>
          </div>

          <p className="mt-10 text-[17px] md:text-[18px] text-neutral-800 leading-[1.8]">
            {t("home_p1", lang)}
          </p>

          <p className="mt-5 text-[15px] text-neutral-700 leading-[1.75]">
            {t("home_p2", lang)}
          </p>

          <NavLink
            to={withLang("/people")}
            className="group mt-10 flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 md:p-5 shadow-sm hover:border-neutral-400 hover:shadow-md transition"
          >
            <img
              src="/static/Picture1.jpg"
              alt="Meymune N. Topçu"
              className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover ring-1 ring-neutral-200 shadow-sm shrink-0"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-1 min-w-0">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-semibold text-neutral-500">
                <span className="h-px w-4 bg-neutral-300" />
                {lang === "tr" ? "Lab Yürütücüsü" : "Lab Lead"}
              </span>
              <span className="block mt-1 text-[16px] md:text-[17px] font-semibold tracking-tight text-neutral-900">
                Dr. Meymune N. Topçu
              </span>
              <span className="block mt-0.5 text-[12.5px] text-neutral-600 leading-snug">
                {lang === "tr"
                  ? "Yardımcı Doçent · MEF Üniversitesi"
                  : "Assistant Professor · MEF University"}
              </span>
            </div>
            <span className="shrink-0 inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-300 text-neutral-700 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition duration-300">
              <ArrowForwardIcon
                sx={{ fontSize: 14 }}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </NavLink>
        </div>

        {/* Areas of Inquiry */}
        <div className="max-w-5xl mx-auto mt-16">
          <SectionPill label={labels.inquiry} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {areas.map((area) => (
              <NavLink
                key={area.titleKey}
                to={withLang("/research")}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-neutral-400 transition"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={area.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-900 leading-snug">
                    {t(area.titleKey, lang)}
                  </h3>
                  <div className="mt-3 h-px w-12 bg-neutral-300" />
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-500 group-hover:text-neutral-900 transition">
                    {labels.visit}
                    <ArrowForwardIcon
                      sx={{ fontSize: 14 }}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </NavLink>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <NavLink
              to={withLang("/research")}
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-700 hover:text-neutral-900 transition"
            >
              {labels.viewResearch}
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full border border-neutral-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition duration-300">
                <ArrowForwardIcon sx={{ fontSize: 12 }} />
              </span>
            </NavLink>
          </div>
        </div>

        {/* Latest news */}
        <div className="max-w-5xl mx-auto mt-16">
          <SectionPill label={labels.latest} />

          <NavLink
            to={withLang("/news-events")}
            className="group relative block overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-neutral-400 transition"
          >
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="relative md:w-[320px] md:shrink-0">
                <div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden bg-neutral-100">
                  <img
                    src="/static/7. Lab M. Dec, 25 Elif.jpeg"
                    alt="Lab meeting with Elif Sözer, December 2025"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <span className="self-start inline-flex items-center rounded-full bg-neutral-900 text-white text-[11px] font-mono font-semibold tracking-[0.18em] px-3 py-1">
                  {t("news_1_date", lang)}
                </span>
                <div className="mt-3 h-px w-12 bg-neutral-300" />
                <p className="mt-4 text-[15px] text-neutral-700 leading-relaxed">
                  {t("news_1_text", lang)}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-500 group-hover:text-neutral-900 transition">
                  {labels.viewNews}
                  <ArrowForwardIcon
                    sx={{ fontSize: 14 }}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </div>
          </NavLink>
        </div>

        {/* Connect */}
        <div className="max-w-3xl mx-auto mt-16">
          <SectionPill label={labels.connect} />

          <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6 md:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
              {labels.getInTouch}
            </h3>
            <div className="mt-3 h-px w-12 bg-neutral-300" />
            <p className="mt-5 text-[15px] text-neutral-700 leading-relaxed">
              {labels.getInTouchBlurb}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:topculab@gmail.com"
                className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition duration-300"
              >
                <span className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-300 text-neutral-700 group-hover:bg-white group-hover:text-neutral-900 group-hover:border-white transition">
                  <MailOutlineIcon fontSize="small" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-neutral-500 group-hover:text-neutral-300 transition">
                    {labels.email}
                  </span>
                  <span className="block mt-0.5 text-[14px] font-medium truncate">
                    topculab@gmail.com
                  </span>
                </span>
              </a>

              <NavLink
                to={withLang("/contact")}
                className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition duration-300"
              >
                <span className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-300 text-neutral-700 group-hover:bg-white group-hover:text-neutral-900 group-hover:border-white transition">
                  <ArrowForwardIcon fontSize="small" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-neutral-500 group-hover:text-neutral-300 transition">
                    {labels.contactPage}
                  </span>
                  <span className="block mt-0.5 text-[14px] font-medium truncate">
                    {t("contact", lang)}
                  </span>
                </span>
              </NavLink>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

function SectionPill({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="inline-flex items-center justify-center h-8 px-3.5 rounded-full bg-neutral-900 text-white text-[11px] font-mono font-semibold tracking-[0.18em]">
        {label}
      </span>
      <span className="h-px bg-neutral-200 flex-1" />
    </div>
  );
}
