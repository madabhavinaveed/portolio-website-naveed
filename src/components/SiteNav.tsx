import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#lately", label: "Lately" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SiteNav = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-nav">
      <div className="wrapper site-nav-inner">
        <a href="/" className="nav-brand">
          Naveed Madabhavi
        </a>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "light" : "dark"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default SiteNav;
