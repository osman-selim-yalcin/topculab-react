import { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { t } from "../i18n";

export default function Home() {
  const [lang] = useLang();
  useEffect(() => {
    document.title = `${t("home", lang)} - MiS Lab`;
  }, [lang]);

  return (
    <section>
      <div className="relative">
        <picture>
          <source
            srcSet="/static/Home_mobile.jpg"
            media="(max-width: 1024px)"
          />
          <img
            src="/static/Home.jpg"
            alt="Graphic Design"
            className="w-full select-none"
            draggable={false}
          />
        </picture>

        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-4xl font-semibold drop-shadow-lg text-center px-4">
            {t("home_title", lang)}
          </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="mb-4">{t("home_p1", lang)}</p>
        <p>{t("home_p2", lang)}</p>
      </div>
    </section>
  );
}
