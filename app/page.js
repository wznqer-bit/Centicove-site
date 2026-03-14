"use client";
import React, { useState } from "react";
const products = [
  {
    name: "Student Budget Tracker",
    price: "$9",
    desc: "A clean Google Sheets tracker for income, expenses, and monthly spending.",
    icon: "📊",
  },
  {
    name: "Savings Goal Planner",
    price: "$7",
    desc: "Track savings targets with automatic progress bars and milestone planning.",
    icon: "💰",
  },
  {
    name: "CentiCove Bundle",
    price: "$25",
    desc: "Get the budget tracker, savings planner, and debt payoff tracker in one pack.",
    icon: "📈",
  },
];

const features = [
  "Instant digital download",
  "Built for students and beginners",
  "Simple dashboards that are easy to edit",
  "Works with Google Sheets",
  "No subscriptions or monthly fees",
  "Designed to help you save faster",
];

const faqs = [
  {
    q: "What do I get after purchase?",
    a: "You get instant access to your digital files and setup instructions right after checkout.",
  },
  {
    q: "Do I need Excel?",
    a: "No. These products are designed to work in Google Sheets, so you can open and use them online.",
  },
  {
    q: "Is this good for beginners?",
    a: "Yes. The layout is simple, clean, and made for people who want to start budgeting without confusion.",
  },
  {
    q: "Can I customize the trackers?",
    a: "Yes. You can change categories, goals, and labels to match your own money habits.",
  },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#64748b",
          marginBottom: 12,
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          lineHeight: 1.1,
          fontWeight: 700,
          margin: 0,
          color: "#0f172a",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          color: "#475569",
          fontSize: "1.05rem",
          lineHeight: 1.7,
          marginTop: 14,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: 28,
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Button({ children, href = "#products", primary = true, fullWidth = false }) {
  return (
    <a
      href={href}
      style={{
        display: fullWidth ? "block" : "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "14px 22px",
        borderRadius: 18,
        textDecoration: "none",
        fontWeight: 700,
        fontSize: 16,
        border: primary ? "1px solid #0f172a" : "1px solid #cbd5e1",
        background: primary ? "#0f172a" : "#ffffff",
        color: primary ? "#ffffff" : "#0f172a",
        width: fullWidth ? "100%" : "auto",
      }}
    >
      {children}
    </a>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderTop: "1px solid #e2e8f0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "20px 0",
          textAlign: "left",
          fontSize: 16,
          fontWeight: 600,
          color: "#0f172a",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>{q}</span>
        <span style={{ fontSize: 24, lineHeight: 1 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p
          style={{
            margin: "0 0 20px 0",
            color: "#475569",
            lineHeight: 1.7,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export default function CentiCoveLandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f8fafc, #ffffff, #f1f5f9)",
        color: "#0f172a",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.85)",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 16,
                background: "#0f172a",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
              }}
            >
              C
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>CentiCove</div>
              <div style={{ fontSize: 12, color: "#64748b" }}>Money tools for real life</div>
            </div>
          </div>

          <nav style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <a href="#products" style={{ color: "#475569", textDecoration: "none", fontSize: 14 }}>
              Products
            </a>
            <a href="#features" style={{ color: "#475569", textDecoration: "none", fontSize: 14 }}>
              Features
            </a>
            <a href="#faq" style={{ color: "#475569", textDecoration: "none", fontSize: 14 }}>
              FAQ
            </a>
            <Button href="#products">Shop now</Button>
          </nav>
        </div>
      </header>

      <main>
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 96px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "#e2e8f0",
                  color: "#334155",
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                Digital finance templates
              </div>

              <h1
                style={{
                  fontSize: "clamp(3rem, 7vw, 4.5rem)",
                  lineHeight: 1,
                  margin: 0,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                }}
              >
                Stop guessing where your money went.
              </h1>

              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.8,
                  color: "#475569",
                  maxWidth: 640,
                  marginTop: 22,
                }}
              >
                CentiCove gives students and beginners simple budget trackers, savings planners, and money tools that actually make sense.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
                <Button href="#products">Get the bundle →</Button>
                <Button href="#products" primary={false}>
                  View products
                </Button>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 16,
                  marginTop: 28,
                }}
              >
                {[
                  ["Instant access", "Download right after checkout"],
                  ["Beginner-friendly", "No confusing finance jargon"],
                  ["One-time purchase", "No monthly subscription"],
                ].map(([title, desc]) => (
                  <Card key={title} style={{ borderRadius: 22 }}>
                    <div style={{ padding: 20 }}>
                      <div style={{ fontWeight: 700 }}>{title}</div>
                      <div style={{ fontSize: 14, color: "#64748b", marginTop: 6 }}>{desc}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: -16,
                  background: "rgba(226,232,240,0.8)",
                  filter: "blur(60px)",
                  borderRadius: 9999,
                }}
              />
              <Card style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ background: "#0f172a", color: "#ffffff", padding: 32 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: 14, color: "#cbd5e1" }}>Featured product</div>
                      <div style={{ fontSize: 30, fontWeight: 700, marginTop: 8 }}>CentiCove Bundle</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 14, color: "#cbd5e1" }}>Price</div>
                      <div style={{ fontSize: 36, fontWeight: 700 }}>$25</div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: 32 }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 22,
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        padding: 20,
                      }}
                    >
                      <div style={{ fontSize: 14, color: "#64748b", marginBottom: 12 }}>Includes</div>
                      <div style={{ display: "grid", gap: 10 }}>
                        {["Budget Tracker", "Savings Planner", "Debt Payoff Sheet", "Setup Guide"].map((item) => (
                          <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14 }}>
                            <span>✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        borderRadius: 22,
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        padding: 20,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: 16,
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 14, color: "#64748b", marginBottom: 12 }}>Perfect for</div>
                        <p style={{ fontSize: 14, lineHeight: 1.7, color: "#334155", margin: 0 }}>
                          Students, first-time budgeters, and anyone trying to save money without using a complicated app.
                        </p>
                      </div>
                      <Button fullWidth>⬇ Buy now</Button>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: 16,
                      borderRadius: 22,
                      border: "1px solid #e2e8f0",
                      padding: 20,
                      background: "linear-gradient(to right, #f8fafc, #ffffff)",
                    }}
                  >
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ marginTop: 2 }}>★★★★★</div>
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: "#475569" }}>
                        “This made my money way easier to understand. I could finally see where everything was going each month.”
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="products" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 96px" }}>
          <SectionTitle
            eyebrow="Products"
            title="Simple money tools you can start using today"
            subtitle="Everything is built to be clean, easy to customize, and quick to understand."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 24,
              marginTop: 48,
            }}
          >
            {products.map((product) => (
              <Card key={product.name}>
                <div style={{ padding: 28, height: "100%", display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 18,
                      background: "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      marginBottom: 20,
                    }}
                  >
                    {product.icon}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start" }}>
                    <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.2 }}>{product.name}</h3>
                    <span style={{ fontSize: 20, fontWeight: 700 }}>{product.price}</span>
                  </div>
                  <p style={{ color: "#475569", lineHeight: 1.8, marginTop: 14, flex: 1 }}>{product.desc}</p>
                  <Button href="#" primary={false} fullWidth>
                    View product
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="features" style={{ background: "#0f172a", color: "#ffffff", padding: "96px 24px" }}>
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#cbd5e1", fontWeight: 700 }}>
                Why CentiCove
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, marginTop: 14, marginBottom: 18 }}>
                Built for people who want clarity, not clutter.
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 620 }}>
                Most money tools feel overwhelming. CentiCove keeps it simple so you can track spending, plan savings, and actually stick with it.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {features.map((feature) => (
                <div
                  key={feature}
                  style={{
                    borderRadius: 22,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: 20,
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <span>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 24px" }}>
          <SectionTitle
            eyebrow="How it works"
            title="Buy once. Download instantly. Start tracking."
            subtitle="No waiting, no shipping, and no complicated setup."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 24,
              marginTop: 48,
            }}
          >
            {[
              ["1", "Choose your template", "Pick a budget tracker, savings planner, or the full bundle."],
              ["2", "Download instantly", "Get your files and setup instructions right after checkout."],
              ["3", "Customize and use", "Open in Google Sheets and start tracking your money the same day."],
            ].map(([num, title, text]) => (
              <Card key={num}>
                <div style={{ padding: 28 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 18,
                      background: "#0f172a",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    {num}
                  </div>
                  <h3 style={{ marginTop: 18, marginBottom: 10, fontSize: 22 }}>{title}</h3>
                  <p style={{ margin: 0, color: "#475569", lineHeight: 1.8 }}>{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 96px" }}>
          <SectionTitle
            eyebrow="FAQ"
            title="Questions people usually ask first"
            subtitle="Everything you need to know before getting started."
          />

          <Card style={{ marginTop: 48 }}>
            <div style={{ padding: "8px 28px" }}>
              {faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </Card>
        </section>

        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 96px" }}>
          <Card style={{ background: "#020617", color: "#ffffff", overflow: "hidden" }}>
            <div
              style={{
                padding: 40,
                display: "flex",
                gap: 24,
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div style={{ maxWidth: 700 }}>
                <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8", fontWeight: 700 }}>
                  Ready to start?
                </div>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, marginTop: 14, marginBottom: 12 }}>
                  Take control of your money with tools that actually feel easy.
                </h2>
                <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>
                  Start with the CentiCove Bundle and get every template in one download.
                </p>
              </div>
              <Button href="#products" primary={false}>
                Shop the bundle
              </Button>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
