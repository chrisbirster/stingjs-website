import { createSignal } from "solid-js";

const githubUrl = "https://github.com/chrisbirster/stingjs";

function Bolt() {
  return <svg viewBox="0 0 48 64" aria-hidden="true"><path d="M31 2 7 35h15l-6 27 27-37H28z"/><path class="bolt-highlight" d="M31 2 7 35h15"/></svg>;
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.8 5.5-5.4 5.8.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"/></svg>;
}

function Header() {
  const links = ["Docs", "Guides", "Modules", "Playground", "Blog", "About"];
  return <header class="site-header">
    <a class="brand" href="/"><span class="brand-bolt"><Bolt/></span><span>STINGJS</span></a>
    <nav class="main-nav" aria-label="Main navigation">{links.map(label => <a href={`/${label.toLowerCase()}`}>{label}</a>)}</nav>
    <div class="header-actions"><a class="github-link" href={githubUrl} target="_blank" rel="noreferrer"><GitHubIcon/><span>GitHub</span></a><a class="button button--compact" href="/docs">Get Started <span>→</span></a></div>
  </header>;
}

function CodeWindow() {
  return <div class="code-window surface-panel"><div class="window-bar"><div class="traffic-lights"><i/><i/><i/></div><span>App.tsx</span></div><pre class="code-block"><code>
    <span class="ln">1</span><span class="kw">import</span> &#123; createSignal &#125; <span class="kw">from</span> <span class="str">"solid-js"</span>;<br/>
    <span class="ln">2</span><span class="kw">import</span> &#123; Button, Text, View &#125; <span class="kw">from</span> <span class="str">"@stingjs/native"</span>;<br/>
    <span class="ln">3</span><br/><span class="ln">4</span><span class="kw">export default function</span> <span class="fn">App</span>() &#123;<br/>
    <span class="ln">5</span>&nbsp;&nbsp;<span class="kw">const</span> [count, setCount] = <span class="fn">createSignal</span>(0);<br/>
    <span class="ln">6</span>&nbsp;&nbsp;<span class="kw">return</span> (<br/><span class="ln">7</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;View&gt;</span><br/>
    <span class="ln">8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;Text&gt;</span>Count: &#123;count()&#125;<span class="tag">&lt;/Text&gt;</span><br/>
    <span class="ln">9</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;Button</span> <span class="attr">onPress</span>=&#123;() =&gt; setCount(count() + 1)&#125;<span class="tag">&gt;</span><br/>
    <span class="ln">10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add<br/><span class="ln">11</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/Button&gt;</span><br/>
    <span class="ln">12</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/View&gt;</span><br/><span class="ln">13</span>&nbsp;&nbsp;);<br/><span class="ln">14</span>&#125;
  </code></pre></div>;
}

function PhoneDemo() {
  const [count, setCount] = createSignal(0);
  return <div class="phone-stage"><div class="phone-glow"/><div class="phone"><div class="phone-status"><span>9:41</span><span>⌁ ▮</span></div><div class="phone-island"/><div class="phone-content"><div>Count: {count()}</div><button type="button" onClick={() => setCount(v => v + 1)}>Add</button></div><div class="home-indicator"/></div></div>;
}

function Hero() {
  return <section class="hero section-shell">
    <div class="hero-copy"><p class="eyebrow">A SMALLER PATH</p><h1>SolidJS.<br/>Native views.<br/><span>Nothing in between.</span></h1><p class="hero-subtitle">Build native iOS and Android applications with SolidJS 2, TypeScript, and StingJS.</p><div class="anti-list"><span>ϟ No React Native</span><span>▱ No WebView</span><span>◯ No virtual DOM</span></div><div class="hero-actions"><a class="button button--primary" href="/docs">Get Started <span>→</span></a><a class="button button--secondary" href={githubUrl} target="_blank" rel="noreferrer"><GitHubIcon/> View on GitHub</a></div><p class="motif">When complexity gets close, <strong>Sting gets brighter.</strong></p></div>
    <div class="hero-code"><CodeWindow/></div><PhoneDemo/>
    <div class="pipeline"><span>SolidJS 2</span><i>→</i><strong><Bolt/> StingJS</strong><i>→</i><span>Native</span><small>WRITE SOLID. RENDER NATIVE.</small></div>
  </section>;
}

