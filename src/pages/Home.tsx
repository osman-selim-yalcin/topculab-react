import { useLang } from "../hooks/useLang";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { t } from "../i18/i18n";

export default function Home() {
  const [lang] = useLang();

  useDocumentMeta({
    title: `${t("home_title", lang)} | MiS Lab`,
    description:
      lang === "tr"
        ? "Bellek ve Toplum Laboratuvarı, MEF Üniversitesi Psikoloji Bölümü'nde kolektif bellek, gelecek düşüncesi, algılanan faillik ve kolektif endişe üzerine araştırmalar yürütmektedir."
        : "Memory in Society Lab at MEF University studies collective memory, mental time travel, perceived agency, and collective anxiety in social contexts.",
  });

  return (
    <div className="mx-auto">
      <div className="relative ">
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
          <h1 className="text-white md:text-4xl text-center px-4 [text-shadow:2px_2px_4px_#000]">
            {t("home_title", lang)}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <p className="mb-4">{t("home_p1", lang)}</p>
        <p>{t("home_p2", lang)}</p>
      </div>
    </div>
  );
}
