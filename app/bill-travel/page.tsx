import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BILL Travel — 0→1 Launch | Chris Ashby",
  description: "A closer look at Chris Ashby’s product marketing work on the 0→1 launch of BILL Travel.",
};

const launchSystem = [
  {
    number: "01",
    title: "Positioning",
    detail: "Turn a connected booking, card, policy, and expense workflow into one clear reason to believe.",
  },
  {
    number: "02",
    title: "Messaging",
    detail: "Build a narrative that works for finance leaders, administrators, and the people actually taking the trip.",
  },
  {
    number: "03",
    title: "Enablement",
    detail: "Give sales and customer teams a practical story, language system, and proof points they can use immediately.",
  },
  {
    number: "04",
    title: "Rollout",
    detail: "Align product, marketing, sales, and customer teams around a coordinated path from announcement to adoption.",
  },
];

const productFlow = [
  "Set policies, budgets, and card controls before the trip.",
  "Book flights, hotels, and cars directly inside BILL.",
  "Sync booking details, payments, and receipts automatically.",
  "Review travel spend, reporting, and compliance in real time.",
];

export default function BillTravelCaseStudy() {
  return (
    <main className="case-page">
      <div className="case-wrap">
        <article className="frame case-frame">
          <header className="case-nav">
            <a className="case-mark" href="/" aria-label="Chris Ashby, home">CA<span>/</span></a>
            <a className="case-back" href="/#work">← Back to selected work</a>
          </header>

          <section className="case-hero case-grid">
            <p className="case-kicker">BILL / Travel / 0→1 GTM</p>
            <h1>A smoother route from booking to <em>expense.</em></h1>
            <p className="case-deck">A from-zero go-to-market system for a connected travel experience inside BILL Spend &amp; Expense.</p>
            <a className="case-source" href="https://www.bill.com/product/travel" target="_blank" rel="noreferrer">View the live product ↗</a>
          </section>

          <section className="case-facts case-grid" aria-label="Case study overview">
            <div><span>Role</span><strong>Product marketing lead</strong></div>
            <div><span>Scope</span><strong>Positioning → launch</strong></div>
            <div><span>Product</span><strong>BILL Spend &amp; Expense</strong></div>
            <div><span>Type</span><strong>0→1 product launch</strong></div>
          </section>

          <figure className="case-wide-image">
            <img src="/bill-travel/airport-platform.webp" alt="Business traveler in an airport with BILL Travel platform statistics" />
            <figcaption>Public product imagery from BILL Travel.</figcaption>
          </figure>

          <section className="case-section case-grid">
            <p className="case-section-label">The brief / 01</p>
            <div className="case-copy">
              <h2>Make the connected experience feel inevitable.</h2>
              <p>BILL Travel brings booking into the same system as budgets, cards, policies, receipts, and reporting. The launch challenge was to make that breadth feel simple: one connected flow for the traveler and the finance team.</p>
            </div>
            <aside className="case-callout">
              <strong>500+</strong><span>airlines</span>
              <strong>1.5M</strong><span>hotels</span>
              <strong>1</strong><span>connected platform</span>
            </aside>
          </section>

          <section className="case-section case-launch-section">
            <div className="case-grid">
              <p className="case-section-label">The system / 02</p>
              <div className="case-copy">
                <h2>One launch story, built to travel.</h2>
                <p>The work connected the market-facing narrative to the teams responsible for selling, supporting, and growing the product.</p>
              </div>
            </div>
            <div className="launch-grid">
              {launchSystem.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-split-image case-grid">
            <figure>
              <img src="/bill-travel/route-card.webp" alt="BILL Travel flight selection showing in-policy and out-of-policy fares" />
              <figcaption>Policy appears at the moment of choice—not after the expense.</figcaption>
            </figure>
            <div>
              <p className="case-section-label">The product story / 03</p>
              <h2>Control for finance. A clean journey for everyone else.</h2>
              <ol>
                {productFlow.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
              </ol>
            </div>
          </section>

          <section className="case-quote case-grid">
            <p className="case-section-label">The idea / 04</p>
            <blockquote>“Policy meets the journey.”</blockquote>
            <p>The strongest product stories make complexity disappear without pretending it was never there.</p>
          </section>

          <figure className="case-wide-image case-office-image">
            <img src="/bill-travel/product-interface.webp" alt="Finance professionals collaborating in an office" />
            <figcaption>BILL Travel connects the traveler experience to the finance workflow.</figcaption>
          </figure>

          <footer className="case-footer case-grid">
            <div>
              <p>Next stop</p>
              <a href="/#work">Explore the rest of the work →</a>
            </div>
            <div>
              <p>Public product page</p>
              <a href="https://www.bill.com/product/travel" target="_blank" rel="noreferrer">BILL Travel ↗</a>
            </div>
            <small>Product imagery and public product facts © BILL Operations, LLC.</small>
          </footer>
        </article>
      </div>
    </main>
  );
}
