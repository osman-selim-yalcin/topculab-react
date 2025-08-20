import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import XIcon from "@mui/icons-material/X";
import { useLang } from "../hooks/useLang";
import { t } from "../i18n";

export default function Footer() {
  const [lang] = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-neutral-950 text-neutral-100">
      {/* Üst ayırıcı çizgi */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
        }}
      />

      <div className="container mx-auto py-5 px-4">
        <div className="grid grid-cols-2 gap-10 items-start">
          {/* İletişim ve sosyal medya */}
          <div>
            <h5 className="text-lg font-semibold tracking-tight">
              {t("contact", lang)}
            </h5>

            <address className="not-italic text-sm mt-3 text-neutral-300 space-y-2">
              {/* Konum */}
              <div className="flex items-start gap-2">
                <LocationOnIcon
                  fontSize="small"
                  className="mt-0.5 text-neutral-400"
                  aria-hidden
                />
                <span>İstanbul, Türkiye</span>
              </div>

              {/* E-posta */}
              <a
                href="mailto:topculab@gmail.com"
                className="group flex items-start gap-2 hover:text-white"
                title="E-posta gönder"
              >
                <MailOutlineIcon
                  fontSize="small"
                  className="mt-0.5 text-neutral-400 group-hover:text-white transition-colors"
                  aria-hidden
                />
                <span className="underline underline-offset-2">
                  topculab@gmail.com
                </span>
              </a>
            </address>

            <div className="flex gap-4 mt-4 text-neutral-300">
              <a
                href="https://x.com/meymunent"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                title="X (Twitter)"
              >
                <XIcon fontSize="medium" />
              </a>
              <a
                href="https://www.linkedin.com/in/meymune-top%C3%A7u-1545951a/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                title="LinkedIn"
              >
                <LinkedInIcon fontSize="medium" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Meymune-Topcu-2"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                title="ResearchGate"
              >
                <i
                  className="fa-brands fa-researchgate text-[24px] leading-none align-middle"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* MEF logosu */}
          <div className="flex md:justify-end">
            <a
              href="https://www.mef.edu.tr/"
              className="group block w-40 md:w-48"
              target="_blank"
              rel="noreferrer"
              aria-label="MEF University"
              title="MEF University"
            >
              <img
                className="w-full drop-shadow group-hover:drop-shadow-lg transition"
                src={`/static/mef-logo-${lang === "tr" ? "tr" : "en"}.png`}
                alt={
                  lang === "tr"
                    ? "MEF Üniversitesi Logosu"
                    : "MEF University Logo"
                }
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Alt kısım - haklar metni ortalı */}
      <div className="border-t border-neutral-800/70">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 py-4 text-center text-xs text-neutral-400">
          © {year} MiS Lab •{" "}
          {lang === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
