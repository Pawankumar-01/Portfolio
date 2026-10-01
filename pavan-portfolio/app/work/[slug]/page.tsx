import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { ProjectPreview } from "@/components/portfolio/project-preview";
import { ProjectArchitecture } from "@/components/portfolio/project-architecture";
import { Header, Contact, Footer } from "@/components/portfolio/site-shell";
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return { title: p?.title ?? "Project not found", description: p?.intro };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next =
    projects[
      (projects.findIndex((x) => x.slug === slug) + 1) % projects.length
    ];
  return (
    <>
      <div className="hero-wrap">
        <Header />
        <main id="main" className="container">
          <header className="case-hero">
            <a className="back-link" href="/#work">
              <ArrowLeft aria-hidden="true" />
              Selected work
            </a>
            <p className="eyebrow">{p.category} / Case study</p>
            <h1>{p.headline}</h1>
            <p className="case-intro">{p.intro}</p>
          </header>
          <figure>
            <div className="case-image">
              <ProjectPreview slug={p.slug} />
            </div>
            <figcaption className="case-caption">
              Conceptual interface reconstruction · Fictional branding and data
              · Organization details kept private
            </figcaption>
          </figure>
          <div className="case-summary">
            <div>
              <h2>My role</h2>
              <p>{p.role}</p>
            </div>
            <div>
              <h2>Scope</h2>
              <p>{p.scope}</p>
            </div>
            <div>
              <h2>Current status</h2>
              <p>{p.statusShort}</p>
            </div>
          </div>
          <div className="case-body">
            <section className="case-section">
              <h2>The problem behind the project</h2>
              {p.problem.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </section>
            <ProjectArchitecture slug={slug} />
            <section className="case-section">
              <h2>What the platform makes possible</h2>
              <div className="feature-grid">
                {p.features.map((f) => (
                  <div className="feature-block" key={f.title}>
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="case-section">
              <h2>How the workflow comes together</h2>
              <ol className="workflow">
                {p.workflow.map((w) => (
                  <li key={w.title}>
                    <div>
                      <h3>{w.title}</h3>
                      <p>{w.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
            <section className="case-section">
              <h2>What I built</h2>
              {p.contribution.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </section>
            <section className="case-section case-status">
              <h2>Where the project stands</h2>
              {p.status.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </section>
            <section className="case-section">
              <h2>Engineering details</h2>
              <p>The technologies and integration areas behind this work.</p>
              <div className="technology-list">
                {p.technology.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </section>
            <div className="case-bottom">
              <div>
                <p className="eyebrow">Next project</p>
                <h3>{next.title}</h3>
              </div>
              <a href={`/work/${next.slug}`} className="button">
                Explore project
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </main>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
