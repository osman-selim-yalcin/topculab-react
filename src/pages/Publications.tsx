import { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { t } from "../i18n";

export default function Publications() {
  const [lang] = useLang();
  useEffect(() => {
    document.title = `${t("publications", lang)} - MiS Lab`;
  }, [lang]);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="space-y-10">
        <div>
          <h3 className="text-2xl font-semibold mb-4">2024</h3>
          <p className="mb-3">
            <b>Topçu, M. N.</b> &amp; Hirst, W. (2024). When the personal and
            the collective intersects...
            <i>
              {" "}
              Journal of Experimental Psychology: General 153(9), 2258-2278.{" "}
            </i>
            <a
              target="_blank"
              href="https://doi.org/10.1037/xge0001624"
              className="text-blue-700 underline ml-1"
            >
              Link
            </a>
          </p>
        </div>
        {/* 2023, 2022, 2021, 2020, 2016 vb. aynı format */}
      </div>
    </section>
  );
}
