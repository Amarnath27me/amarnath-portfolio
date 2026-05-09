export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mw-content mx-auto px-(--spacing-section-x) py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono ts-small text-text-muted">
          © 2026 Amarnath Allamraju
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&to=amarnathallamrajar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono ts-small text-text-muted hover:text-text-secondary transition-colors duration-150"
          >
            Email
          </a>
          <span className="text-text-muted">·</span>
          <a
            href="https://www.linkedin.com/in/amarnathallamraju/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono ts-small text-text-muted hover:text-text-secondary transition-colors duration-150"
          >
            LinkedIn
          </a>
          <span className="text-text-muted">·</span>
          <a
            href="https://github.com/Amarnath27me"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono ts-small text-text-muted hover:text-text-secondary transition-colors duration-150"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
