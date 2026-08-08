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
        <section className="frame hero-frame" id="home">
          <header className="topbar">
            <a className="mark" href="#home" aria-label="Chris Ashby, home">CA<span>/</span></a>
            <p className="top-intro">
              Product marketer and builder focused on making complex products feel clear, useful, and inevitable.
            </p>
            <nav aria-label="Primary navigation">
              <a href="#home">Home</a>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <div className="hero-grid">
            <aside className="side-quote">
              <span className="quote-mark">“</span>
              <p>Good strategy feels like a product: clear, useful, and hard to ignore.</p>
              <span>CA / 2026</span>
            </aside>

            <div className="hero-content">
              <p className="micro-label">Chris Ashby · Alpine, Utah</p>
              <h1>
                I make <em>complicated</em><br />products feel inevitable.
              </h1>
              <div className="hero-profile">
                <div className="portrait-wrap">
                  <img src="/chris-ashby.jpg" alt="Chris Ashby" />
                  <span>Product marketing × product building</span>
                </div>
                <p>
                  Currently leading product marketing for BILL’s Spend & Expense ecosystem. Always building at the intersection of GTM, AI, product, and taste.
                </p>
              </div>
            </div>

            <aside className="availability">
              <span className="status-dot" />
              <p>Open to thoughtful collaborations, ambitious product problems, and great record recommendations.</p>
              <a href="https://www.linkedin.com/in/christopher-david-ashby/" target="_blank" rel="noreferrer">
                Connect <ExternalArrow />
              </a>
            </aside>
          </div>

          <p className="mega-word name-word" aria-hidden="true">Chris Ashby</p>
        </section>

        <section className="frame work-frame" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <p>Selected projects / 01—03</p>
            <h2 id="work-title">Stories built to move products.</h2>
            <p>Strategy, positioning, launches, and new ventures—each shaped around the actual problem people need solved.</p>
          </div>

          <article className="project project-bill">
            <div className="project-visual bill-visual" aria-label="Abstract BILL Travel launch composition">
              <div className="travel-card card-one">
                <span>BILL / TRAVEL</span>
                <strong>Policy meets<br />the journey.</strong>
                <i>0→1 GTM</i>
              </div>
              <div className="travel-card card-two">
                <div className="flight-line"><b /> <span /> <b /></div>
                <p>SLC</p><p>NYC</p>
              </div>
              <div className="travel-stamp">LAUNCH<br />SYSTEM</div>
            </div>
            <div className="project-info">
              <div>
                <span>01 / BILL</span>
                <h3>BILL Travel</h3>
                <p className="project-type">Fintech · GTM strategy · 2026</p>
              </div>
              <p>Led the from-zero go-to-market strategy—positioning, messaging, enablement, and cross-functional rollout—for a connected travel experience inside BILL Spend & Expense.</p>
              <strong>Position the complex.<br />Launch it clearly.</strong>
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
