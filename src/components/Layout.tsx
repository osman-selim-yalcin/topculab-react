import { useMemo, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function getLangFromSearch(search: string): "en" | "tr" {
  const p = new URLSearchParams(search);
  const lang = p.get("lang");
  return lang === "tr" ? "tr" : "en";
}

export default function Layout() {
  const { search } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const lang = getLangFromSearch(search);

  const withLang = useMemo(
    () => (path: string) => `${path}${search || `?lang=${lang}`}`,
    [lang, search]
  );

  const changeLanguage = (next: "en" | "tr") => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.location.href = url.toString();
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm md:text-base transition ${
      isActive
        ? "bg-neutral-800 text-white"
        : "text-neutral-200 hover:text-white hover:bg-neutral-800"
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR (sticky-top, bg-dark) */}
      <nav className="sticky top-0 z-50 w-full bg-neutral-900 text-neutral-100 border-b border-neutral-800">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
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
                Home
              </NavLink>
              <NavLink to={withLang("/people")} className={navLinkClass}>
                People
              </NavLink>
              <NavLink to={withLang("/research")} className={navLinkClass}>
                Research
              </NavLink>
              <NavLink to={withLang("/publications")} className={navLinkClass}>
                Publications
              </NavLink>
              <NavLink to={withLang("/contact")} className={navLinkClass}>
                Contact
              </NavLink>

              {/* Language dropdown (ms-auto) */}
              <div className="relative ml-2">
                <button
                  onClick={() => setLangOpen((s) => !s)}
                  className="px-3 py-2 rounded-md text-neutral-200 hover:text-white hover:bg-neutral-800"
                  aria-haspopup="menu"
                  aria-expanded={langOpen}
                  title="Language"
                >
                  🌐
                </button>
                {langOpen && (
                  <ul
                    className="absolute right-0 mt-2 min-w-40 rounded-md border border-neutral-700 bg-white text-neutral-900 shadow-lg text-base"
                    onMouseLeave={() => setLangOpen(false)}
                    role="menu"
                  >
                    <li>
                      <button
                        className="w-full text-left px-3 py-2 hover:bg-neutral-100"
                        onClick={() => changeLanguage("en")}
                        role="menuitem"
                      >
                        🇬🇧 English
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full text-left px-3 py-2 hover:bg-neutral-100"
                        onClick={() => changeLanguage("tr")}
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
                  Home
                </NavLink>
                <NavLink
                  to={withLang("/people")}
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  People
                </NavLink>
                <NavLink
                  to={withLang("/research")}
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Research
                </NavLink>
                <NavLink
                  to={withLang("/publications")}
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Publications
                </NavLink>
                <NavLink
                  to={withLang("/contact")}
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </NavLink>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="flex-1 px-3 py-2 rounded-md bg-neutral-800 text-neutral-100"
                  >
                    🇬🇧 English
                  </button>
                  <button
                    onClick={() => changeLanguage("tr")}
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

      {/* Header bölgesi (blok header karşılığı) */}
      <header>{/* sayfa başlıkları burada render edilebilir */}</header>

      {/* İçerik */}
      <main>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="mt-auto bg-neutral-900 text-neutral-100">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-lg font-semibold">Contact</h5>
              <p className="text-sm mt-2">📍 İstanbul, Türkiye</p>
              <p className="text-sm">✉️ topculab@gmail.com</p>
              <div className="flex gap-3 mt-3 text-xl">
                <a
                  href="https://x.com/meymunent"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                  title="X (Twitter)"
                >
                  𝕏
                </a>
                <a
                  href="https://www.linkedin.com/in/meymune-top%C3%A7u-1545951a/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                  title="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://www.researchgate.net/profile/Meymune-Topcu-2"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                  title="ResearchGate"
                >
                  RG
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="https://www.mef.edu.tr/"
                className="block w-40 md:w-48"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-full drop-shadow"
                  src={`/static/mef-logo-${lang === "tr" ? "tr" : "en"}.png`}
                  alt="MEF University Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
