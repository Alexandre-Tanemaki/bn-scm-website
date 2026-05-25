export default function Testimonials() {
  const testimonials = [
    {
      name: "Jean-Pierre Obiang",
      role: "Directeur Général, Entreprise SARL",
      avatar: "👨‍💼",
      rating: 5,
      text: "B&N SCM nous a fourni une flotte de 10 véhicules en un temps record. Service impeccable, véhicules en parfait état et prix très compétitifs. Je recommande vivement!",
    },
    {
      name: "Marie-Claire Nze",
      role: "Particulière, Libreville",
      avatar: "👩‍💼",
      rating: 5,
      text: "J'ai loué un véhicule pour un mois lors d'un déplacement professionnel. La disponibilité 24h/24 et la qualité des véhicules sont exceptionnelles. Merci à toute l'équipe!",
    },
    {
      name: "Rodrigue Mboumba",
      role: "Chef de chantier, BTP",
      avatar: "👷",
      rating: 5,
      text: "Nous faisons appel à B&N SCM pour tous nos besoins en véhicules utilitaires. Fiabilité et professionnalisme au rendez-vous à chaque fois. Un partenaire de confiance!",
    },
  ];

  return (
    <section style={{ background: "var(--off-white)", padding: "90px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-tag" style={{ margin: "0 auto 16px" }}>Témoignages</div>
          <h2 className="section-title" style={{ margin: "0 auto 20px" }}>
            Ce que disent{" "}
            <span className="text-gradient-green">nos clients</span>
          </h2>
          <div className="divider" style={{ margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.05)",
                position: "relative",
              }}
            >
              <div style={{ fontSize: "48px", color: "rgba(82,112,72,0.15)", position: "absolute", top: "20px", right: "24px", fontWeight: 900, lineHeight: 1 }}>&ldquo;</div>

              <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: "var(--gold)", fontSize: "16px" }}>★</span>
                ))}
              </div>

              <p style={{ color: "var(--gray)", lineHeight: 1.7, fontSize: "15px", marginBottom: "24px", fontStyle: "italic" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "14px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "20px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--green), var(--green-light))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "15px" }}>{t.name}</div>
                  <div style={{ fontSize: "13px", color: "var(--gray)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
