"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.querySelectorAll(".animate-fadeInUp").forEach((node) => {
      (node as HTMLElement).style.opacity = "0";
    });
    setTimeout(() => {
      el.querySelectorAll(".animate-fadeInUp").forEach((node) => {
        (node as HTMLElement).style.opacity = "";
      });
    }, 100);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a2e16 0%, #2d4a26 35%, #3d5436 60%, #527048 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 0 80px",
      }}
    >
      {/* Background decorations */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(163,138,23,0.15) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }} />
        {/* Grid pattern */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          {/* Left content */}
          <div>
            <div
              className="animate-fadeInUp delay-100"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(163,138,23,0.2)",
                border: "1px solid rgba(163,138,23,0.4)",
                borderRadius: "50px",
                padding: "8px 20px",
                marginBottom: "28px",
              }}
            >
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} className="animate-pulse-gold" />
              <span style={{ color: "var(--gold-light)", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                Votre partenaire de confiance
              </span>
            </div>

            <h1 className="animate-fadeInUp delay-200" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: "24px" }}>
              Import, Vente &{" "}
              <span style={{ color: "var(--gold)", display: "block" }}>Location de</span>
              <span style={{ color: "rgba(255,255,255,0.9)" }}>Véhicules</span>
            </h1>

            <p className="animate-fadeInUp delay-300" style={{ fontSize: "17px", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: "40px", maxWidth: "500px" }}>
              B&N Supply Chain Management, votre centrale d&apos;achat spécialisée dans la recherche
              des meilleurs véhicules au meilleur prix. Qualité, fiabilité et service personnalisé au Gabon.
            </p>

            <div className="animate-fadeInUp delay-400" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "56px" }}>
              <button className="btn-gold" onClick={() => scrollTo("#vente")}>
                Voir les véhicules
              </button>
              <button className="btn-outline" onClick={() => scrollTo("#about")}>
                En savoir plus
              </button>
            </div>

            {/* Stats */}
            <div className="animate-fadeInUp delay-500" style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
              {[
                { value: "200+", label: "Véhicules importés" },
                { value: "5+", label: "Années d'expérience" },
                { value: "98%", label: "Clients satisfaits" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--gold)", lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — vehicle showcase */}
          <div style={{ position: "relative" }} className="animate-fadeInUp delay-300">
            <div style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "24px",
              padding: "32px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Gold accent bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))" }} />

              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <div style={{ fontSize: "80px", marginBottom: "16px" }} className="animate-float">🚗</div>
                <div style={{ color: "white", fontSize: "20px", fontWeight: 700 }}>Découvrez notre flotte</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginTop: "8px" }}>Véhicules disponibles dès maintenant</div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { icon: "🚙", label: "SUV & 4x4", count: "15+ modèles" },
                  { icon: "🚐", label: "Minibus", count: "8+ modèles" },
                  { icon: "🚕", label: "Berlines", count: "20+ modèles" },
                  { icon: "🚚", label: "Utilitaires", count: "10+ modèles" },
                ].map((cat) => (
                  <div
                    key={cat.label}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      padding: "16px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "28px", marginBottom: "6px" }}>{cat.icon}</div>
                    <div style={{ color: "white", fontSize: "13px", fontWeight: 600 }}>{cat.label}</div>
                    <div style={{ color: "var(--gold-light)", fontSize: "11px", marginTop: "2px" }}>{cat.count}</div>
                  </div>
                ))}
              </div>

              <button
                className="btn-primary"
                onClick={() => scrollTo("#vente")}
                style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
              >
                Explorer la collection →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          color: "rgba(255,255,255,0.5)",
          fontSize: "12px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
        onClick={() => scrollTo("#about")}
      >
        <span>Défiler</span>
        <div style={{
          width: "24px",
          height: "40px",
          border: "2px solid rgba(255,255,255,0.3)",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "6px",
        }}>
          <div style={{
            width: "4px",
            height: "8px",
            background: "rgba(255,255,255,0.5)",
            borderRadius: "2px",
            animation: "float 1.5s ease-in-out infinite",
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero > div > div > div:first-child { grid-column: 1 / -1; }
          #hero > div > div > div:last-child { display: none; }
          #hero > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
