import { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { t } from "../i18n";

export default function People() {
  const [lang] = useLang();
  useEffect(() => {
    document.title = `${t("people", lang)} - MiS Lab`;
  }, [lang]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* PI */}
      <div className="mb-12">
        <h3 className="text-center text-2xl font-semibold mb-8">
          {t("people_principal_investigator", lang)}
        </h3>
        <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-start">
          <div className="flex flex-col items-center">
            <img
              src="/static/Picture1.jpg"
              alt="Meymune Topcu"
              className="rounded-2xl shadow w-full max-w-sm"
            />
            <div className="flex gap-3 mt-4">
              <a
                href="mailto:topcum@mef.edu.tr"
                className="px-3 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100"
              >
                E-mail
              </a>
              <a
                href="https://www.linkedin.com/in/meymune-top%C3%A7u-1545951a/"
                target="_blank"
                className="px-3 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/meymunent"
                target="_blank"
                className="px-3 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100"
              >
                𝕏
              </a>
              <a
                href="https://www.researchgate.net/profile/Meymune-Topcu-2"
                target="_blank"
                className="px-3 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100"
              >
                RG
              </a>
              <a
                href="/static/Meymune_Topcu_CV_2024.pdf"
                target="_blank"
                className="px-3 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100"
              >
                CV
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Meymune N. Topçu</h4>
            <p className="mt-4">{t("people_1_p1", lang)}</p>
            <p className="mt-3">{t("people_1_p2", lang)}</p>
          </div>
        </div>
      </div>

      {/* RA */}
      <div className="mb-12">
        <h3 className="text-center text-2xl font-semibold mb-8">
          {t("people_research_assistant", lang)}
        </h3>
        <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-start">
          <div className="flex justify-center">
            <img
              src="/static/Picture2.jpeg"
              alt="Inayet Dincer"
              className="rounded-2xl shadow w-full max-w-sm"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold">İnayet Dinçer</h4>
            <p className="mt-4">{t("people_2_p1", lang)}</p>
          </div>
        </div>
      </div>

      {/* Members */}
      <div className="mb-12">
        <h3 className="text-center text-2xl font-semibold mb-6">
          {t("people_members", lang)}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <img
              src="/static/Picture3.jpg"
              className="rounded-2xl shadow mx-auto mb-3"
            />
            <h5 className="font-semibold">Selin Emrin Kayran</h5>
            <p className="text-sm">{t("people_m1", lang)}</p>
          </div>
          <div className="text-center">
            <img
              src="/static/Picture4.jpg"
              className="rounded-2xl shadow mx-auto mb-3"
            />
            <h5 className="font-semibold">Eylül Öner</h5>
            <p className="text-sm">{t("people_m1", lang)}</p>
          </div>
        </div>
      </div>

      {/* Collaborators */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-3">
          {t("current_collaborators", lang)}
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Dr. Nutsa Batiashvili, Free University of Tbilisi (Georgia)</li>
          <li>{t("collab_1", lang)}</li>
          <li>Dr. Adam Putnam, Furman University (USA)</li>
          <li>Dr. William Hirst, New School for Social Research (USA)</li>
          <li>
            Dr. Henry Roediger III, Washington University in St. Louis (USA)
          </li>
          <li>Dr. Karl Szpunar, Toronto Metropolitan University (Canada)</li>
          <li>{t("collab_2", lang)}</li>
          <li>Dr. Jeremy Yamashiro, UC Santa Cruz (USA)</li>
          <li>Dr. James Wertsch, Washington University in St. Louis (USA)</li>
          <li>Sıla Mutaf, University of Michigan (USA)</li>
        </ul>
      </div>
    </section>
  );
}
