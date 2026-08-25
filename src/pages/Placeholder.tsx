import { A, useLocation } from "@solidjs/router";

const names: Record<string, string> = {
  "/docs": "Docs",
  "/guides": "Guides",
  "/modules": "Modules",
  "/playground": "Playground",
  "/blog": "Blog",
  "/about": "About",
};

export default function Placeholder() {
  const location = useLocation();
  const title = () => names[location.pathname] ?? "Not found";

  return (
    <main class="placeholder-page">
      <div class="placeholder-orbit" aria-hidden="true" />
      <A class="brand brand--placeholder" href="/" aria-label="StingJS home">
        <span class="brand-mark">ϟ</span>
        <span>STINGJS</span>
      </A>
      <section class="placeholder-card">
        <p class="eyebrow">THE PATH IS BEING FORGED</p>
        <h1>{title()}</h1>
        <p>
          This section is wired through Solid Router and ready for content. The first public milestone is the homepage.
        </p>
        <A href="/" class="button button--primary">
          Return home <span aria-hidden="true">→</span>
        </A>
      </section>
    </main>
  );
}
