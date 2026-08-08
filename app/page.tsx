const experience = [
  {
    years: "2022—Now",
    company: "BILL",
    role: "Product Marketing Manager",
    detail: "Own product marketing for Spend & Expense, including cards, credit, rewards, travel, transaction management, and AI-powered features.",
  },
  {
    years: "2019—2022",
    company: "SilverOnyx",
    role: "Product Marketing Manager",
    detail: "Scaled a 109-product portfolio from $1.6M to $8.8M and launched 28 new products across Nature’s Nutrition and related brands.",
  },
  {
    years: "Building now",
    company: "StyledSpace",
    role: "Founder / Product Builder",
    detail: "Developing an AI-driven interior design platform that turns inspiration into an intentional, achievable space.",
  },
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="page-wrap">
        <section className="frame hero-frame hero-shell" id="home">
          <header className="hero-layout hero-masthead">
            <a className="hero-mark" href="#home" aria-label="Chris Ashby, home">CA<span>/</span></a>
            <nav className="hero-nav" aria-label="Primary navigation">
              <a href="#home" aria-current="page">Home</a>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <section className="hero-layout hero-intro" aria-labelledby="hero-title">
            <div className="hero-meta">
              <p>Chris Ashby · Product marketing · Alpine, Utah</p>
              <span aria-hidden="true" />
            </div>

            <div className="hero-head">
              <h1 id="hero-title">I make complicated products easy to <em>say yes</em> to.</h1>
            </div>

            <aside className="hero-aside">
              <span className="hero-dot" aria-hidden="true" />
              <p>Open to thoughtful collaborations, ambitious product problems, and great record recommendations.</p>
              <a href="#contact">Connect <ExternalArrow /></a>
            </aside>
          </section>

          <section className="hero-layout proof-strip" aria-label="Selected work preview">
            <p className="proof-label">Selected work</p>

            <a className="proof-card proof-bill" href="/bill-travel">
              <span className="proof-monogram">BILL</span>
              <h3>Spend &amp; Expense</h3>
              <p>Positioning and launches for a multi-product expense ecosystem.</p>
              <span className="proof-arrow">View work →</span>
            </a>

            <a className="proof-card proof-styled" href="#work">
              <img src="/styledspace-logo.png" alt="" aria-hidden="true" />
              <h3>StyledSpace</h3>
              <p>AI-powered interior design built around individual taste.</p>
              <span className="proof-arrow">View work →</span>
            </a>

            <a className="proof-card proof-stream" href="#work">
              <img src="/streamlaunch-logo.jpg" alt="" aria-hidden="true" />
              <h3>StreamLaunch</h3>
              <p>New product and venture work currently taking shape.</p>
              <span className="proof-arrow">Building now →</span>
            </a>
          </section>

          <section className="hero-layout portrait-band" aria-label="About Chris Ashby">
            <figure className="hero-portrait">
              <figcaption>Portrait / 2026</figcaption>
              <img src="/chris-ashby.jpg" alt="Chris Ashby" />
            </figure>

            <div className="hero-bio">
              <p>I lead product marketing for BILL’s Spend &amp; Expense ecosystem, turning a dense financial platform into something a finance team can understand in one sentence.</p>
              <p>I build at the intersection of GTM, AI, product, and taste—usually by shipping the thing instead of writing a deck about it.</p>
            </div>

            <dl className="hero-stats">
              <div><dt>Currently</dt><dd>BILL · Spend &amp; Expense</dd></div>
              <div><dt>Focus</dt><dd>Positioning, launch, GTM</dd></div>
              <div><dt>Based</dt><dd>Alpine, Utah</dd></div>
            </dl>
          </section>

          <div className="hero-nameband" aria-hidden="true">
            <p>Chris Ashby</p>
          </div>
        </section>

        <section className="frame work-frame" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <p>Selected projects / 01—03</p>
            <h2 id="work-title">Stories built to move products.</h2>
            <p>Strategy, positioning, launches, and new ventures—each shaped around the actual problem people need solved.</p>
          </div>

          <article className="project project-bill">
            <a className="project-visual bill-visual bill-photo-visual" href="/bill-travel" aria-label="View the BILL Travel launch case study">
              <img src="/bill-travel/airport-platform.webp" alt="Business traveler in an airport with BILL Travel platform statistics" />
              <span>BILL Travel · 0→1 launch case study →</span>
            </a>
            <div className="project-info">
              <div>
                <span>01 / BILL</span>
                <h3>BILL Travel</h3>
                <p className="project-type">Fintech · GTM strategy · 2026</p>
              </div>
              <p>Led the from-zero go-to-market strategy—positioning, messaging, enablement, and cross-functional rollout—for a connected travel experience inside BILL Spend & Expense.</p>
              <strong><a href="/bill-travel">Position the complex.<br />Launch it clearly. ↗</a></strong>
            </div>
          </article>

          <article className="project project-silveronyx">
            <div className="project-visual growth-visual" aria-label="SilverOnyx portfolio growth composition">
              <div className="growth-scale">
                <span>2019</span>
                <strong>$1.6M</strong>
              </div>
              <div className="growth-line"><i /><i /><i /><i /><i /></div>
              <div className="growth-scale end">
                <span>2022</span>
                <strong>$8.8M</strong>
              </div>
              <div className="launch-seal">28 / 28<br /><small>successful launches</small></div>
            </div>
            <div className="project-info">
              <div>
                <span>02 / SILVERONYX</span>
                <h3>Nature’s Nutrition</h3>
                <p className="project-type">E-commerce · Growth · 2019—2022</p>
              </div>
              <p>Turned the company’s lowest-performing portfolio into its second-highest performer, combining customer research, product creation, marketplace storytelling, and disciplined experimentation.</p>
              <strong>109 products.<br />6× annual sales.</strong>
            </div>
          </article>

          <article className="project project-styled">
            <div className="project-visual styled-visual" aria-label="StyledSpace modular design composition">
              <div className="room-grid">
                <span className="swatch swatch-one" />
                <span className="swatch swatch-two" />
                <span className="swatch swatch-three" />
                <div className="space-card"><small>ROOM / 01</small><strong>Make space<br />feel like you.</strong></div>
              </div>
              <p className="styled-mark">SS</p>
            </div>
            <div className="project-info">
              <div>
                <span>03 / STYLEDSPACE</span>
                <h3>AI for human taste</h3>
                <p className="project-type">AI · Interior design · Building now</p>
              </div>
              <p>An AI-driven interior design platform in development—built to help people turn a feeling, reference, or half-formed idea into a room that feels personal and possible.</p>
              <strong>Creativity in.<br />A livable plan out.</strong>
            </div>
          </article>
        </section>

        <section className="frame about-frame" id="about" aria-labelledby="about-title">
          <div className="about-grid">
            <div className="about-note">
              <p>Technical enough to understand the product. Creative enough to find the story. Commercial enough to make it move.</p>
              <a href="https://www.linkedin.com/in/christopher-david-ashby/" target="_blank" rel="noreferrer">Full profile <ExternalArrow /></a>
            </div>

            <div className="about-main">
              <h2 id="about-title">A founder’s mindset inside a product marketer’s toolkit.</h2>
              <p>
                I work at the intersection of product development, go-to-market strategy, and entrepreneurial experimentation. I care about the sharp idea, the useful detail, and the systems that help good work scale.
              </p>
              <img src="/chris-ashby.jpg" alt="Portrait of Chris Ashby" loading="lazy" />
            </div>

            <div className="timeline" aria-label="Work experience">
              <h3>Work experience</h3>
              {experience.map((item) => (
                <article key={item.company}>
                  <div><strong>{item.company}</strong><span>{item.years}</span></div>
                  <p>{item.role}</p>
                  <small>{item.detail}</small>
                </article>
              ))}
            </div>
          </div>

          <div className="numbers" aria-label="Career highlights">
            <div><strong>6×</strong><span>Portfolio growth</span></div>
            <div><strong>28</strong><span>Products launched</span></div>
            <div><strong>0→1</strong><span>BILL Travel GTM</span></div>
            <div><strong>109</strong><span>Products managed</span></div>
          </div>
          <p className="mega-word about-word" aria-hidden="true">about</p>
        </section>

        <footer className="frame contact-frame" id="contact">
          <div>
            <p>Have an idea with edges?</p>
            <h2>Let’s make the complex<br /><em>feel simple.</em></h2>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/christopher-david-ashby/" target="_blank" rel="noreferrer">LinkedIn <ExternalArrow /></a>
            <a href="https://chris-ashby-portfolio.chrisashby32.chatgpt.site" target="_blank" rel="noreferrer">View version 01 <ExternalArrow /></a>
          </div>
          <div className="footer-line">
            <span>Chris Ashby / 2026</span>
            <span>Product marketing · GTM · AI · Building</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
