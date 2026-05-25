"use client";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    if (typeof window !== "undefined") {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer style={{ background: "#0f1d0c", color: "rgba(255,255,255,0.7)", padding: "60px 0 0" }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <div style={{ position: "relative", width: "42px", height: "42px", flexShrink: 0 }}>
                <Image src="/logo.png" alt="B&N SCM" fill style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "18px", color: "white" }}>B&N SCM</div>
                <div style={{ fontSize: "11px", color: "var(--gold-light)", letterSpacing: "0.5px" }}>Supply Chain Management</div>
              </div>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, marginBottom: "20px", maxWidth: "280px" }}>
              Votre centrale d&apos;achat spécialisée dans l&apos;import, la vente et la location
              de véhicules au Gabon. Qualité et confiance depuis 2019.
            </p>
            <a href="https://wa.me/24106530011" target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#25D366", color: "white", padding: "10px 20px",
              borderRadius: "50px", fontSize: "13px", fontWeight: 600, textDecoration: "none",
            }}>
              <span>💬</span> WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, marginBottom: "18px", fontSize: "15px" }}>Navigation</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                ["Accueil", "#hero"], ["À propos", "#about"], ["Nos services", "#services"],
                ["Vente", "#vente"], ["Location", "#location"], ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <button onClick={() => scrollTo(href)} style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "rgba(255,255,255,0.6)", fontSize: "14px",
                    fontFamily: "Rubik, sans-serif", padding: 0, transition: "color 0.2s",
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, marginBottom: "18px", fontSize: "15px" }}>Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Import de véhicules", "Vente de véhicules", "Location courte durée", "Location longue durée", "Avec chauffeur", "Import sur commande"].map((s) => (
                <li key={s} style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, marginBottom: "18px", fontSize: "15px" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { icon: "📍", text: "Libreville, Gabon" },
                { icon: "📞", text: "+241 065 300 111" },
                { icon: "📧", text: "ndembi.brice@bnsupplychainmanagement.com" },
              ].map((c) => (
                <div key={c.icon} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "16px", flexShrink: 0, marginTop: "2px" }}>{c.icon}</span>
                  <span style={{ fontSize: "13px", lineHeight: 1.6, color: "rgba(255,255,255,0.6)", wordBreak: "break-word" }}>{c.text}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "18px" }}>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>Horaires</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>Lun – Ven : 8h – 18h</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>Sam : 9h – 15h</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          padding: "20px 0", marginTop: "0",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "12px",
        }}>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            © {year} B&N Supply Chain Management. Tous droits réservés.
          </div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
            Gérant : Brice NDEMBI
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
    </footer>
  );
}
