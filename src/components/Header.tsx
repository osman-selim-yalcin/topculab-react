import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useLang } from "../hooks/useLang";
import { t, type TKey } from "../i18/i18n";

const NAV: { key: TKey; path: string }[] = [
  { key: "home", path: "/" },
  { key: "people", path: "/people" },
  { key: "research", path: "/research" },
  { key: "publications", path: "/publications" },
  { key: "news-events", path: "/news-events" },
  { key: "contact", path: "/contact" },
];

export default function Header() {
  const { search } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useLang();

  const withLang = useMemo(
    () => (path: string) => `${path}${search || `?lang=${lang}`}`,
    [lang, search]
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-neutral-950 text-neutral-100 border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Brand */}
          <NavLink
            to={withLang("/")}
            className="group inline-flex items-baseline gap-1.5 select-none"
            aria-label="Memory in Society Lab — Home"
          >
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
              MiS
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-400 group-hover:text-white transition">
              Lab
            </span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) => (
              <NavLink
                key={item.path}
                to={withLang(item.path)}
                end={item.path === "/"}
                className="group relative px-3 py-2 text-[11.5px] uppercase tracking-[0.2em] font-semibold transition"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={
                        isActive
                          ? "text-white"
                          : "text-neutral-400 group-hover:text-white transition"
                      }
                    >
                      {t(item.key, lang)}
                    </span>
                    <span
                      aria-hidden
                      className={`absolute left-3 right-3 -bottom-px h-px transition-all duration-300 ${
                        isActive
                          ? "bg-white"
                          : "bg-transparent group-hover:bg-neutral-500"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* Language switch — segmented */}
            <div className="ml-3 inline-flex items-center rounded-full border border-neutral-700 p-0.5">
              <LangBtn
                code="en"
                active={lang === "en"}
                onClick={() => setLang("en")}
              />
              <LangBtn
                code="tr"
                active={lang === "tr"}
                onClick={() => setLang("tr")}
              />
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-full h-10 w-10 border border-neutral-800 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-700 transition"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-neutral-800 -mx-4 px-4 pt-3 pb-4">
            <div className="flex flex-col">
              {NAV.map((item) => (
                <NavLink
                  key={item.path}
                  to={withLang(item.path)}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center gap-3 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold border-b border-neutral-800 last:border-b-0 transition"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        aria-hidden
                        className={`h-px transition-all duration-300 ${
                          isActive
                            ? "w-6 bg-white"
                            : "w-3 bg-neutral-700 group-hover:w-5 group-hover:bg-neutral-400"
                        }`}
                      />
                      <span
                        className={
                          isActive
                            ? "text-white"
                            : "text-neutral-400 group-hover:text-white transition"
                        }
                      >
                        {t(item.key, lang)}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}

              {/* Mobile language switch */}
              <div className="mt-5 self-start inline-flex items-center rounded-full border border-neutral-700 p-0.5">
                <LangBtn
                  code="en"
                  active={lang === "en"}
                  onClick={() => setLang("en")}
                />
                <LangBtn
                  code="tr"
                  active={lang === "tr"}
                  onClick={() => setLang("tr")}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function LangBtn({
  code,
  active,
  onClick,
}: {
  code: "en" | "tr";
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      aria-label={code === "en" ? "Switch to English" : "Türkçe'ye geç"}
      className={`px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition ${
        active
          ? "bg-white text-neutral-900"
          : "text-neutral-400 hover:text-white"
      }`}
    >
      {code.toUpperCase()}
    </button>
  );
}
