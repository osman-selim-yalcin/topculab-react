import { useLang } from "../hooks/useLang";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { t } from "../i18/i18n";

// MUI Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import XIcon from "@mui/icons-material/X";
import ResearchGateIcon from "../components/ResearchGateIcon";

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

  useDocumentMeta({
    title: `${t("people", lang)} - MiS Lab`,
    description:
      lang === "tr"
        ? "Memory in Society Lab ekibi: Dr. Meymune N. Topçu önderliğinde MEF Üniversitesi'nde araştırmacılar, asistanlar, üyeler ve uluslararası işbirlikleri."
        : "Meet the Memory in Society Lab team led by Dr. Meymune N. Topçu at MEF University: principal investigator, research assistants, members, and international collaborators.",
  });

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
                  <ResearchGateIcon size={24} className="align-middle" />
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
              <h4 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Meymune N. Topçu
              </h4>
              <div className="mt-3 h-px w-12 bg-neutral-300" />
              <p className="mt-4 text-neutral-700 leading-relaxed text-[15px]">
                {t("people_1_p1", lang)}
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed text-[15px]">
                {t("people_1_p2", lang)}
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Research Assistant(s) */}
      <div className="mb-14">
        <h3 className="text-center text-2xl font-semibold mb-8">
          {t("people_research_assistant", lang)}
        </h3>

        <div className="space-y-8">
          {[
            {
              name: "İnayet Dinçer",
              src: "/static/Picture2.jpeg",
              bio: t("people_2_p1", lang),
            },
            {
              name: "Büşra Gözde Akay",
              src: "/static/Picture5.jpg",
              bio: t("people_3_p1", lang),
            },
          ].map((ra, idx) => (
            <article
              key={ra.name}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div
                aria-hidden
                className={`absolute top-0 ${
                  idx % 2 === 0 ? "left-0" : "right-0"
                } h-full w-1 bg-gradient-to-b from-neutral-900 via-neutral-700 to-neutral-400`}
              />
              <div
                className={`flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-stretch`}
              >
                <div className="relative md:w-[280px] md:shrink-0">
                  <div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden bg-neutral-100">
                    <img
                      src={ra.src}
                      alt={ra.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <h4 className="text-2xl font-semibold tracking-tight text-neutral-900">
                    {ra.name}
                  </h4>
                  <div className="mt-3 h-px w-12 bg-neutral-300" />
                  <p className="mt-4 text-neutral-700 leading-relaxed text-[15px]">
                    {ra.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Members */}
      <div className="mb-14">
        <h3 className="text-center text-2xl font-semibold mb-6">
          {t("people_members", lang)}
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Selin Emrin Kayran", src: "/static/Picture3.jpg" },
            { name: "Eylül Öner", src: "/static/Picture4.jpg" },
            { name: "Güney Dündar", src: "/static/Güney Dündar.jpg" },
            { name: "Elif Tunbul", src: "/static/Elif Tunbul.jpg" },
          ].map((m) => (
            <div
              key={m.name}
              className="group rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition p-4 text-center flex flex-col"
            >
              <div className="w-full overflow-hidden rounded-2xl shadow">
                <img
                  src={m.src}
                  alt={m.name}
                  className="w-full h-full object-cover aspect-square"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h5 className="font-semibold tracking-tight mt-3">{m.name}</h5>
              <p className="text-sm text-neutral-600">{t("people_m1", lang)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Collaborators */}
      <div className="mb-14">
        <h3 className="text-center text-2xl font-semibold mb-2">
          {t("current_collaborators", lang)}
        </h3>
        <div className="mx-auto h-[2px] w-16 bg-neutral-200 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COLLABORATORS.map((c) => {
            const country = lang === "tr" ? c.countryTr : c.country;
            return (
              <article
                key={c.name}
                className="group relative flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-400 hover:shadow-md"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-0 group-hover:opacity-100 transition"
                />
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 text-sm font-semibold text-neutral-700 ring-1 ring-neutral-200/70">
                  {getInitials(c.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold tracking-tight text-neutral-900">
                    {c.name}
                  </h4>
                  <p className="mt-0.5 text-sm leading-snug text-neutral-600">
                    {c.institution}
                  </p>
                </div>
                <span className="shrink-0 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-neutral-600">
                  {country}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getInitials(fullName: string): string {
  const cleaned = fullName.replace(/^Dr\.?\s+/i, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "•";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const COLLABORATORS: ReadonlyArray<{
  name: string;
  institution: string;
  country: string;
  countryTr: string;
}> = [
  {
    name: "Dr. Nutsa Batiashvili",
    institution: "Free University of Tbilisi",
    country: "Georgia",
    countryTr: "Gürcistan",
  },
  {
    name: "Dr. Ayşecan Boduroğlu",
    institution: "Koç University",
    country: "Türkiye",
    countryTr: "Türkiye",
  },
  {
    name: "Dr. Adam Putnam",
    institution: "Furman University",
    country: "USA",
    countryTr: "ABD",
  },
  {
    name: "Dr. William Hirst",
    institution: "New School for Social Research",
    country: "USA",
    countryTr: "ABD",
  },
  {
    name: "Dr. Henry Roediger III",
    institution: "Washington University in St. Louis",
    country: "USA",
    countryTr: "ABD",
  },
  {
    name: "Dr. Karl Szpunar",
    institution: "Toronto Metropolitan University",
    country: "Canada",
    countryTr: "Kanada",
  },
  {
    name: "Dr. Elif Sözer",
    institution: "Koç University",
    country: "Türkiye",
    countryTr: "Türkiye",
  },
  {
    name: "Dr. Jeremy Yamashiro",
    institution: "UC Santa Cruz",
    country: "USA",
    countryTr: "ABD",
  },
  {
    name: "Dr. James Wertsch",
    institution: "Washington University in St. Louis",
    country: "USA",
    countryTr: "ABD",
  },
  {
    name: "Sıla Mutaf",
    institution: "University of Michigan",
    country: "USA",
    countryTr: "ABD",
  },
];
