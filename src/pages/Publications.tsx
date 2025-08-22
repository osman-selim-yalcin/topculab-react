import LaunchIcon from "@mui/icons-material/Launch";
import { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { t } from "../i18/i18n";

export default function Publications() {
  const [lang] = useLang();

  useEffect(() => {
    document.title = `${t("publications", lang)} - MiS Lab`;
  }, [lang]);

  return (
    <section className="container mx-auto px-4">
      {/* Header + year chips */}
      <header className="text-center mb-8">
        <h2 className="text-3xl font-semibold tracking-tight flex flex-col items-center">
          {t("publications", lang)}
          <div className="mt-3 h-[2px] w-48 bg-neutral-200" />
        </h2>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
          <a
            href="#in-press"
            className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
          >
            In Press
          </a>
          <a
            href="#y2024"
            className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
          >
            2024
          </a>
          <a
            href="#y2023"
            className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
          >
            2023
          </a>
          <a
            href="#y2022"
            className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
          >
            2022
          </a>
          <a
            href="#y2021"
            className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
          >
            2021
          </a>
          <a
            href="#y2020"
            className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
          >
            2020
          </a>
          <a
            href="#y2016"
            className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
          >
            2016
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-3xl mb-10">
        {/* In Press */}
        <YearSection id="in-press" title="In Press" pillTone="dark">
          <PubItem>
            Yamashiro, J. & <strong>Topçu, M. N.</strong> (in press). Collective
            future thinking. In A. Erll & W. Hirst (Eds.) Cognition, culture,
            and political momentum: A companion to interdisciplinary memory
            research.
          </PubItem>
        </YearSection>

        {/* 2024 */}
        <YearSection id="y2024" title="2024">
          <PubItem>
            <strong>Topçu, M. N.</strong> & Hirst, W. (2024). When the personal
            and the collective intersects: Memory, future thinking, and
            perceived agency during the COVID-19 Pandemic.{" "}
            <em>
              Journal of Experimental Psychology: General 153(9), 2258-2278.
            </em>{" "}
            <DocLink href="https://doi.org/10.1037/xge0001624" />
          </PubItem>
        </YearSection>

        {/* 2023 */}
        <YearSection id="y2023" title="2023">
          <PubItem>
            Hirst, W. & <strong>Topçu, M. N.</strong> (2023). Scripts, agents,
            and interpretations: Delving into valence biases of mental time
            travel.{" "}
            <em>
              Journal of Applied Research in Memory and Cognition, 12(1), 25-28.
            </em>{" "}
            <DocLink href="https://doi.org/10.1037/mac0000105" />
          </PubItem>

          <PubItem>
            Cheriet, N.*, <strong>Topçu, M. N.</strong>*, Bastin, C., Hirst W.,
            &amp; Folville, A. (2023). A day that America will remember:
            Flashbulb memory, collective memory, and future thinking for the
            Capitol Riots. <em>Memory, 31(5), 715-731</em>, (*Equal
            contribution).{" "}
            <DocLink href="https://doi.org/10.1080/09658211.2023.2190570" />
          </PubItem>
        </YearSection>

        {/* 2022 */}
        <YearSection id="y2022" title="2022">
          <PubItem>
            <strong>Topcu, M. N.</strong> &amp; Hirst, W. (2022). Collective
            mental time travel: Current research and future directions.{" "}
            <em>Progress in Brain Research, 274(1), 71-97.</em>{" "}
            <DocLink href="https://doi.org/10.1016/bs.pbr.2022.06.002" />
          </PubItem>
        </YearSection>

        {/* 2021 */}
        <YearSection id="y2021" title="2021">
          <PubItem>
            <strong>Topcu, M. N.</strong> &amp; Hirst, W. (2021). Mémoire
            collective et élaboration. In R. Miljkovitch &amp; C. Beauvais
            (Eds.).{" "}
            <em>
              L&apos;élaboration mentale: Comprendre les mécanismes qui
              sous-tendent la santé mentale (pp. 149-160)
            </em>
            . Elsevier Masson. [Collective memory and elaboration. In{" "}
            <em>
              Mental elaboration: Understanding the mechanisms underlying mental
              health
            </em>
            ]
          </PubItem>
        </YearSection>

        {/* 2020 */}
        <YearSection id="y2020" title="2020">
          <PubItem>
            <strong>Topcu, M. N.</strong> &amp; Hirst, W. (2020). Remembering a
            nation&apos;s past to imagine its future: The role of event
            specificity, phenomenology, valence, and perceived agency.{" "}
            <em>
              Journal of Experimental Psychology: Learning, Memory, and
              Cognition 46(3), 563-579.
            </em>{" "}
            <DocLink href="https://doi.org/10.1037/xlm0000746" />
          </PubItem>
        </YearSection>

        {/* 2016 */}
        <YearSection id="y2016" title="2016">
          <PubItem>
            Merck, C., <strong>Topcu, M. N.</strong>, &amp; Hirst, W. (2016).
            Collective mental time travel: Creating a shared future through our
            shared past. <em>Memory Studies, 9(3), 284-294.</em>{" "}
            <DocLink href="https://doi.org/10.1177/1750698016645236" />
          </PubItem>
        </YearSection>
      </div>
    </section>
  );
}

/* ---------- Small presentational helpers ---------- */

function YearSection({
  id,
  title,
  children,
  pillTone = "light",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  pillTone?: "light" | "dark";
}) {
  return (
    <section id={id} className="mb-8 scroll-mt-24">
      {/* Year header with divider */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className={
            pillTone === "dark"
              ? "inline-flex items-center rounded-full bg-neutral-900 text-white text-xs px-2.5 py-1"
              : "inline-flex items-center rounded-full bg-neutral-100 text-neutral-900 text-xs px-2.5 py-1"
          }
        >
          {title}
        </span>
        <span className="h-px bg-neutral-200 flex-1" />
      </div>

      {/* Timeline list */}
      <div className="pl-5 border-l border-neutral-200 space-y-4">
        {children}
      </div>
    </section>
  );
}

function PubItem({ children }: { children: React.ReactNode }) {
  return (
    <article className="relative">
      {/* timeline dot */}
      <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-neutral-300 ring-4 ring-white" />
      <p className="ml-3 text-neutral-800">{children}</p>
    </article>
  );
}

function DocLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
      title="Open link"
    >
      Link
      <LaunchIcon sx={{ fontSize: 16 }} />
    </a>
  );
}
