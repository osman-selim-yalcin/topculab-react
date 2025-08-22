import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useLang } from "../hooks/useLang";
import { t } from "../i18/i18n";

export default function Header() {
  const { search } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [lang, setLang] = useLang();

  const withLang = useMemo(
    () => (path: string) => `${path}${search || `?lang=${lang}`}`,
    [lang, search]
  );

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm md:text-base transition ${
      isActive
        ? "bg-neutral-800 text-white"
        : "text-neutral-200 hover:text-white hover:bg-neutral-800"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-neutral-900 text-neutral-100 border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Brand */}
          <a
            href={withLang("/")}
            className="text-2xl font-semibold tracking-tight"
          >
            MiS Lab
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 text-base">
            <NavLink to={withLang("/")} className={navLinkClass}>
              {t("home", lang)}
            </NavLink>
            <NavLink to={withLang("/people")} className={navLinkClass}>
              {t("people", lang)}
            </NavLink>
            <NavLink to={withLang("/research")} className={navLinkClass}>
              {t("research", lang)}
            </NavLink>
            <NavLink to={withLang("/publications")} className={navLinkClass}>
              {t("publications", lang)}
            </NavLink>
            <NavLink to={withLang("/contact")} className={navLinkClass}>
              {t("contact", lang)}
            </NavLink>

            {/* Language dropdown (ms-auto) */}
            <div className="relative ml-2">
              <button
                onClick={() => setLangOpen((s) => !s)}
                className="px-3 py-2 rounded-md text-neutral-200 hover:text-white hover:bg-neutral-800 flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={langOpen}
                aria-controls="lang-menu"
                title="Language"
              >
                <span aria-hidden>🌐</span>
                {/* Dil kodu görsel ipucu */}
                <span className="hidden md:inline text-sm font-medium">
                  {lang.toUpperCase()}
                </span>
                {/* Dropdown göstergesi */}
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    langOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {langOpen && (
                <ul
                  id="lang-menu"
                  className="absolute right-0 mt-2 min-w-40 rounded-md border border-neutral-700 bg-white text-neutral-900 shadow-lg text-base"
                  onMouseLeave={() => setLangOpen(false)}
                  role="menu"
                >
                  <li>
                    <button
                      className="w-full text-left px-3 py-2 hover:bg-neutral-100"
                      onClick={() => setLang("en")}
                      role="menuitem"
                    >
                      🇬🇧 English
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-3 py-2 hover:bg-neutral-100"
                      onClick={() => setLang("tr")}
                      role="menuitem"
                    >
                      🇹🇷 Türkçe
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Toggler (navbar-toggler) */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-neutral-800"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
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

        {/* Mobile menu (collapse) */}
        {menuOpen && (
          <div className="lg:hidden pb-3">
            <div className="flex flex-col gap-1">
              <NavLink
                to={withLang("/")}
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {t("home", lang)}
              </NavLink>
              <NavLink
                to={withLang("/people")}
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {t("people", lang)}
              </NavLink>
              <NavLink
                to={withLang("/research")}
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {t("research", lang)}
              </NavLink>
              <NavLink
                to={withLang("/publications")}
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {t("publications", lang)}
              </NavLink>
              <NavLink
                to={withLang("/contact")}
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {t("contact", lang)}
              </NavLink>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setLang("en")}
                  className="flex-1 px-3 py-2 rounded-md bg-neutral-800 text-neutral-100"
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => setLang("tr")}
                  className="flex-1 px-3 py-2 rounded-md bg-neutral-800 text-neutral-100"
                >
                  🇹🇷 Türkçe
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
