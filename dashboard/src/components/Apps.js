import React, { useState } from "react";

const apps = [
  {
    category: "Trading & markets",
    items: [
      { name: "Kite", desc: "Web trading platform for stocks, F&O, currencies and commodities.", icon: "📈", connected: true },
      { name: "Streak", desc: "Algo trading without coding. Create and backtest strategies visually.", icon: "⚡", connected: false },
      { name: "Sensibull", desc: "Options trading platform with strategies, charts and payoff graphs.", icon: "📊", connected: false },
      { name: "Smallcase", desc: "Invest in curated stock and ETF portfolios built by experts.", icon: "🔥", connected: false },
    ],
  },
  {
    category: "Research & analysis",
    items: [
      { name: "Tickertape", desc: "Stock screener, portfolio analytics and market research tools.", icon: "🔭", connected: false },
      { name: "Tijori Finance", desc: "Deep financial data — segments, subsidiaries, capex and more.", icon: "📰", connected: false },
      { name: "Fundamentum", desc: "Fundamental analysis tools, financial ratios and company comparisons.", icon: "🧠", connected: false },
    ],
  },
  {
    category: "Mutual funds & savings",
    items: [
      { name: "Coin", desc: "Direct mutual funds with zero commission and instant redemption.", icon: "🪙", connected: true },
      { name: "Ditto Insurance", desc: "Unbiased insurance advice and policies for health and term life.", icon: "🛡️", connected: false },
      { name: "Goldbees", desc: "Invest in digital gold and sovereign gold bonds seamlessly.", icon: "🏦", connected: false },
    ],
  },
];

const Apps = () => {
  const [connectedApps, setConnectedApps] = useState(
    apps.flatMap(a => a.items).filter(i => i.connected).map(i => i.name)
  );

  const toggleConnect = (name) => {
    setConnectedApps(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  return (
    <div style={{ padding: "1.5rem" }}>
      <h2 style={{ fontSize: "18px", fontWeight: "500", marginBottom: "1.5rem" }}>Apps & tools</h2>

      {/* Banner */}
      <div style={{ background: "#f5f5f5", borderRadius: "8px", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div>
          <h3 style={{ margin: "0 0 4px", fontSize: "15px" }}>Kite Connect API</h3>
          <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>Build trading apps with live market data, order management, and portfolio access.</p>
        </div>
        <button style={{ padding: "6px 16px", borderRadius: "6px", border: "1px solid #ccc", background: "white", cursor: "pointer", whiteSpace: "nowrap" }}>
          Learn more
        </button>
      </div>

      {apps.map((section) => (
        <div key={section.category} style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "12px" }}>
            {section.category}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
            {section.items.map((app) => (
              <div key={app.name} style={{ background: "white", border: "1px solid #eee", borderRadius: "10px", padding: "1rem 1.25rem" }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{app.icon}</div>
                <p style={{ fontWeight: "500", fontSize: "14px", margin: "0 0 4px" }}>{app.name}</p>
                <p style={{ fontSize: "12px", color: "#888", margin: "0 0 12px", lineHeight: "1.5" }}>{app.desc}</p>
                <button
                  onClick={() => toggleConnect(app.name)}
                  style={{
                    fontSize: "12px", padding: "4px 12px", borderRadius: "6px", cursor: "pointer",
                    border: connectedApps.includes(app.name) ? "1px solid #22c55e" : "1px solid #ccc",
                    background: connectedApps.includes(app.name) ? "#f0fdf4" : "transparent",
                    color: connectedApps.includes(app.name) ? "#16a34a" : "#333",
                  }}
                >
                  {connectedApps.includes(app.name) ? "✓ Connected" : "Connect"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Apps;