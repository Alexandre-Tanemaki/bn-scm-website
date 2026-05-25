"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Bonjour B&N SCM!%0ANom: ${formData.name}%0AEmail: ${formData.email}%0ATéléphone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/24106530011?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "2px solid rgba(0,0,0,0.08)",
    fontSize: "15px",
    fontFamily: "Rubik, sans-serif",
    color: "var(--black)",
    background: "white",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section id="contact" style={{ background: "linear-gradient(135deg, #1a2e16 0%, #2d4a26 50%, #3d5436 100%)", padding: "90px 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "start" }}>
          {/* Left info */}
          <div>
            <div
              className="section-tag"
              style={{ background: "rgba(163,138,23,0.2)", color: "var(--gold-light)", border: "1px solid rgba(163,138,23,0.3)", marginBottom: "16px" }}
            >
              Contact
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>
              Parlons de votre{" "}
              <span style={{ color: "var(--gold)" }}>projet véhicule</span>
            </h2>
            <div style={{ width: "60px", height: "4px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", borderRadius: "2px", marginBottom: "24px" }} />
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontSize: "16px", marginBottom: "40px" }}>
              Notre équipe est disponible pour répondre à toutes vos questions
              et vous accompagner dans votre projet d&apos;acquisition ou de location de véhicule.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                {
                  icon: "📞",
                  title: "Téléphone",
                  value: "+241 065 300 111",
                  link: "tel:+241065300111",
                },
                {
                  icon: "📧",
                  title: "Email",
                  value: "ndembi.brice@bnsupplychainmanagement.com",
                  link: "mailto:ndembi.brice@bnsupplychainmanagement.com",
                },
                {
                  icon: "📍",
                  title: "Localisation",
                  value: "Libreville, Gabon",
                  link: "#",
                },
                {
                  icon: "💬",
                  title: "WhatsApp",
                  value: "+241 065 300 111",
                  link: "https://wa.me/24106530011",
                },
              ].map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                >
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(163,138,23,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginBottom: "2px" }}>{info.title}</div>
                    <div style={{ color: "white", fontWeight: 600, fontSize: "14px" }}>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social / CTA */}
            <div style={{ marginTop: "32px" }}>
              <a
                href="https://wa.me/24106530011"
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
                style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", width: "100%" }}
              >
                <span style={{ fontSize: "20px" }}>💬</span>
                Écrire sur WhatsApp maintenant
              </a>
            </div>
          </div>

          {/* Right form */}
          <div style={{
            background: "white",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
          }}>
            <h3 style={{ fontWeight: 700, fontSize: "22px", marginBottom: "8px", color: "var(--black)" }}>
              Envoyer un message
            </h3>
            <p style={{ color: "var(--gray)", fontSize: "14px", marginBottom: "28px" }}>
              Remplissez le formulaire, nous vous répondons sous 24h.
            </p>

            {submitted ? (
              <div style={{
                textAlign: "center",
                padding: "40px 20px",
                background: "linear-gradient(135deg, rgba(82,112,72,0.08), rgba(163,138,23,0.08))",
                borderRadius: "16px",
                border: "2px solid rgba(82,112,72,0.2)",
              }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                <div style={{ fontWeight: 700, fontSize: "18px", color: "var(--green)", marginBottom: "8px" }}>Message envoyé !</div>
                <div style={{ color: "var(--gray)", fontSize: "14px" }}>Nous vous recontactons très bientôt.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--gray-dark)" }}>Nom complet *</label>
                    <input
                      required
                      style={inputStyle}
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.08)")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--gray-dark)" }}>Téléphone *</label>
                    <input
                      required
                      style={inputStyle}
                      placeholder="+241 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.08)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--gray-dark)" }}>Email</label>
                  <input
                    type="email"
                    style={inputStyle}
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.08)")}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--gray-dark)" }}>Service souhaité *</label>
                  <select
                    required
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.08)")}
                  >
                    <option value="">Choisir un service...</option>
                    <option value="Achat véhicule">Achat de véhicule</option>
                    <option value="Location courte durée">Location courte durée</option>
                    <option value="Location longue durée">Location longue durée</option>
                    <option value="Import sur commande">Import sur commande</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--gray-dark)" }}>Message *</label>
                  <textarea
                    required
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                    placeholder="Décrivez votre besoin..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.08)")}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", textAlign: "center", padding: "16px" }}>
                  Envoyer le message →
                </button>

                <p style={{ fontSize: "12px", color: "var(--gray)", textAlign: "center" }}>
                  En envoyant ce formulaire, vous serez redirigé vers WhatsApp.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
