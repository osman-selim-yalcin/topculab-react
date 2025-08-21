import LaunchIcon from "@mui/icons-material/Launch";
import { useEffect, useState } from "react";
import { useLang } from "../hooks/useLang";
import { t } from "../i18n";

/* ---------- Collapse: daha belirgin buton + yumuşak içerik kutusu ---------- */
function Collapse({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4 flex flex-col items-center">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2 cursor-pointer transition"
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
        </svg>
      </button>

      <div
        className={`w-full overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4 md:p-5 text-left">
          {children}
        </div>
      </div>
    </div>
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

export default function Research() {
  const [lang] = useLang();

  useEffect(() => {
    document.title = `${t("research", lang)} - MiS Lab`;
  }, [lang]);

  return (
    <section className="container mx-auto px-4 ">
      {/* Başlık + ince ayraç */}
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight flex flex-col items-center">
          {t("research", lang)}
          <div className="mt-3 h-[2px] w-48 bg-neutral-200" />
        </h2>
      </header>

      {/* Block 1: metin sol, görsel sağ */}
      <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-5 md:p-6 mb-10">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Text */}
          <div className="w-full lg:w-7/12">
            <h3 className="text-2xl font-semibold tracking-tight mb-3">
              {t("research_1_title", lang)}
            </h3>
            <p
              className="leading-relaxed text-neutral-800"
              dangerouslySetInnerHTML={{ __html: t("research_1_p", lang) }}
            />
          </div>
          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src="/static/A.jpg"
              alt=""
              className="w-full max-w-sm rounded-xl shadow ring-1 ring-neutral-200/70"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <Collapse title={t("research_1_sub_1", lang)}>
          <ul className="list-disc pl-6 space-y-3 marker:text-neutral-500">
            <li>
              <p>
                <b>Topcu, M. N.</b> &amp; Hirst, W. (2022). Collective mental
                time travel: Current research and future directions. Progress in
                Brain Research, 274(1), 71-97.
                <DocLink href="https://doi.org/10.1016/bs.pbr.2022.06.002" />
              </p>
            </li>
            <li>
              <p>
                <b>Topcu, M. N.</b> &amp; Hirst, W. (2020). Remembering a
                nation's past to imagine its future: The role of event
                specificity, phenomenology, valence, and perceived agency.
                Journal of Experimental Psychology: Learning, Memory, and
                Cognition 46(3), 563-579.
                <DocLink href="https://doi.org/10.1037/xlm0000746" />
              </p>
            </li>
            <li>
              <p>
                Merck, C., <b>Topcu, M. N.</b>, &amp; Hirst, W. (2016).
                Collective mental time travel: Creating a shared future through
                our shared past. Memory Studies, 9(3), 284-294.
                <DocLink href="https://doi.org/10.1177/1750698016645236" />
              </p>
            </li>
          </ul>
        </Collapse>
      </article>

      {/* Block 2: görsel sol, metin sağ */}
      <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-5 md:p-6 mb-10">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src="/static/B.jpg"
              alt=""
              className="w-full max-w-sm rounded-xl shadow ring-1 ring-neutral-200/70"
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Text */}
          <div className="w-full lg:w-7/12">
            <h3 className="text-2xl font-semibold tracking-tight mb-3">
              {t("research_2_title", lang)}
            </h3>
            <p
              className="leading-relaxed text-neutral-800"
              dangerouslySetInnerHTML={{ __html: t("research_2_p", lang) }}
            />
          </div>
        </div>

        <Collapse title={t("research_1_sub_1", lang)}>
          <ul className="list-disc pl-6 space-y-3 marker:text-neutral-500">
            <li>
              <p>
                <b>Topçu, M. N.</b> &amp; Hirst, W. (2024). When the personal
                and the collective intersects: Memory, future thinking, and
                perceived agency during the COVID-19 Pandemic. Journal of
                Experimental Psychology: General 153(9), 2258-2278.
                <DocLink href="https://doi.org/10.1037/xge0001624" />
              </p>
            </li>
            <li>
              <p>
                Cheriet, N.*, <b>Topçu, M. N.</b>*, Bastin, C., Hirst W., &amp;
                Folville, A. (2023). A day that America will remember: Flashbulb
                memory, collective memory, and future thinking for the Capitol
                Riots. Memory, 31(5), 715-731, (*Equal contribution).
                <DocLink href="https://doi.org/10.1080/09658211.2023.2190570" />
              </p>
            </li>
            <li>
              <p>
                <b>Topçu, M. N.</b>, Wang, Z., &amp; Hirst, W. (in prep.). Past,
                present, and future perceptions of the COVID-19 pandemic in the
                US and in China: A longitudinal exploration.
              </p>
            </li>
          </ul>
        </Collapse>
      </article>

      {/* Block 3: metin sol, görsel sağ */}
      <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-5 md:p-6 mb-10">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Text */}
          <div className="w-full lg:w-7/12">
            <h3 className="text-2xl font-semibold tracking-tight mb-3">
              {t("research_3_title", lang)}
            </h3>
            <p
              className="leading-relaxed text-neutral-800"
              dangerouslySetInnerHTML={{ __html: t("research_3_p", lang) }}
            />
          </div>
          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src="/static/C.jpg"
              alt=""
              className="w-full max-w-sm rounded-xl shadow ring-1 ring-neutral-200/70"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <Collapse title={t("research_1_sub_1", lang)}>
          <ul className="list-disc pl-6 space-y-3 marker:text-neutral-500">
            <li>
              <p>
                <b>Topçu, M. N.</b>, Wertsch, J., &amp; Hirst, W. (in prep.).
                The role of narratives in collective future thinking: The case
                of American exceptionalism.
              </p>
            </li>
            <li>
              <p>
                <b>Topçu, M. N.</b> (2024). National goals and collective future
                thinking: Structural influences. Psychonomic Society 65
                <sup>th</sup> Annual Meeting, New York, NY; USA.
              </p>
            </li>
          </ul>
        </Collapse>
      </article>

      {/* Block 4: görsel sol, metin sağ */}
      <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-5 md:p-6 mb-10">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src="/static/D.jpg"
              alt=""
              className="w-full max-w-sm rounded-xl shadow ring-1 ring-neutral-200/70"
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Text */}
          <div className="w-full lg:w-7/12">
            <h3 className="text-2xl font-semibold tracking-tight mb-3">
              {t("research_4_title", lang)}
            </h3>
            <p
              className="leading-relaxed text-neutral-800"
              dangerouslySetInnerHTML={{ __html: t("research_4_p", lang) }}
            />
          </div>
        </div>

        <Collapse title={t("research_1_sub_1", lang)}>
          <ul className="list-disc pl-6 space-y-3 marker:text-neutral-500">
            <li>
              <p>
                <b>Topçu, M. N.</b>, Mutaf, S., &amp; Boduroglu, A. (submitted).
                Collective memory and future thinking shape the experience of
                collective anxiety in the context of elections.
              </p>
            </li>
            <li>
              <p>
                Sözer, E., <b>Topçu, M. N.</b>, Boduroglu, A. (2024).
                What&apos;s next? Turkish general elections as a historic moment
                for remembering the past and projecting the future. Psychonomic
                Society 65<sup>th</sup> Annual Meeting, New York, NY, USA.
              </p>
            </li>
          </ul>
        </Collapse>
      </article>
    </section>
  );
}