function Card(props: { class?: string; children?: any }) { return <article class={`feature-card ${props.class ?? ""}`}>{props.children}</article>; }
const checks = (items: string[]) => <ul class="check-list">{items.map(item => <li>{item}</li>)}</ul>;

function FeatureGrid() {
  return <section class="feature-grid section-shell">
    <Card><p class="card-kicker">REAL NATIVE UI.</p><h2>Not a WebView.</h2><p>Your SolidJS code becomes actual native views — not HTML, not a DOM, not a browser.</p>{checks(["UIKit / Android Views","Direct native rendering","No React reconciliation layer"])}<div class="orbit-sketch"><span/><span/><span/></div></Card>
    <Card class="update-card"><p class="card-kicker">NOTHING ELSE.</p><h2>Update what changed.</h2><div class="update-demo"><div class="rows"><small>10,000 rows</small>{[497,498,499,500,501,502].map(row => <div class={row===500?"row changed":"row"}>Row {row}{row===500&&<span>← changed</span>}</div>)}</div><div class="mutation-copy"><span>Change 1 signal</span><b>↓</b><strong>1 native<br/>text mutation</strong><hr/><span>Change 100 signals</span><b>↓</b><strong>100 native<br/>text mutations</strong></div></div></Card>
    <Card class="solid-card"><p class="card-kicker">NOT ADAPTED FROM REACT.</p><h2>Built for Solid 2.</h2><div class="solid-card-content">{checks(["Fine-grained reactivity","Universal rendering","Async-aware reactive graph","Automatic batching","<Loading> and pending state","Async computations"])}<div class="reactive-graph">{Array.from({length:13}).map(() => <i/>)}<b/></div></div></Card>
    <Card><p class="card-kicker">DIRECT ACCESS TO THE OS.</p><h2>Native modules.</h2><pre class="mini-code"><code><span class="kw">import</span> &#123; Haptics &#125; <span class="kw">from</span> <span class="str">"@stingjs/haptics"</span>;<br/><br/>Haptics.impact(<span class="str">"medium"</span>);</code></pre><div class="module-flow"><span>TypeScript</span><i>↓</i><strong>Sting module bridge</strong><i>↓</i><span>Swift / Kotlin</span><i>↓</i><span>OS API</span></div></Card>
    <Card class="architecture-card"><p class="card-kicker">SMALL. SHARP. NATIVE.</p><h2>Runtime architecture.</h2><div class="architecture-layout"><div class="architecture-flow"><span>Application</span><i>↓</i><span>SolidJS 2</span><i>↓</i><span>@stingjs/solid</span><i>↓</i><strong>Sting runtime</strong><div class="split"><span>JavaScript Runtime</span><span>Native Modules</span></div><i>↕</i><span>Swift / Kotlin</span><i>↓</i><span>UIKit / Android Views</span></div><div class="architecture-note">Engine selection is evidence-based. We evaluate Hermes, QuickJS, and QuickJS-NG empirically.{checks(["Startup","Memory","Event latency","Module latency","Frame time"])}</div></div></Card>
    <Card class="metrics-card"><p class="card-kicker">ENGINEERED, NOT HYPED.</p><h2>We measure, then decide.</h2><div class="metric-grid"><span>Startup</span><b>p50</b><em>—</em><span>Memory</span><b>p50</b><em>—</em><span>Native mutations</span><b>p95</b><em>—</em><span>Event latency</span><b>p95</b><em>—</em><span>Module latency</span><b>p95</b><em>—</em><span>Frame time</span><b>p99</b><em>—</em></div><svg class="sparkline" viewBox="0 0 400 110" preserveAspectRatio="none"><defs><linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e9bff" stop-opacity=".35"/><stop offset="1" stop-color="#1e9bff" stop-opacity="0"/></linearGradient></defs><path class="spark-fill" d="M0 96L38 87 76 73 115 81 154 57 192 42 231 51 270 35 309 42 347 22 400 8V110H0Z"/><polyline points="0,96 38,87 76,73 115,81 154,57 192,42 231,51 270,35 309,42 347,22 400,8"/></svg><p class="no-hype">Illustrative trace. Real p50 / p95 / p99 results publish only after the benchmark harness is stable.</p></Card>
  </section>;
}

