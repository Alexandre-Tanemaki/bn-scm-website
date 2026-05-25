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
    <section id="hero" ref={heroRef} style={{
      minHeight: "100dvh",
      background: "linear-gradient(135deg, #1a2e16 0%, #2d4a26 35%, #3d5436 60%, #527048 100%)",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      padding: "100px 0 60px",
    }}>
      {/* Background decorations */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "-20%", right: "-10%",
          width: "clamp(200px,50vw,600px)", height: "clamp(200px,50vw,600px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(163,138,23,0.15) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", left: "-5%",
          width: "clamp(150px,35vw,400px)", height: "clamp(150px,35vw,400px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div className="hero-grid">
          {/* Left content */}
          <div>
            <div className="animate-fadeInUp delay-100" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(163,138,23,0.2)", border: "1px solid rgba(163,138,23,0.4)",
              borderRadius: "50px", padding: "8px 20px", marginBottom: "24px",
            }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} className="animate-pulse-gold" />
              <span style={{ color: "var(--gold-light)", fontSize: "clamp(11px,1.5vw,13px)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                Votre partenaire de confiance
              </span>
            </div>

            <h1 className="animate-fadeInUp delay-200" style={{
              fontSize: "clamp(2rem,6vw,3.8rem)", fontWeight: 900,
              color: "white", lineHeight: 1.1, marginBottom: "20px",
            }}>
              Import, Vente &{" "}
              <span style={{ color: "var(--gold)", display: "block" }}>Location de</span>
              <span style={{ color: "rgba(255,255,255,0.9)" }}>Véhicules</span>
            </h1>

            <p className="animate-fadeInUp delay-300" style={{
              fontSize: "clamp(15px,2vw,17px)", color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8, marginBottom: "32px", maxWidth: "500px",
            }}>
              B&N Supply Chain Management, votre centrale d&apos;achat spécialisée dans la recherche
              des meilleurs véhicules au meilleur prix. Qualité, fiabilité et service personnalisé au Gabon.
            </p>

            <div className="animate-fadeInUp delay-400" style={{
              display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px",
            }}>
              <button className="btn-gold" onClick={() => scrollTo("#vente")}>
                Voir les véhicules
              </button>
              <button className="btn-outline" onClick={() => scrollTo("#about")}>
                En savoir plus
              </button>
            </div>

            {/* Stats */}
            <div className="animate-fadeInUp delay-500" style={{
              display: "flex", gap: "clamp(20px,4vw,40px)", flexWrap: "wrap",
            }}>
              {[
                { value: "200+", label: "Véhicules importés" },
                { value: "5+", label: "Années d'expérience" },
                { value: "98%", label: "Clients satisfaits" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: "clamp(1.5rem,3.5vw,2rem)", fontWeight: 800, color: "var(--gold)", lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: "clamp(11px,1.5vw,13px)", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — vehicle showcase */}
          <div className="animate-fadeInUp delay-300 hero-card">
            <div style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "24px",
              padding: "clamp(20px,4vw,32px)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))" }} />
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <div style={{ fontSize: "clamp(50px,8vw,80px)", marginBottom: "12px" }} className="animate-float">🚗</div>
                <div style={{ color: "white", fontSize: "clamp(16px,2.5vw,20px)", fontWeight: 700 }}>Découvrez notre flotte</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(12px,1.5vw,14px)", marginTop: "6px" }}>Véhicules disponibles dès maintenant</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[
                  { icon: "🚙", label: "SUV & 4x4", count: "15+ modèles" },
                  { icon: "🚐", label: "Minibus", count: "8+ modèles" },
                  { icon: "🚕", label: "Berlines", count: "20+ modèles" },
                  { icon: "🚚", label: "Utilitaires", count: "10+ modèles" },
                ].map((cat) => (
                  <div key={cat.label} style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px", padding: "14px", textAlign: "center",
                  }}>
                    <div style={{ fontSize: "clamp(20px,3.5vw,28px)", marginBottom: "6px" }}>{cat.icon}</div>
                    <div style={{ color: "white", fontSize: "clamp(11px,1.5vw,13px)", fontWeight: 600 }}>{cat.label}</div>
                    <div style={{ color: "var(--gold-light)", fontSize: "clamp(10px,1.2vw,11px)", marginTop: "2px" }}>{cat.count}</div>
                  </div>
                ))}
              </div>
              <button className="btn-primary" onClick={() => scrollTo("#vente")}
                style={{ width: "100%", textAlign: "center", marginTop: "16px" }}>
                Explorer la collection →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
        cursor: "pointer", color: "rgba(255,255,255,0.5)", fontSize: "11px",
        letterSpacing: "1px", textTransform: "uppercase",
      }} onClick={() => scrollTo("#about")}>
        <span>Défiler</span>
        <div style={{
          width: "24px", height: "38px",
          border: "2px solid rgba(255,255,255,0.3)", borderRadius: "12px",
          display: "flex", justifyContent: "center", paddingTop: "6px",
        }}>
          <div style={{
            width: "4px", height: "8px",
            background: "rgba(255,255,255,0.5)", borderRadius: "2px",
            animation: "float 1.5s ease-in-out infinite",
          }} />
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-card {
            max-width: 480px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .hero-card { display: none; }
        }
      `}</style>
    </section>
  );
}
