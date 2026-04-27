import { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { t, type TKey } from "../i18/i18n";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

type NewsItem = {
  id: number;
  image?: string;
  imageAlt?: string;
};

const ITEMS: NewsItem[] = [
  {
    id: 1,
    image: "/static/7. Lab M. Dec, 25 Elif.jpeg",
    imageAlt: "Lab meeting with Elif Sözer, December 2025",
  },
  {
    id: 2,
    image: "/static/6. Lab M. Oct, 25.jpeg",
    imageAlt: "Fall semester first lab meeting, October 2025",
  },
  {
    id: 3,
    image: "/static/5. Koç.JPG",
    imageAlt: "IX. Deneysel Bilişsel Psikoloji Sempozyumu, Koç University, September 2025",
  },
  {
    id: 4,
    image: "/static/4. Prag.jpeg",
    imageAlt: "Memory Studies Association conference, Prague 2025",
  },
  {
    id: 5,
    image: "/static/3. Sarmac.JPG",
    imageAlt: "SARMAC 15th Biennial Meeting, Kildare, Ireland, June 2025",
  },
  {
    id: 6,
    image: "/static/2. Lab M. Feb, 25.jpeg",
    imageAlt: "Spring semester first lab meeting, February 2025",
  },
  {
    id: 7,
    image: "/static/1. Psychonomics.JPG",
    imageAlt: "Psychonomic Society 65th Annual Meeting, New York, November 2024",
  },
];

export default function News() {
  const [lang] = useLang();

  useDocumentMeta({
    title: `${t("news_title", lang)} - MiS Lab`,
    description:
      lang === "tr"
        ? "Memory in Society Lab haberleri, lab toplantıları ve katıldığımız akademik konferanslardan güncellemeler."
        : "Updates from the Memory in Society Lab: meetings, conferences, and presentations from our team.",
  });

  useEffect(() => {
    document.title = `${t("news_title", lang)} - MiS Lab`;
  }, [lang]);

  return (
    <section className="container mx-auto px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight flex flex-col items-center">
          {t("news_title", lang)}
          <div className="mt-3 h-[2px] w-48 bg-neutral-200" />
        </h1>
      </header>

      <div className="mx-auto max-w-3xl mb-10">
        <ol className="relative border-l border-neutral-200 pl-6 space-y-6">
          {ITEMS.map((item) => {
            const dateKey = `news_${item.id}_date` as TKey;
            const textKey = `news_${item.id}_text` as TKey;
            return (
              <li key={item.id} className="relative">
                <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-neutral-300 ring-4 ring-white" />
                <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-5">
                  <span className="inline-flex items-center rounded-full bg-neutral-900 text-white text-xs px-2.5 py-1 mb-3">
                    {t(dateKey, lang)}
                  </span>
                  <p className="text-neutral-800 leading-relaxed">
                    {t(textKey, lang)}
                  </p>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      className="mt-4 w-full h-auto rounded-xl shadow ring-1 ring-neutral-200/70"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
