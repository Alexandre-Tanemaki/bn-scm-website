export default function Services() {
  const services = [
    {
      icon: "✈️",
      gradient: "linear-gradient(135deg, #527048, #6a9260)",
      title: "Import de Véhicules",
      desc: "Nous importons des véhicules neufs et d&apos;occasion depuis les plus grands marchés mondiaux. Chaque véhicule est sélectionné selon des critères stricts de qualité.",
      features: ["Sourcing international", "Contrôle qualité rigoureux", "Documentation complète", "Dédouanement inclus"],
    },
    {
      icon: "🏷️",
      gradient: "linear-gradient(135deg, #A38A17, #c4a71e)",
      title: "Vente de Véhicules",
      desc: "Large sélection de véhicules disponibles à la vente. SUV, berlines, utilitaires, minibus — trouvez le véhicule qui correspond à vos besoins.",
      features: ["Prix compétitifs garantis", "Véhicules inspectés", "Facilités de paiement", "Garantie après-vente"],
    },
    {
      icon: "🔑",
      gradient: "linear-gradient(135deg, #2980b9, #3498db)",
      title: "Location de Véhicules",
      desc: "Solutions de location flexibles pour particuliers et entreprises. Courte ou longue durée avec option chauffeur disponible.",
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
    <section id="services" style={{ background: "white", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <div className="section-tag" style={{ margin: "0 auto 16px" }}>Nos Services</div>
          <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
            Des solutions complètes pour{" "}
            <span className="text-gradient-gold">tous vos besoins</span>
          </h2>
          <div className="divider" style={{ margin: "0 auto 16px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center", maxWidth: "600px" }}>
            De l&apos;import à la livraison, B&N SCM vous accompagne à chaque étape
            pour vous offrir la meilleure expérience d&apos;acquisition de véhicules.
          </p>
        </div>

        {/* Service cards */}
        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.title} className="card-hover" style={{
              background: "white", borderRadius: "24px", overflow: "hidden",
              boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}>
              <div style={{ background: svc.gradient, padding: "clamp(20px,3vw,32px) clamp(18px,2.5vw,28px) clamp(16px,2vw,24px)" }}>
                <div style={{ fontSize: "clamp(36px,5vw,48px)", marginBottom: "12px" }}>{svc.icon}</div>
                <h3 style={{ color: "white", fontSize: "clamp(17px,2.5vw,22px)", fontWeight: 700 }}>{svc.title}</h3>
              </div>
              <div style={{ padding: "clamp(18px,2.5vw,28px)" }}>
                <p style={{ color: "var(--gray)", lineHeight: 1.7, fontSize: "clamp(13px,1.5vw,14px)", marginBottom: "16px" }}>{svc.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {svc.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "clamp(12px,1.5vw,14px)", color: "var(--gray-dark)" }}>
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
          borderRadius: "24px", padding: "clamp(28px,5vw,56px) clamp(20px,4vw,48px)",
          position: "relative", overflow: "hidden", marginTop: "60px",
        }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", borderRadius: "50%", background: "rgba(163,138,23,0.15)", transform: "translate(60px,-60px)" }} />
          <div style={{ textAlign: "center", marginBottom: "40px", position: "relative", zIndex: 1 }}>
            <h3 style={{ color: "white", fontSize: "clamp(20px,3vw,28px)", fontWeight: 700, marginBottom: "10px" }}>
              Notre processus en 4 étapes
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(13px,1.8vw,15px)" }}>
              Simple, transparent et efficace
            </p>
          </div>
          <div className="process-grid">
            {process.map((step, i) => (
              <div key={step.num} style={{ textAlign: "center", position: "relative" }}>
                {i < process.length - 1 && (
                  <div className="process-arrow" />
                )}
                <div style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  background: "rgba(163,138,23,0.3)", border: "2px solid var(--gold)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 14px", color: "var(--gold-light)", fontWeight: 800, fontSize: "16px",
                }}>
                  {step.num}
                </div>
                <h4 style={{ color: "white", fontWeight: 700, marginBottom: "8px", fontSize: "clamp(13px,1.8vw,15px)" }}>{step.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(12px,1.4vw,13px)", lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
          z-index: 1;
        }
        .process-arrow {
          position: absolute;
          top: 24px;
          right: -10px;
          width: 20px;
          height: 2px;
          background: rgba(255,255,255,0.3);
          z-index: 0;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr 1fr; }
          .process-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .process-arrow { display: none; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