function BattleScene() {
  return <svg class="battle-scene" viewBox="0 0 1200 350" role="img" aria-label="A small blue-lit traveler faces an orange eye wrapped in orbiting loops atop a distant tower"><defs><linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070d18" stop-opacity="0"/><stop offset="1" stop-color="#02050b"/></linearGradient><filter id="blueGlow"><feGaussianBlur stdDeviation="7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="orangeGlow"><feGaussianBlur stdDeviation="10" result="o"/><feMerge><feMergeNode in="o"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path class="storm orange-storm" d="M690 42 760 68 815 36 860 84 935 55 1000 92 1080 65"/><path class="mountains far" d="M0 260 95 210 150 238 245 185 315 245 410 205 475 255 560 228 620 265 690 220 760 254 845 186 930 250 1020 214 1200 270V350H0Z"/><path class="mountains near" d="M0 294 128 246 220 292 340 232 440 300 540 263 650 304 770 250 865 302 985 245 1090 290 1200 265V350H0Z"/><g class="tower"><path d="M910 255 936 116 962 255Z"/><path d="m928 125 9-52 8 23 9-23 8 52Z"/><path d="M919 250h36v45h-36z"/></g><g class="eye-atom" filter="url(#orangeGlow)"><ellipse cx="945" cy="86" rx="52" ry="20"/><ellipse cx="945" cy="86" rx="52" ry="20" transform="rotate(60 945 86)"/><ellipse cx="945" cy="86" rx="52" ry="20" transform="rotate(120 945 86)"/><path class="eye-shape" d="M918 86q27-29 54 0-27 29-54 0Z"/><ellipse class="eye-pupil" cx="945" cy="86" rx="5" ry="15"/></g><g class="traveler" filter="url(#blueGlow)"><circle cx="360" cy="245" r="13"/><path d="M353 258 330 324h66l-24-66Z"/><path d="M347 270 315 292 333 297 358 279Z"/><path d="M371 267 396 283 387 293 364 280Z"/><path class="blade" d="m393 281 48-58-35 68Z"/><path class="blade-core" d="m394 281 45-55"/><path class="cloak-bolt" d="m358 276-9 17h9l-5 15 17-22h-9l5-10Z"/></g><path class="ground-light" d="M242 328q105-36 235 0"/><rect width="1200" height="350" fill="url(#skyFade)"/></svg>;
}

function FinalCta() {
  return <section class="final-cta section-shell"><div class="cta-copy"><p class="eyebrow">THE NATIVE PATH</p><h2>Small surface. <span>Native impact.</span></h2><p>You write Solid. Sting handles the dangerous part.</p><div class="hero-actions"><a class="button button--primary" href="/docs">Get Started <span>→</span></a><a class="button button--secondary" href={githubUrl} target="_blank" rel="noreferrer"><GitHubIcon/> GitHub</a></div></div><BattleScene/><blockquote>When complexity<br/>gets close,<br/><strong>Sting gets brighter.</strong></blockquote></section>;
}

function Footer() { return <footer class="site-footer"><span><span class="brand-bolt mini"><Bolt/></span> STINGJS</span><span>Built with SolidJS 2.</span><a href={githubUrl} target="_blank" rel="noreferrer"><GitHubIcon/> GitHub</a></footer>; }

export default function Home() { return <div class="site-shell"><Header/><main><Hero/><FeatureGrid/><FinalCta/></main><Footer/></div>; }
