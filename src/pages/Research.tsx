import LaunchIcon from "@mui/icons-material/Launch";
import { useState } from "react";
import { useLang } from "../hooks/useLang";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { t } from "../i18/i18n";

function DocLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center h-6 w-6 rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition align-middle ml-1"
      title="Open link"
    >
      <LaunchIcon sx={{ fontSize: 12 }} />
    </a>
  );
}

function Publications({
  children,
  count,
  label,
}: {
  children: React.ReactNode;
  count: number;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-neutral-200 px-6 md:px-8 py-5">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="group inline-flex items-center gap-3 cursor-pointer focus:outline-none"
      >
        <span className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-300 text-neutral-700 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition duration-300">
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "rotate-45" : ""
            }`}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M10 4v12M4 10h12" />
          </svg>
        </span>
        <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-700 group-hover:text-neutral-900">
          {label}
          <span className="ml-2 font-normal tracking-normal normal-case text-neutral-400">
            ({count})
          </span>
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ol className="list-none pt-6 space-y-1">{children}</ol>
        </div>
      </div>
    </div>
  );
}

function PubItem({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <li className="group relative flex gap-4 -mx-2 px-2 py-3.5 rounded-xl transition-colors duration-300 hover:bg-neutral-50">
      <span
        aria-hidden
        className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-gradient-to-b from-neutral-900 to-neutral-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top"
      />
      <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center h-7 w-7 rounded-full border border-neutral-300 bg-white text-[10px] font-mono font-semibold tracking-wider text-neutral-600 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition duration-300">
        {String(index).padStart(2, "0")}
      </span>
      <p className="flex-1 text-[14.5px] leading-[1.7] text-neutral-700 pt-0.5 [&_b]:text-neutral-900 [&_b]:font-semibold">
        {children}
      </p>
    </li>
  );
}

export default function Research() {
  const [lang] = useLang();

  useDocumentMeta({
    title: `${t("research", lang)} - MiS Lab`,
    description:
      lang === "tr"
        ? "Araştırma alanlarımız: kolektif bellek ve gelecek düşüncesi, kişisel ve kolektif bilişin kesişimi, toplumsal anlatılar ve gelecek hedefleri, kolektif endişe ve seçimler."
        : "Our research areas: collective memory and future thinking, the intersection of personal and collective cognition, national narratives and future goals, collective anxiety and elections.",
  });

  const pubLabel = t("research_1_sub_1", lang);

  const areas: {
    number: string;
    title: string;
    body: string;
    image: string;
    pubsCount: number;
    publications: React.ReactNode;
  }[] = [
    {
      number: "01",
      title: t("research_1_title", lang),
      body: t("research_1_p", lang),
      image: "/static/A.jpg",
      pubsCount: 4,
      publications: (
        <>
          <PubItem index={1}>
            Yamashiro, J. &amp; <b>Topçu, M. N.</b> (2025). Collective future
            thinking. In A. Erll &amp; W. Hirst (Eds.) Cognition, culture, and
            political momentum: A companion to interdisciplinary memory
            research. Oxford University Press.
            <DocLink href="https://global.oup.com/academic/product/cognition-culture-and-political-momentum-9780197788332?cc=tr&lang=en&" />
          </PubItem>
          <PubItem index={2}>
            <b>Topcu, M. N.</b> &amp; Hirst, W. (2022). Collective mental time
            travel: Current research and future directions. Progress in Brain
            Research, 274(1), 71-97.
            <DocLink href="https://doi.org/10.1016/bs.pbr.2022.06.002" />
          </PubItem>
          <PubItem index={3}>
            <b>Topcu, M. N.</b> &amp; Hirst, W. (2020). Remembering a nation's
            past to imagine its future: The role of event specificity,
            phenomenology, valence, and perceived agency. Journal of
            Experimental Psychology: Learning, Memory, and Cognition 46(3),
            563-579.
            <DocLink href="https://doi.org/10.1037/xlm0000746" />
          </PubItem>
          <PubItem index={4}>
            Merck, C., <b>Topcu, M. N.</b>, &amp; Hirst, W. (2016). Collective
            mental time travel: Creating a shared future through our shared
            past. Memory Studies, 9(3), 284-294.
            <DocLink href="https://doi.org/10.1177/1750698016645236" />
          </PubItem>
        </>
      ),
    },
    {
      number: "02",
      title: t("research_2_title", lang),
      body: t("research_2_p", lang),
      image: "/static/B.jpg",
      pubsCount: 3,
      publications: (
        <>
          <PubItem index={1}>
            <b>Topçu, M. N.</b> &amp; Hirst, W. (2024). When the personal and
            the collective intersects: Memory, future thinking, and perceived
            agency during the COVID-19 Pandemic. Journal of Experimental
            Psychology: General 153(9), 2258-2278.
            <DocLink href="https://doi.org/10.1037/xge0001624" />
          </PubItem>
          <PubItem index={2}>
            Cheriet, N.*, <b>Topçu, M. N.</b>*, Bastin, C., Hirst W., &amp;
            Folville, A. (2023). A day that America will remember: Flashbulb
            memory, collective memory, and future thinking for the Capitol
            Riots. Memory, 31(5), 715-731, (*Equal contribution).
            <DocLink href="https://doi.org/10.1080/09658211.2023.2190570" />
          </PubItem>
          <PubItem index={3}>
            <b>Topçu, M. N.</b>, Wang, Z., &amp; Hirst, W. (in prep.). Past,
            present, and future perceptions of the COVID-19 pandemic in the US
            and in China: A longitudinal exploration.
          </PubItem>
        </>
      ),
    },
    {
      number: "03",
      title: t("research_3_title", lang),
      body: t("research_3_p", lang),
      image: "/static/C.jpg",
      pubsCount: 2,
      publications: (
        <>
          <PubItem index={1}>
            <b>Topçu, M. N.</b>, Wertsch, J., &amp; Hirst, W. (in prep.). The
            role of narratives in collective future thinking: The case of
            American exceptionalism.
          </PubItem>
          <PubItem index={2}>
            <b>Topçu, M. N.</b> (2024). National goals and collective future
            thinking: Structural influences. Psychonomic Society 65
            <sup>th</sup> Annual Meeting, New York, NY; USA.
          </PubItem>
        </>
      ),
    },
    {
      number: "04",
      title: t("research_4_title", lang),
      body: t("research_4_p", lang),
      image: "/static/D.jpg",
      pubsCount: 3,
      publications: (
        <>
          <PubItem index={1}>
            Batiashvili, N., <b>Topçu, M. N.</b>, &amp; Wertsch, J. V. (2025).
            Memory and anxiety: A sociocultural approach: Introduction to the
            Special Collection. Memory, Mind &amp; Media, 4, e9.
            <DocLink href="https://www.cambridge.org/core/journals/memory-mind-and-media/article/memory-and-anxiety-a-sociocultural-approach/CDB5A304F35242C24DDE9664C4F97F0E" />
          </PubItem>
          <PubItem index={2}>
            <b>Topçu, M. N.</b>, Mutaf, S., &amp; Boduroglu, A. (submitted).
            Collective memory and future thinking shape the experience of
            collective anxiety in the context of elections.
          </PubItem>
          <PubItem index={3}>
            Sözer, E., <b>Topçu, M. N.</b>, Boduroglu, A. (2024). What&apos;s
            next? Turkish general elections as a historic moment for remembering
            the past and projecting the future. Psychonomic Society 65
            <sup>th</sup> Annual Meeting, New York, NY, USA.
          </PubItem>
        </>
      ),
    },
  ];

  return (
    <section className="container mx-auto px-4 pb-16 md:pb-24">
      {/* Header — matches People page exactly */}
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight flex flex-col items-center">
          {t("research", lang)}
          <div className="mt-3 h-[2px] w-48 bg-neutral-200" />
        </h2>
      </header>

      {/* Research areas — same chassis as Research Assistants on People page */}
      <div className="space-y-8">
        {areas.map((area, idx) => (
          <article
            key={area.number}
            className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
          >
            <div
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-stretch`}
            >
              <div className="relative md:w-[280px] md:shrink-0">
                <div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden bg-neutral-100">
                  <img
                    src={area.image}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <h4 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  {area.title}
                </h4>
                <div className="mt-3 h-px w-12 bg-neutral-300" />
                <div
                  className="mt-4 text-neutral-700 leading-relaxed text-[15px] [&_br]:block"
                  dangerouslySetInnerHTML={{ __html: area.body }}
                />
              </div>
            </div>

            <Publications count={area.pubsCount} label={pubLabel}>
              {area.publications}
            </Publications>
          </article>
        ))}
      </div>
    </section>
  );
}
