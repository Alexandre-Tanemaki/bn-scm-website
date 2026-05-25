export default function Services() {
  const services = [
    {
      icon: "✈️",
      color: "var(--green)",
      gradient: "linear-gradient(135deg, #527048, #6a9260)",
      title: "Import de Véhicules",
      desc: "Nous importons des véhicules neufs et d'occasion depuis les plus grands marchés mondiaux (Europe, Asie, Amérique). Chaque véhicule est sélectionné selon des critères stricts de qualité.",
      features: ["Sourcing international", "Contrôle qualité rigoureux", "Documentation complète", "Dédouanement inclus"],
    },
    {
      icon: "🏷️",
      color: "var(--gold)",
      gradient: "linear-gradient(135deg, #A38A17, #c4a71e)",
      title: "Vente de Véhicules",
      desc: "Large sélection de véhicules disponibles à la vente. SUV, berlines, utilitaires, minibus — trouvez le véhicule qui correspond à vos besoins et à votre budget.",
      features: ["Prix compétitifs garantis", "Véhicules inspectés", "Facilités de paiement", "Garantie après-vente"],
    },
    {
      icon: "🔑",
      color: "#2980b9",
      gradient: "linear-gradient(135deg, #2980b9, #3498db)",
      title: "Location de Véhicules",
      desc: "Solutions de location flexibles pour particuliers et entreprises. Location courte ou longue durée avec option de location avec chauffeur disponible.",
      features: ["Location courte & longue durée", "Avec ou sans chauffeur", "Assurance incluse", "Assistance 24/7"],
    },
  ];

  const process = [
    { num: "01", title: "Consultation", desc: "Nous analysons vos besoins et votre budget pour vous proposer les meilleures options." },
    { num: "02", title: "Sélection", desc: "Notre équipe sélectionne les véhicules correspondant à vos critères sur le marché mondial." },
    { num: "03", title: "Import & Contrôle", desc: "Le véhicule est importé et inspecté rigoureusement avant livraison." },
    { num: "04", title: "Livraison", desc: "Votre véhicule vous est livré avec toute la documentation nécessaire." },
  ];

  return (
    <section id="services" style={{ background: "white", padding: "90px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-tag" style={{ margin: "0 auto 16px" }}>Nos Services</div>
          <h2 className="section-title" style={{ margin: "0 auto 20px" }}>
            Des solutions complètes pour{" "}
            <span className="text-gradient-gold">tous vos besoins</span>
          </h2>
          <div className="divider" style={{ margin: "0 auto 20px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            De l&apos;import à la livraison, B&N SCM vous accompagne à chaque étape
            pour vous offrir la meilleure expérience d&apos;acquisition de véhicules.
          </p>
        </div>

        {/* Service cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px", marginBottom: "80px" }}>
          {services.map((svc) => (
            <div
              key={svc.title}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ background: svc.gradient, padding: "32px 28px 24px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>{svc.icon}</div>
                <h3 style={{ color: "white", fontSize: "22px", fontWeight: 700 }}>{svc.title}</h3>
              </div>
              <div style={{ padding: "28px" }}>
                <p style={{ color: "var(--gray)", lineHeight: 1.7, fontSize: "14px", marginBottom: "20px" }}>{svc.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {svc.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--gray-dark)" }}>
                      <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "linear-gradient(135deg, var(--green), var(--green-light))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "white", flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div style={{
          background: "linear-gradient(135deg, var(--green-dark), var(--green))",
          borderRadius: "28px",
          padding: "56px 48px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", borderRadius: "50%", background: "rgba(163,138,23,0.15)", transform: "translate(100px, -100px)" }} />

          <div style={{ textAlign: "center", marginBottom: "48px", position: "relative", zIndex: 1 }}>
            <h3 style={{ color: "white", fontSize: "28px", fontWeight: 700, marginBottom: "12px" }}>
              Notre processus en 4 étapes
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>
              Simple, transparent et efficace — de votre demande à la livraison
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", position: "relative", zIndex: 1 }}>
            {process.map((step, i) => (
              <div key={step.num} style={{ textAlign: "center", position: "relative" }}>
                {i < process.length - 1 && (
                  <div style={{
                    position: "absolute",
                    top: "24px",
                    right: "-12px",
                    width: "24px",
                    height: "2px",
                    background: "rgba(255,255,255,0.3)",
                    zIndex: 0,
                  }} />
                )}
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(163,138,23,0.3)",
                  border: "2px solid var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  color: "var(--gold-light)",
                  fontWeight: 800,
                  fontSize: "16px",
                }}>
                  {step.num}
                </div>
                <h4 style={{ color: "white", fontWeight: 700, marginBottom: "8px" }}>{step.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services .container > div:nth-child(2) > div:first-child { grid-template-columns: 1fr !important; }
          #services .container > div:last-child > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          #services .container > div:last-child > div:last-child { grid-template-columns: 1fr !important; }
          #services .container > div:last-child { padding: 32px 24px !important; }
        }
      `}</style>
    </section>
  );
}
