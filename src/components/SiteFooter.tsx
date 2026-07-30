const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="wrapper site-footer-inner">
        <p>© {new Date().getFullYear()} Naveed Madabhavi</p>
        <a href="mailto:madabhavinaveed@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default SiteFooter;
