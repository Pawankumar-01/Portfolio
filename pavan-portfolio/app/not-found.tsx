import { Header, Footer } from "@/components/portfolio/site-shell";
export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="container not-found">
        <p className="eyebrow">Page not found</p>
        <h1>
          Let’s get you back
          <br />
          to the work.
        </h1>
        <a className="button button-primary" href="/#work">
          View selected work
        </a>
      </main>
      <Footer />
    </>
  );
}
