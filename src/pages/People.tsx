import { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { t } from "../i18/i18n";

// MUI Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import XIcon from "@mui/icons-material/X";

function IconLink({
  href,
  title,
  children,
  external = true,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      title={title}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm hover:bg-neutral-900 hover:text-white transition"
    >
      {children}
      <span className="sr-only">{title}</span>
    </a>
  );
}

export default function People() {
  const [lang] = useLang();

  useEffect(() => {
    document.title = `${t("people", lang)} - MiS Lab`;
  }, [lang]);

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold tracking-tight flex flex-col items-center">
        {t("people", lang)}
        <div className="mt-3 h-[2px] w-48 bg-neutral-200" />
      </h2>
      {/* Intro */}
      {/* Principal Investigator */}
      <div className="mb-14">
        <h3 className="text-center text-2xl font-semibold mb-8">
          {t("people_principal_investigator", lang)}
        </h3>

        <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-5 md:p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Photo + Icons */}
            <div className="flex-1 flex flex-col">
              <img
                className="w-full h-auto rounded-2xl mx-auto block mt-0 lg:mt-2 shadow"
                src="/static/Picture1.jpg"
                alt="Meymune Topcu"
                loading="lazy"
                decoding="async"
              />

              {/* Social / Links */}
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <IconLink
                  href="mailto:topcum@mef.edu.tr"
                  title="E-mail"
                  external={false}
                >
                  <MailOutlineIcon fontSize="small" />
                </IconLink>
                <IconLink
                  href="https://www.linkedin.com/in/meymune-top%C3%A7u-1545951a/"
                  title="LinkedIn"
                >
                  <LinkedInIcon fontSize="small" />
                </IconLink>
                <IconLink href="https://x.com/meymunent" title="X (Twitter)">
                  <XIcon fontSize="small" />
                </IconLink>
                <IconLink
                  href="https://www.researchgate.net/profile/Meymune-Topcu-2"
                  title="ResearchGate"
                >
                  <i
                    className="fa-brands fa-researchgate text-[24px] leading-none align-middle"
                    aria-hidden="true"
                  />
                </IconLink>
                <IconLink
                  href="/static/Meymune_Topcu_CV_2024.pdf"
                  title="CV (PDF)"
                  external={true}
                >
                  CV
                </IconLink>
              </div>
            </div>

            {/* Right: Text */}
            <div className="flex-2">
              <h4 className="text-xl font-semibold tracking-tight">
                Meymune N. Topçu
              </h4>
              <p className=" ">{t("people_1_p1", lang)}</p>
              <p className="mt-4 ">{t("people_1_p2", lang)}</p>
            </div>
          </div>
        </article>
      </div>

      {/* Research Assistant(s) */}
      <div className="mb-14">
        <h3 className="text-center text-2xl font-semibold mb-8">
          {t("people_research_assistant", lang)}
        </h3>

        <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-5 md:p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Photo (ikon yoksa sadece boşluk bırakır) */}
            <div className="flex-1 flex flex-col">
              <img
                className="w-full h-auto rounded-2xl mx-auto block mt-0 lg:mt-2 shadow"
                src="/static/Picture2.jpeg"
                alt="İnayet Dinçer"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right: Text */}
            <div className="flex-2">
              <h4 className="text-xl font-semibold tracking-tight">
                İnayet Dinçer
              </h4>
              <p className="mt-4 ">{t("people_2_p1", lang)}</p>
            </div>
          </div>
        </article>
      </div>

      {/* Members */}
      <div className="mb-14">
        <h3 className="text-center text-2xl font-semibold mb-6">
          {t("people_members", lang)}
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Member card */}
          <div className="lg:col-start-2 group rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition p-4 text-center">
            <img
              src="/static/Picture3.jpg"
              alt="Selin Emrin Kayran"
              className="w-full h-auto rounded-2xl mx-auto block mt-0 lg:mt-2 shadow"
              loading="lazy"
              decoding="async"
            />
            <h5 className="font-semibold tracking-tight">Selin Emrin Kayran</h5>
            <p className="text-sm text-neutral-600">{t("people_m1", lang)}</p>
          </div>

          <div className="group rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition p-4 text-center">
            <img
              src="/static/Picture4.jpg"
              alt="Eylül Öner"
              className="w-full h-auto rounded-2xl mx-auto block mt-0 lg:mt-2 shadow"
              loading="lazy"
              decoding="async"
            />
            <h5 className="font-semibold tracking-tight">Eylül Öner</h5>
            <p className="text-sm text-neutral-600">{t("people_m1", lang)}</p>
          </div>
        </div>
      </div>

      {/* Collaborators */}
      <div className="mb-14">
        <h3 className="text-xl font-semibold mb-4">
          {t("current_collaborators", lang)}
        </h3>

        <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-5 md:p-6">
          <ul className="list-disc pl-6 space-y-1 marker:text-neutral-500 text-neutral-800">
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
      </div>
    </section>
  );
}
