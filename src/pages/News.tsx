import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLang } from "../hooks/useLang";
import { t, type TKey } from "../i18/i18n";

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
    image: "/static/5-koc-symposium.jpg",
    imageAlt:
      "IX. Deneysel Bilişsel Psikoloji Sempozyumu, Koç University, September 2025",
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
    imageAlt:
      "Psychonomic Society 65th Annual Meeting, New York, November 2024",
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

  return (
    <section className="container mx-auto px-4 pb-16 md:pb-24">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight flex flex-col items-center">
          {t("news_title", lang)}
          <div className="mt-3 h-[2px] w-48 bg-neutral-200" />
        </h2>
      </header>

      <div className="max-w-5xl mx-auto space-y-8">
        {ITEMS.map((item, idx) => {
          const dateKey = `news_${item.id}_date` as TKey;
          const textKey = `news_${item.id}_text` as TKey;
          return (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div
                className={`flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-stretch`}
              >
                {item.image && (
                  <div className="relative md:w-[320px] md:shrink-0">
                    <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden bg-neutral-100 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.imageAlt ?? ""}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                )}

                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <span className="self-start inline-flex items-center rounded-full bg-neutral-900 text-white text-[11px] font-mono font-semibold tracking-[0.18em] px-3 py-1">
                    {t(dateKey, lang)}
                  </span>
                  <div className="mt-3 h-px w-12 bg-neutral-300" />
                  <p className="mt-4 text-neutral-700 leading-relaxed text-[15px]">
                    {t(textKey, lang)}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
