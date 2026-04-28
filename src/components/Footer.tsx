import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import XIcon from "@mui/icons-material/X";
import { useLang } from "../hooks/useLang";
import { t, type TKey } from "../i18/i18n";
import ResearchGateIcon from "./ResearchGateIcon";

const FOOTER_NAV: { key: TKey; path: string }[] = [
  { key: "people", path: "/people" },
  { key: "research", path: "/research" },
  { key: "publications", path: "/publications" },
  { key: "news-events", path: "/news-events" },
  { key: "contact", path: "/contact" },
];

export default function Footer() {
  const [lang] = useLang();
  const { search } = useLocation();
  const year = new Date().getFullYear();

  const withLang = useMemo(
    () => (path: string) => `${path}${search || `?lang=${lang}`}`,
    [lang, search]
  );

  const tagline =
    lang === "tr"
      ? "MEF Üniversitesi Psikoloji Bölümü bünyesinde kolektif bellek, gelecek düşüncesi ve toplumsal biliş üzerine araştırmalar."
      : "Research on collective memory, future thinking, and social cognition at the Department of Psychology, MEF University.";

  return (
    <footer className="mt-auto bg-neutral-950 text-neutral-100">
      {/* Top hairline */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)",
        }}
      />

      <div className="container mx-auto px-4 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand + contact */}
          <div className="md:col-span-5">
            <NavLink
              to={withLang("/")}
              className="group inline-flex items-baseline gap-1.5"
              aria-label="Memory in Society Lab"
            >
              <span className="text-2xl font-bold tracking-tight text-white">
                MiS
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 group-hover:text-white transition">
                Lab
              </span>
            </NavLink>

            <p className="mt-4 text-sm leading-relaxed text-neutral-400 max-w-sm">
              {tagline}
            </p>

            <address className="not-italic mt-6 space-y-3 text-[14px]">
              <div className="flex items-center gap-3 text-neutral-400">
                <LocationOnIcon
                  fontSize="small"
                  className="text-neutral-500"
                  aria-hidden
                />
                <span>İstanbul, Türkiye</span>
              </div>
              <a
                href="mailto:topculab@gmail.com"
                className="group flex items-center gap-3 text-neutral-300 hover:text-white transition"
              >
                <MailOutlineIcon
                  fontSize="small"
                  className="text-neutral-500 group-hover:text-white transition"
                  aria-hidden
                />
                <span className="underline decoration-neutral-700 underline-offset-4 group-hover:decoration-white transition">
                  topculab@gmail.com
                </span>
              </a>
            </address>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <span className="block text-[10px] uppercase tracking-[0.22em] font-bold text-neutral-500 mb-4">
              {t("quick_links", lang)}
            </span>
            <ul className="space-y-2">
              {FOOTER_NAV.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={withLang(item.path)}
                    className="group inline-flex items-center gap-2.5 text-[14px] text-neutral-400 hover:text-white transition"
                  >
                    <span
                      aria-hidden
                      className="h-px w-3 bg-neutral-700 group-hover:w-6 group-hover:bg-white transition-all duration-300"
                    />
                    {t(item.key, lang)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect + MEF */}
          <div className="md:col-span-4">
            <span className="block text-[10px] uppercase tracking-[0.22em] font-bold text-neutral-500 mb-4">
              {lang === "tr" ? "Takip Edin" : "Follow"}
            </span>

            <div className="flex gap-2">
              <SocialIcon href="https://x.com/meymunent" title="X (Twitter)">
                <XIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/meymune-top%C3%A7u-1545951a/"
                title="LinkedIn"
              >
                <LinkedInIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon
                href="https://www.researchgate.net/profile/Meymune-Topcu-2"
                title="ResearchGate"
              >
                <ResearchGateIcon size={16} />
              </SocialIcon>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/70">
              <span className="block text-[10px] uppercase tracking-[0.22em] font-bold text-neutral-500 mb-3">
                {lang === "tr" ? "Bağlı Olduğumuz Kurum" : "Affiliated With"}
              </span>
              <a
                href="https://www.mef.edu.tr/"
                className="group block w-32 md:w-40"
                target="_blank"
                rel="noreferrer"
                aria-label="MEF University"
              >
                <img
                  className="w-full opacity-90 group-hover:opacity-100 transition"
                  src={`/static/mef-logo-${lang === "tr" ? "tr" : "en"}.png`}
                  alt={
                    lang === "tr"
                      ? "MEF Üniversitesi Logosu"
                      : "MEF University Logo"
                  }
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="120"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom credit */}
      <div className="border-t border-neutral-800/70">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
          <span>
            © {year} MiS Lab ·{" "}
            {lang === "tr" ? "Tüm hakları saklıdır" : "All rights reserved"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-neutral-600">
            {lang === "tr" ? "MEF Üniversitesi" : "MEF University"}
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
      aria-label={title}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 hover:bg-white hover:text-neutral-900 hover:border-white transition"
    >
      {children}
    </a>
  );
}
