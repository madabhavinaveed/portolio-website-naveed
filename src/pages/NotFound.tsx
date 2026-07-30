import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="wrapper text-center py-16">
        <h1 className="page-title mb-4">404</h1>
        <p className="tagline mb-6">Page not found</p>
        <a href="/" className="project-link">
          Return to Home →
        </a>
      </div>
    </div>
  );
};

export default NotFound;
