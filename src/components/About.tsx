export default function About() {
  const values = [
    {
      icon: "🤝",
      title: "Confiance",
      desc: "Nous bâtissons des relations durables avec nos clients et fournisseurs grâce à notre transparence.",
    },
    {
      icon: "⭐",
      title: "Excellence",
      desc: "Chaque véhicule est sélectionné avec soin pour vous garantir la meilleure qualité.",
    },
    {
      icon: "💡",
      title: "Innovation",
      desc: "Nous utilisons les dernières technologies pour optimiser notre chaîne d'approvisionnement.",
    },
    {
      icon: "🌍",
      title: "Réseau Global",
      desc: "Accès à des fournisseurs internationaux pour vous offrir les meilleures options du marché.",
    },
  ];

  return (
    <section id="about" style={{ background: "var(--off-white)", padding: "90px 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Left visual */}
          <div style={{ position: "relative" }}>
            <div style={{
              background: "linear-gradient(135deg, var(--green-dark), var(--green))",
              borderRadius: "24px",
              padding: "48px 40px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", borderRadius: "50%", background: "rgba(163,138,23,0.2)", transform: "translate(50px, -50px)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", transform: "translate(-30px, 30px)" }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: "60px", marginBottom: "20px" }}>🏢</div>
                <h3 style={{ color: "white", fontSize: "28px", fontWeight: 700, marginBottom: "16px" }}>
                  B&N Supply Chain Management
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "32px", fontSize: "15px" }}>
                  Fondée avec la vision de transformer l&apos;industrie automobile au Gabon,
                  B&N SCM est votre centrale d&apos;achat de référence.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  {[
                    { num: "200+", label: "Véhicules livrés" },
                    { num: "50+", label: "Partenaires" },
                    { num: "5+", label: "Ans d'expérience" },
                    { num: "24/7", label: "Support client" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        borderRadius: "12px",
                        padding: "16px",
                        textAlign: "center",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <div style={{ fontSize: "24px", fontWeight: 800, color: "var(--gold-light)" }}>{item.num}</div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              background: "var(--gold)",
              color: "white",
              borderRadius: "16px",
              padding: "14px 20px",
              boxShadow: "0 8px 30px rgba(163,138,23,0.4)",
              fontWeight: 700,
              fontSize: "13px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "24px" }}>🥇</div>
              <div>N°1 au Gabon</div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="section-tag">À propos de nous</div>
            <h2 className="section-title">
              Votre centrale d&apos;achat{" "}
              <span className="text-gradient-green">à portée de main</span>
            </h2>
            <div className="divider" />
            <p className="section-subtitle" style={{ marginBottom: "32px" }}>
              Nous sommes fiers de vous présenter notre entreprise, une centrale d&apos;achat
              spécialisée dans la recherche des meilleurs véhicules au meilleur prix.
              Notre équipe passionnée et expérimentée travaille sans relâche pour négocier
              avec les fournisseurs afin de vous offrir des produits de qualité à des tarifs compétitifs.
            </p>
            <p className="section-subtitle" style={{ marginBottom: "40px" }}>
              Que vous soyez un particulier, une entreprise ou une institution, nous sommes
              là pour répondre à vos besoins en termes de véhicules. Notre objectif est de
              simplifier vos achats en vous offrant un service personnalisé, des prix
              avantageux et une livraison rapide.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {values.map((val) => (
                <div
                  key={val.title}
                  className="card-hover"
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "20px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(82,112,72,0.08)",
                  }}
                >
                  <div style={{ fontSize: "28px", marginBottom: "10px" }}>{val.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "6px", color: "var(--green-dark)" }}>{val.title}</div>
                  <div style={{ fontSize: "13px", color: "var(--gray)", lineHeight: 1.5 }}>{val.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
