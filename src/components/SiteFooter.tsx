import { useLanguage } from "@/i18n/LanguageContext";

const SiteFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="wrapper site-footer-inner">
        <p>© {new Date().getFullYear()} Naveed Madabhavi</p>
        <a href="mailto:madabhavinaveed@gmail.com">{t.footer.email}</a>
      </div>
    </footer>
  );
};

export default SiteFooter;
