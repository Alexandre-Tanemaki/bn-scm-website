"use client";
import { useState } from "react";

const locationVehicles = [
  { id: 1, name: "Toyota Land Cruiser 200", category: "SUV Premium", icon: "🚙", dailyRate: 120000, weeklyRate: 700000, monthlyRate: 2200000, deposit: 500000, driverIncluded: true, features: ["4x4 tout terrain", "Climatisation", "GPS", "Assurance incluse"], available: true },
  { id: 2, name: "Toyota Hiace 15 places", category: "Minibus", icon: "🚐", dailyRate: 80000, weeklyRate: 450000, monthlyRate: 1500000, deposit: 300000, driverIncluded: true, features: ["15 places", "Climatisation", "Idéal groupes", "Chauffeur disponible"], available: true },
  { id: 3, name: "Toyota Corolla Sedan", category: "Berline", icon: "🚗", dailyRate: 45000, weeklyRate: 260000, monthlyRate: 900000, deposit: 200000, driverIncluded: false, features: ["Économique", "Climatisation", "Bluetooth", "Faible consommation"], available: true },
  { id: 4, name: "Ford Ranger Pick-up", category: "Pick-up", icon: "🛻", dailyRate: 65000, weeklyRate: 380000, monthlyRate: 1300000, deposit: 350000, driverIncluded: false, features: ["Charge utile 1t", "4x4", "Idéal chantier", "Robuste"], available: true },
  { id: 5, name: "Mercedes Sprinter", category: "Utilitaire", icon: "🚌", dailyRate: 95000, weeklyRate: 550000, monthlyRate: 1800000, deposit: 400000, driverIncluded: true, features: ["Grand volume", "Idéal déménagement", "Climatisation", "Assistance GPS"], available: false },
  { id: 6, name: "Toyota Prado TX", category: "SUV", icon: "🚙", dailyRate: 90000, weeklyRate: 520000, monthlyRate: 1700000, deposit: 400000, driverIncluded: false, features: ["7 places", "Tout terrain", "Toit ouvrant", "Climatisation bi-zone"], available: true },
];

const formatCFA = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "XAF", maximumFractionDigits: 0 }).format(n);

