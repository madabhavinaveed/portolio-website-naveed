import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="wrapper text-center py-16">
        <h1 className="page-title mb-4">{t.notFound.title}</h1>
        <p className="tagline mb-6">{t.notFound.message}</p>
        <a href="/" className="project-link">
          {t.notFound.home}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
