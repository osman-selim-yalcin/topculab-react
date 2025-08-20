import { useEffect, useState } from "react";
import { useLang } from "../hooks/useLang";
import { t } from "../i18n";

function Collapse({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center mt-4">
      <button
        className="inline-flex items-center gap-2 text-blue-700 hover:underline"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        {title}
        <svg
          className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
        </svg>
      </button>
      <div className={`w-full ${open ? "block" : "hidden"}`}>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default function Research() {
  const [lang] = useLang();
  useEffect(() => {
    document.title = `${t("research", lang)} - MiS Lab`;
  }, [lang]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      {/* Block 1 */}
      <div>
        <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-start">
          <div className="order-last lg:order-none flex justify-center">
            <img
              src="/static/A.jpg"
              alt=""
              className="rounded-xl w-full max-w-sm"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              {t("research_1_title", lang)}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: t("research_1_p", lang) }} />
          </div>
        </div>
        <Collapse title={t("research_1_sub_1", lang)}>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <p>
                <b>Topcu, M. N.</b> &amp; Hirst, W. (2022). Collective mental
                time travel...
                <a
                  target="_blank"
                  href="https://doi.org/10.1016/bs.pbr.2022.06.002"
                  className="text-blue-700 underline ml-1"
                >
                  Link
                </a>
              </p>
            </li>
            <li>
              <p>
                <b>Topcu, M. N.</b> &amp; Hirst, W. (2020). Remembering a
                nation's past...
                <a
                  target="_blank"
                  href="https://doi.org/10.1037/xlm0000746"
                  className="text-blue-700 underline ml-1"
                >
                  Link
                </a>
              </p>
            </li>
            <li>
              <p>
                Merck, C., <b>Topcu, M. N.</b>, &amp; Hirst, W. (2016).
                Collective mental time travel...
                <a
                  target="_blank"
                  href="https://doi.org/10.1177/1750698016645236"
                  className="text-blue-700 underline ml-1"
                >
                  Link
                </a>
              </p>
            </li>
          </ul>
        </Collapse>
      </div>

      {/* Block 2 */}
      <div>
        <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-start">
          <div className="flex justify-center">
            <img
              src="/static/B.jpg"
              alt=""
              className="rounded-xl w-full max-w-sm"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              {t("research_2_title", lang)}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: t("research_2_p", lang) }} />
          </div>
        </div>
        <Collapse title={t("research_1_sub_1", lang)}>
          <ul className="list-disc pl-6 space-y-3">
            {/* … aynı formatta referanslar */}
          </ul>
        </Collapse>
      </div>

      {/* Block 3 */}
      <div>
        <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-start">
          <div className="order-last lg:order-none flex justify-center">
            <img
              src="/static/C.jpg"
              alt=""
              className="rounded-xl w-full max-w-sm"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              {t("research_3_title", lang)}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: t("research_3_p", lang) }} />
          </div>
        </div>
        {/* İstersen Collapse ekle */}
      </div>

      {/* Block 4 */}
      <div>
        <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-start">
          <div className="flex justify-center">
            <img
              src="/static/D.jpg"
              alt=""
              className="rounded-xl w-full max-w-sm"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              {t("research_4_title", lang)}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: t("research_4_p", lang) }} />
          </div>
        </div>
        {/* İstersen Collapse ekle */}
      </div>
    </section>
  );
}
