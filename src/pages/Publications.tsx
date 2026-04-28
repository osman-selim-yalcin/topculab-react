import LaunchIcon from "@mui/icons-material/Launch";
import { Children, cloneElement, isValidElement } from "react";
import { useLang } from "../hooks/useLang";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { t } from "../i18/i18n";

const YEARS = ["2025", "2024", "2023", "2022", "2021", "2020", "2016"];

export default function Publications() {
  const [lang] = useLang();

  useDocumentMeta({
    title: `${t("publications", lang)} - MiS Lab`,
    description:
      lang === "tr"
        ? "Bellek ve Toplum Laboratuvarı'nın yıllara göre derlenmiş hakemli makaleleri, kitap bölümleri ve diğer akademik yayınları."
        : "Peer-reviewed articles, book chapters, and other academic publications from the Memory in Society Lab, organized by year.",
  });

  return (
    <section className="container mx-auto px-4 pb-16 md:pb-24">
      {/* Header */}
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight flex flex-col items-center">
          {t("publications", lang)}
          <div className="mt-3 h-[2px] w-48 bg-neutral-200" />
        </h2>
      </header>

      {/* Year nav */}
      <nav
        aria-label={lang === "tr" ? "Yıllara göre" : "Browse by year"}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {YEARS.map((year) => (
          <a
            key={year}
            href={`#y${year}`}
            className="px-3.5 py-1.5 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-700 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition"
          >
            {year}
          </a>
        ))}
      </nav>

      {/* Years */}
      <div className="max-w-4xl mx-auto space-y-10">
        <YearSection id="y2025" title="2025">
          <PubItem>
            Yamashiro, J. &amp; <b>Topçu, M. N.</b> (2025). Collective future
            thinking. In A. Erll &amp; W. Hirst (Eds.){" "}
            <em>
              Cognition, culture, and political momentum: A companion to
              interdisciplinary memory research.
            </em>{" "}
            Oxford University Press.
            <DocLink href="https://global.oup.com/academic/product/cognition-culture-and-political-momentum-9780197788332?cc=tr&lang=en&" />
          </PubItem>
          <PubItem>
            Batiashvili, N., <b>Topçu, M. N.</b>, &amp; Wertsch, J. V. (2025).
            Memory and anxiety: A sociocultural approach: Introduction to the
            Special Collection. <em>Memory, Mind &amp; Media, 4, e9.</em>
            <DocLink href="https://www.cambridge.org/core/journals/memory-mind-and-media/article/memory-and-anxiety-a-sociocultural-approach/CDB5A304F35242C24DDE9664C4F97F0E" />
          </PubItem>
        </YearSection>

        <YearSection id="y2024" title="2024">
          <PubItem>
            <b>Topçu, M. N.</b> &amp; Hirst, W. (2024). When the personal and
            the collective intersects: Memory, future thinking, and perceived
            agency during the COVID-19 Pandemic.{" "}
            <em>
              Journal of Experimental Psychology: General 153(9), 2258-2278.
            </em>
            <DocLink href="https://doi.org/10.1037/xge0001624" />
          </PubItem>
        </YearSection>

        <YearSection id="y2023" title="2023">
          <PubItem>
            Hirst, W. &amp; <b>Topçu, M. N.</b> (2023). Scripts, agents, and
            interpretations: Delving into valence biases of mental time travel.{" "}
            <em>
              Journal of Applied Research in Memory and Cognition, 12(1),
              25-28.
            </em>
            <DocLink href="https://doi.org/10.1037/mac0000105" />
          </PubItem>
          <PubItem>
            Cheriet, N.*, <b>Topçu, M. N.</b>*, Bastin, C., Hirst W., &amp;
            Folville, A. (2023). A day that America will remember: Flashbulb
            memory, collective memory, and future thinking for the Capitol
            Riots. <em>Memory, 31(5), 715-731</em>, (*Equal contribution).
            <DocLink href="https://doi.org/10.1080/09658211.2023.2190570" />
          </PubItem>
        </YearSection>

        <YearSection id="y2022" title="2022">
          <PubItem>
            <b>Topcu, M. N.</b> &amp; Hirst, W. (2022). Collective mental time
            travel: Current research and future directions.{" "}
            <em>Progress in Brain Research, 274(1), 71-97.</em>
            <DocLink href="https://doi.org/10.1016/bs.pbr.2022.06.002" />
          </PubItem>
        </YearSection>

        <YearSection id="y2021" title="2021">
          <PubItem>
            <b>Topcu, M. N.</b> &amp; Hirst, W. (2021). Mémoire collective et
            élaboration. In R. Miljkovitch &amp; C. Beauvais (Eds.).{" "}
            <em>
              L&apos;élaboration mentale: Comprendre les mécanismes qui
              sous-tendent la santé mentale (pp. 149-160)
            </em>
            . Elsevier Masson. [Collective memory and elaboration. In{" "}
            <em>
              Mental elaboration: Understanding the mechanisms underlying
              mental health
            </em>
            ]
          </PubItem>
        </YearSection>

        <YearSection id="y2020" title="2020">
          <PubItem>
            <b>Topcu, M. N.</b> &amp; Hirst, W. (2020). Remembering a nation's
            past to imagine its future: The role of event specificity,
            phenomenology, valence, and perceived agency.{" "}
            <em>
              Journal of Experimental Psychology: Learning, Memory, and
              Cognition 46(3), 563-579.
            </em>
            <DocLink href="https://doi.org/10.1037/xlm0000746" />
          </PubItem>
        </YearSection>

        <YearSection id="y2016" title="2016">
          <PubItem>
            Merck, C., <b>Topcu, M. N.</b>, &amp; Hirst, W. (2016). Collective
            mental time travel: Creating a shared future through our shared
            past. <em>Memory Studies, 9(3), 284-294.</em>
            <DocLink href="https://doi.org/10.1177/1750698016645236" />
          </PubItem>
        </YearSection>
      </div>
    </section>
  );
}

function YearSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  const items = Children.toArray(children);
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center h-8 px-3.5 rounded-full bg-neutral-900 text-white text-[11px] font-mono font-semibold tracking-[0.18em]">
          {title}
        </span>
        <span className="h-px bg-neutral-200 flex-1" />
        <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-500">
          {items.length}
        </span>
      </div>

      <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-4 md:p-6">
        <ol className="list-none space-y-1">
          {items.map((child, i) =>
            isValidElement(child)
              ? cloneElement(
                  child as React.ReactElement<{ index?: number }>,
                  { index: i + 1 }
                )
              : child
          )}
        </ol>
      </article>
    </section>
  );
}

function PubItem({
  index,
  children,
}: {
  index?: number;
  children: React.ReactNode;
}) {
  return (
    <li className="group relative flex gap-4 -mx-2 px-2 py-3.5 rounded-xl transition-colors duration-300 hover:bg-neutral-50">
      <span
        aria-hidden
        className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-gradient-to-b from-neutral-900 to-neutral-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top"
      />
      <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center h-7 w-7 rounded-full border border-neutral-300 bg-white text-[10px] font-mono font-semibold tracking-wider text-neutral-600 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition duration-300">
        {String(index ?? 0).padStart(2, "0")}
      </span>
      <p className="flex-1 text-[14.5px] leading-[1.7] text-neutral-700 pt-0.5 [&_b]:text-neutral-900 [&_b]:font-semibold [&_em]:text-neutral-700">
        {children}
      </p>
    </li>
  );
}

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
