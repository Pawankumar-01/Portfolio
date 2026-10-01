import {
  ArrowUpRight,
  Workflow,
  AudioLines,
  PanelsTopLeft,
} from "lucide-react";
import {
  Header,
  Contact,
  Footer,
  ProfessionalLinks,
} from "@/components/portfolio/site-shell";
import { projects } from "@/lib/portfolio";
import { ProjectPreview } from "@/components/portfolio/project-preview";
export default function Home() {
  return (
    <>
      <main id="main">
        <div className="hero-wrap">
          <Header />
          <section className="hero container">
            <p className="eyebrow">AI Systems &amp; Full-Stack Engineer</p>
            <h1>
              Software that brings
              <br />
              <em>your work together.</em>
            </h1>
            <p className="hero-description">
              I build connected tools for business operations, customer
              communication, and clinical documentation—designed around the
              people using them.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#work">
                Explore my work
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="button" href="#contact">
                Get in touch
              </a>
            </div>
            <ProfessionalLinks />
            <div className="hero-bottom">
              <span>Business systems</span>
              <span>AI &amp; automation</span>
              <span>Web &amp; mobile</span>
            </div>
          </section>
        </div>
        <section
          className="section work-section container"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-heading">Built around real workflows.</h2>
            </div>
            <p>
              Projects that connect everyday tasks, people, and information.
            </p>
          </div>
          <div className="work-list">
            {projects.map((p, i) => (
              <article key={p.slug}>
                <div className="project">
                  <a
                    href={`/work/${p.slug}`}
                    className="project-image"
                    aria-label={`Read ${p.title} case study`}
                  >
                    <ProjectPreview slug={p.slug} />
                  </a>
                  <div className="project-copy">
                    <p className="project-category">
                      0{i + 1} / {p.category}
                    </p>
                    <h3>{p.cardTitle}</h3>
                    <p className="project-description">{p.cardDescription}</p>
                    <ul className="project-features">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <a href={`/work/${p.slug}`} className="text-link">
                      Explore the project
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="project-meta">
                  <span>{p.label}</span>
                  <span>Concept interface · fictional content</span>
                </div>
              </article>
            ))}
          </div>
          <p className="work-note">
            Project visuals are reconstructed concepts. Case studies describe
            the functionality and responsibilities from my organization work.
          </p>
        </section>
        <section className="section capabilities-section" id="capabilities">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">How I can help</p>
                <h2>
                  From separate tasks
                  <br />
                  to a working system.
                </h2>
              </div>
              <p>
                Practical software built around the way a team actually works.
              </p>
            </div>
            <div className="capabilities">
              <div className="capability">
                <Workflow aria-hidden="true" />
                <h3>Connect your operations</h3>
                <p>
                  Bring records, workflows, and internal tools together, with
                  the backend integrations that keep information moving.
                </p>
              </div>
              <div className="capability">
                <AudioLines aria-hidden="true" />
                <h3>Put AI inside the workflow</h3>
                <p>
                  Turn speech into structured drafts and help assistants answer
                  from relevant organization knowledge.
                </p>
              </div>
              <div className="capability">
                <PanelsTopLeft aria-hidden="true" />
                <h3>Make the system accessible</h3>
                <p>
                  Build web and mobile applications that people can use, and
                  manage the websites that introduce your business.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section container about" id="about">
          <div>
            <p className="eyebrow">A little about me</p>
            <h2>
              Thinking across
              <br />
              the whole system.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Pavan, a full-stack developer with a strong focus on backend
              engineering and applied AI. My work connects business processes,
              AI services, and the web and mobile applications people use every
              day.
            </p>
            <p>
              Building inside an organization has meant taking ownership across
              requirements, integrations, deployment, and ongoing improvements.
              I care about how those parts work together—and how clearly the
              finished product helps its users.
            </p>
            <p>
              I’m open to full-stack, backend, and applied AI engineering roles,
              as well as freelance work on business applications, integrations,
              and automation. I’m comfortable learning new technologies when
              they help solve the problem.
            </p>
            <div className="about-label">
              <span>Backend-focused · Full-stack delivery</span>
              <span>Open to projects &amp; engineering roles</span>
            </div>
          </div>
        </section>
        <section className="container skills-section" id="skills">
          <div className="skills-heading">
            <h2>Engineering skills at a glance</h2>
            <p>The technical detail behind the work.</p>
          </div>
          <div className="skills-grid">
            <div className="skill-group">
              <h3>Backend &amp; data</h3>
              <p>
                Python · FastAPI
                <br />
                PostgreSQL · REST APIs
              </p>
              <a href="/work/clinical-platform">See connected systems</a>
            </div>
            <div className="skill-group">
              <h3>AI &amp; speech</h3>
              <p>
                RAG · LLM integration
                <br />
                Whisper · Speech processing
                <br />
                Structured extraction
              </p>
              <a href="/work/whatsapp-workspace">See knowledge-based replies</a>
            </div>
            <div className="skill-group">
              <h3>Business &amp; real-time</h3>
              <p>
                ERPNext / Frappe
                <br />
                LiveKit
                <br />
                WhatsApp API
              </p>
              <a href="/work/clinical-platform">See workflow integration</a>
            </div>
            <div className="skill-group">
              <h3>Web &amp; mobile</h3>
              <p>
                Flutter · WordPress
                <br />
                Custom web applications
                <br />
                Database integration
              </p>
              <a href="/work/web-development">See web delivery</a>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
