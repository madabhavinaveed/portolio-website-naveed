import { useTheme } from "@/hooks/use-theme";
import { LOCALES, useLanguage } from "@/i18n/LanguageContext";

const SiteNav = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, locale, setLocale } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#lately", label: t.nav.lately },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="site-nav">
      <div className="wrapper site-nav-inner">
        <a href="/" className="nav-brand">
          Naveed Madabhavi
        </a>
        <nav className="nav-links" aria-label={t.nav.aria}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <div className="lang-switch" role="group" aria-label="Language">
            {LOCALES.map((item) => (
              <button
                key={item.code}
                type="button"
                aria-pressed={locale === item.code}
                onClick={() => setLocale(item.code)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark
            }
          >
            {theme === "dark" ? "light" : "dark"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default SiteNav;