export default function VehiclesLocation() {
  const [selected, setSelected] = useState<"day" | "week" | "month">("day");

  const getRate = (v: typeof locationVehicles[0]) => {
    if (selected === "day") return { rate: v.dailyRate, label: "/ jour" };
    if (selected === "week") return { rate: v.weeklyRate, label: "/ semaine" };
    return { rate: v.monthlyRate, label: "/ mois" };
  };

  return (
    <section id="location" style={{ background: "white", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-tag" style={{ margin: "0 auto 16px" }}>Location de Véhicules</div>
          <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
            Location flexible{" "}
            <span className="text-gradient-gold">courte & longue durée</span>
          </h2>
          <div className="divider" style={{ margin: "0 auto 16px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center", maxWidth: "560px" }}>
            Des véhicules disponibles immédiatement avec des tarifs adaptés à tous les budgets.
            Assurance et assistance incluses.
          </p>
        </div>

        {/* Rate toggle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "36px" }}>
          <div style={{
            background: "var(--off-white)", borderRadius: "50px", padding: "5px",
            display: "flex", border: "1px solid rgba(0,0,0,0.08)",
          }}>
            {([["day", "Jour"], ["week", "Semaine"], ["month", "Mois"]] as const).map(([key, label]) => (
              <button key={key} onClick={() => setSelected(key)} style={{
                padding: "10px clamp(14px,3vw,24px)", borderRadius: "50px", border: "none",
                background: selected === key ? "linear-gradient(135deg, var(--green), var(--green-light))" : "transparent",
                color: selected === key ? "white" : "var(--gray)",
                fontWeight: 600, fontSize: "clamp(12px,1.8vw,14px)",
                cursor: "pointer", transition: "all 0.25s ease",
                fontFamily: "Rubik, sans-serif",
                boxShadow: selected === key ? "0 4px 15px rgba(82,112,72,0.3)" : "none",
                whiteSpace: "nowrap",
              }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="location-grid">
          {locationVehicles.map((v) => {
            const { rate, label } = getRate(v);
            return (
              <div key={v.id} className="card-hover" style={{
                background: "white", borderRadius: "20px", overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.06)",
                opacity: v.available ? 1 : 0.6, position: "relative",
              }}>
                {!v.available && (
                  <div style={{
                    position: "absolute", inset: 0, background: "rgba(255,255,255,0.7)",
                    zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "20px",
                  }}>
                    <div style={{ background: "var(--gray)", color: "white", padding: "10px 24px", borderRadius: "50px", fontWeight: 700, fontSize: "14px" }}>Indisponible</div>
                  </div>
                )}
                <div style={{
                  background: "linear-gradient(135deg, #f0f4ee, #e8f0e4)",
                  padding: "clamp(18px,3vw,28px)", textAlign: "center", position: "relative",
                }}>
                  <div style={{ fontSize: "clamp(48px,7vw,68px)" }}>{v.icon}</div>
                  {v.driverIncluded && (
                    <div style={{
                      position: "absolute", top: "10px", right: "10px",
                      background: "var(--green)", color: "white",
                      padding: "4px 10px", borderRadius: "50px", fontSize: "11px", fontWeight: 700,
                    }}>🧑‍✈️ Avec chauffeur</div>
                  )}
                </div>
                <div style={{ padding: "clamp(14px,2vw,20px)" }}>
                  <div style={{ fontSize: "11px", color: "var(--gold)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>{v.category}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "clamp(14px,2vw,16px)", marginBottom: "10px" }}>{v.name}</h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "5px", marginBottom: "12px" }}>
                    {v.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "clamp(11px,1.5vw,13px)", color: "var(--gray)" }}>
                        <span style={{ color: "var(--green)", fontWeight: 700 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ background: "var(--off-white)", borderRadius: "10px", padding: "10px 12px", marginBottom: "12px" }}>
                    <div style={{ fontSize: "11px", color: "var(--gray)", marginBottom: "2px" }}>Caution</div>
                    <div style={{ fontWeight: 600, color: "var(--gray-dark)", fontSize: "13px" }}>{formatCFA(v.deposit)}</div>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <div>
                      <div style={{ fontSize: "clamp(17px,2.5vw,20px)", fontWeight: 800, color: "var(--gold)" }}>{formatCFA(rate)}</div>
                      <div style={{ fontSize: "12px", color: "var(--gray)" }}>{label}</div>
                    </div>
                    {v.available && (
                      <a href={`https://wa.me/24106530011?text=Bonjour, je souhaite louer le ${v.name}. Tarif ${label}: ${formatCFA(rate)}.`}
                        target="_blank" rel="noreferrer" className="btn-gold"
                        style={{ padding: "9px 14px", fontSize: "13px", flexShrink: 0 }}>
                        Réserver
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info banner */}
        <div className="info-banner">
          {[
            { icon: "🛡️", title: "Assurance incluse", desc: "Couverture complète sur tous nos véhicules" },
            { icon: "🔧", title: "Maintenance assurée", desc: "Entretien pris en charge pendant la location" },
            { icon: "📞", title: "Support 24/7", desc: "Assistance disponible à toute heure" },
            { icon: "🚗", title: "Livraison possible", desc: "Livraison du véhicule à votre adresse" },
          ].map((item) => (
            <div key={item.title} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(28px,4vw,36px)", marginBottom: "10px" }}>{item.icon}</div>
              <div style={{ fontWeight: 700, marginBottom: "6px", color: "var(--green-dark)", fontSize: "clamp(13px,1.8vw,15px)" }}>{item.title}</div>
              <div style={{ fontSize: "clamp(12px,1.4vw,13px)", color: "var(--gray)", lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .location-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }
        .info-banner {
          background: linear-gradient(135deg, rgba(82,112,72,0.08), rgba(163,138,23,0.08));
          border: 1px solid rgba(82,112,72,0.15);
          border-radius: 20px;
          padding: clamp(20px,3vw,32px) clamp(16px,3vw,40px);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .location-grid { grid-template-columns: 1fr 1fr; }
          .info-banner { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .location-grid { grid-template-columns: 1fr; }
          .info-banner { grid-template-columns: 1fr 1fr; gap: 16px; }
        }
      `}</style>
    </section>
  );
}
