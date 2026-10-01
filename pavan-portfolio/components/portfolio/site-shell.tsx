import { ArrowUpRight, Download } from "lucide-react";
export const EMAIL = "pavankumarkola752@gmail.com";
const RESUME_URL =
  "https://docs.google.com/document/d/1hQqFIrXMGJ83W41Q8Zz4DXlxh0vaYKha/edit?usp=sharing&ouid=118300977444325497257&rtpof=true&sd=true";
export function ProfessionalLinks() {
  return (
    <div
      className="professional-links"
      aria-label="Professional profiles and résumé"
    >
      <a
        href="https://github.com/Pawankumar-01"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
        <ArrowUpRight aria-hidden="true" />
      </a>
      <a
        href="https://www.linkedin.com/in/pavan-kumar-kola-991185278/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
        <ArrowUpRight aria-hidden="true" />
      </a>
      <a
        className="resume-link"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View résumé in a new tab"
      >
        View résumé
        <ArrowUpRight aria-hidden="true" />
      </a>
      <a
        className="resume-link"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open résumé in a new tab"
      >
        <Download aria-hidden="true" />
        Download résumé <span>(PDF)</span>
      </a>
    </div>
  );
}
export function Header() {
  return (
    <header className="site-header container">
      <a className="wordmark" href="/" aria-label="Pavan Kumar Kola home">
        <span className="monogram" aria-hidden="true">
          p
        </span>
        Pavan Kumar Kola
      </a>
      <nav className="nav" aria-label="Main navigation">
        <a href="/#work">Work</a>
        <a href="/#capabilities">Capabilities</a>
        <a href="/#skills">Skills</a>
        <a className="nav-contact" href="/#contact">
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <span className="eyebrow">Have a project or opportunity in mind?</span>
      <h2>
        Let’s build something
        <br />
        <em>useful together.</em>
      </h2>
      <p>
        Tell me about the problem, the people using it, and what you’d like to
        make possible.
      </p>
      <a className="contact-email" href={`mailto:${EMAIL}`}>
        {EMAIL}
        <ArrowUpRight aria-hidden="true" />
      </a>
      <ProfessionalLinks />
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer container">
      <span>© {new Date().getFullYear()} Pavan Kumar Kola</span>
      <span>AI Systems &amp; Full-Stack Engineer</span>
      <a href="/#work">Back to selected work</a>
    </footer>
  );
}
