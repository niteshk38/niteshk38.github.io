const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Nitesh Kumar. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Software Engineer based in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
