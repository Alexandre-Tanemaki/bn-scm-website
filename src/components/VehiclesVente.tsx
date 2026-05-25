"use client";
import { useState } from "react";

const vehicles = [
  {
    id: 1,
    name: "Toyota Land Cruiser Prado",
    year: 2023,
    category: "SUV",
    price: 45000000,
    mileage: "Neuf",
    fuel: "Diesel",
    transmission: "Automatique",
    color: "Blanc nacré",
    seats: 7,
    icon: "🚙",
    badge: "Coup de cœur",
    badgeColor: "var(--gold)",
    features: ["Caméra 360°", "GPS intégré", "Toit ouvrant", "Sièges cuir"],
  },
  {
    id: 2,
    name: "Mercedes-Benz GLE 350",
    year: 2022,
    category: "SUV Premium",
    price: 58000000,
    mileage: "12 000 km",
    fuel: "Essence",
    transmission: "Automatique",
    color: "Gris métallisé",
    seats: 5,
    icon: "🚘",
    badge: "Premium",
    badgeColor: "#9b59b6",
    features: ["Ambiance LED", "Écran tactile", "Apple CarPlay", "Aide au stationnement"],
  },
  {
    id: 3,
    name: "Toyota Hilux Double Cab",
    year: 2023,
    category: "Pick-up",
    price: 35000000,
    mileage: "Neuf",
    fuel: "Diesel",
    transmission: "Manuelle",
    color: "Noir",
    seats: 5,
    icon: "🛻",
    badge: "Disponible",
    badgeColor: "var(--green)",
    features: ["4x4 permanent", "Benne renforcée", "Climatisation", "Régulateur de vitesse"],
  },
  {
    id: 4,
    name: "Toyota Hiace Minibus",
    year: 2022,
    category: "Minibus",
    price: 28000000,
    mileage: "25 000 km",
    fuel: "Diesel",
    transmission: "Manuelle",
    color: "Blanc",
    seats: 15,
    icon: "🚐",
    badge: "Populaire",
    badgeColor: "#e74c3c",
    features: ["15 places", "Climatisation", "Grandes portes", "Fiable en tout terrain"],
  },
  {
    id: 5,
    name: "Honda CR-V",
    year: 2023,
    category: "SUV",
    price: 32000000,
    mileage: "Neuf",
    fuel: "Hybride",
    transmission: "CVT",
    color: "Bleu nuit",
    seats: 5,
    icon: "🚙",
    badge: "Éco",
    badgeColor: "#27ae60",
    features: ["Hybride rechargeable", "Toit panoramique", "Honda Sensing", "Démarrage sans clé"],
  },
  {
    id: 6,
    name: "Mitsubishi Pajero Sport",
    year: 2022,
    category: "SUV",
    price: 38000000,
    mileage: "8 000 km",
    fuel: "Diesel",
    transmission: "Automatique",
    color: "Rouge bordeaux",
    seats: 7,
    icon: "🚙",
    badge: "Nouveau stock",
    badgeColor: "var(--gold)",
    features: ["Super Select 4WD", "Contrôle terrain", "7 places", "Remorquage 3t"],
  },
];

const categories = ["Tous", "SUV", "SUV Premium", "Pick-up", "Minibus"];

const formatPrice = (p: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "XAF", maximumFractionDigits: 0 }).format(p);

export default function VehiclesVente() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null);

  const filtered = activeCategory === "Tous" ? vehicles : vehicles.filter((v) => v.category === activeCategory);

  return (
    <section id="vente" style={{ background: "var(--off-white)", padding: "90px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag" style={{ margin: "0 auto 16px" }}>Véhicules à Vendre</div>
          <h2 className="section-title" style={{ margin: "0 auto 20px" }}>
            Notre collection{" "}
            <span className="text-gradient-green">disponible à l&apos;achat</span>
          </h2>
          <div className="divider" style={{ margin: "0 auto 20px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            Des véhicules sélectionnés avec soin pour vous offrir la meilleure qualité au meilleur prix.
          </p>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "10px 22px",
                borderRadius: "50px",
                border: activeCategory === cat ? "none" : "2px solid rgba(82,112,72,0.2)",
                background: activeCategory === cat ? "linear-gradient(135deg, var(--green), var(--green-light))" : "white",
                color: activeCategory === cat ? "white" : "var(--gray)",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "Rubik, sans-serif",
                boxShadow: activeCategory === cat ? "0 4px 15px rgba(82,112,72,0.3)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "40px" }}>
          {filtered.map((vehicle) => (
            <div
              key={vehicle.id}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.06)",
                cursor: "pointer",
              }}
              onClick={() => setSelectedVehicle(vehicle)}
            >
              {/* Vehicle visual */}
              <div style={{
                background: "linear-gradient(135deg, #f8f7f2, #edf0e8)",
                padding: "32px",
                textAlign: "center",
                position: "relative",
                height: "180px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <div style={{ fontSize: "80px" }} className="animate-float">{vehicle.icon}</div>
                <div style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: vehicle.badgeColor,
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "50px",
                  fontSize: "11px",
                  fontWeight: 700,
                }}>
                  {vehicle.badge}
                </div>
                <div style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "white",
                  color: "var(--gray)",
                  padding: "4px 10px",
                  borderRadius: "50px",
                  fontSize: "11px",
                  fontWeight: 600,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}>
                  {vehicle.year}
                </div>
              </div>

              <div style={{ padding: "20px" }}>
                <div style={{ fontSize: "12px", color: "var(--green)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                  {vehicle.category}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "17px", marginBottom: "12px", color: "var(--black)" }}>{vehicle.name}</h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
                  {[
                    { icon: "⛽", label: vehicle.fuel },
                    { icon: "⚙️", label: vehicle.transmission },
                    { icon: "🛣️", label: vehicle.mileage },
                    { icon: "👥", label: `${vehicle.seats} places` },
                  ].map((info) => (
                    <div key={info.label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--gray)" }}>
                      <span>{info.icon}</span>
                      <span>{info.label}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "11px", color: "var(--gray)", marginBottom: "2px" }}>Prix de vente</div>
                    <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--green)" }}>{formatPrice(vehicle.price)}</div>
                  </div>
                  <button className="btn-primary" style={{ padding: "10px 18px", fontSize: "13px" }}>
                    Détails →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "var(--gray)", marginBottom: "16px" }}>Vous ne trouvez pas ce que vous cherchez ?</p>
          <a href="#contact" className="btn-primary">
            Demandez votre véhicule sur mesure
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedVehicle && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setSelectedVehicle(null)}
        >
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              maxWidth: "560px",
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              background: "linear-gradient(135deg, var(--green-dark), var(--green))",
              padding: "32px",
              textAlign: "center",
              position: "relative",
            }}>
              <button onClick={() => setSelectedVehicle(null)} style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(255,255,255,0.2)", border: "none", color: "white", width: "32px", height: "32px", borderRadius: "50%", cursor: "pointer", fontSize: "16px" }}>✕</button>
              <div style={{ fontSize: "80px", marginBottom: "16px" }}>{selectedVehicle.icon}</div>
              <h3 style={{ color: "white", fontSize: "22px", fontWeight: 700 }}>{selectedVehicle.name}</h3>
              <div style={{ color: "var(--gold-light)", fontSize: "14px", marginTop: "4px" }}>{selectedVehicle.category} • {selectedVehicle.year}</div>
            </div>
            <div style={{ padding: "28px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                {[
                  { label: "Kilométrage", value: selectedVehicle.mileage },
                  { label: "Carburant", value: selectedVehicle.fuel },
                  { label: "Transmission", value: selectedVehicle.transmission },
                  { label: "Couleur", value: selectedVehicle.color },
                  { label: "Places", value: `${selectedVehicle.seats} places` },
                  { label: "Année", value: String(selectedVehicle.year) },
                ].map((spec) => (
                  <div key={spec.label} style={{ background: "var(--off-white)", borderRadius: "12px", padding: "12px" }}>
                    <div style={{ fontSize: "11px", color: "var(--gray)", textTransform: "uppercase", letterSpacing: "0.5px" }}>{spec.label}</div>
                    <div style={{ fontWeight: 600, fontSize: "14px", marginTop: "4px" }}>{spec.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: "24px" }}>
                <div style={{ fontWeight: 700, marginBottom: "10px" }}>Équipements inclus</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {selectedVehicle.features.map((f) => (
                    <span key={f} style={{ background: "rgba(82,112,72,0.1)", color: "var(--green)", padding: "6px 14px", borderRadius: "50px", fontSize: "13px", fontWeight: 500 }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "12px", color: "var(--gray)" }}>Prix</div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "var(--green)" }}>{formatPrice(selectedVehicle.price)}</div>
                </div>
                <a href={`https://wa.me/24106530011?text=Bonjour, je suis intéressé(e) par le ${selectedVehicle.name} (${selectedVehicle.year}) à ${formatPrice(selectedVehicle.price)}.`} target="_blank" rel="noreferrer" className="btn-gold">
                  📲 Contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          #vente .container > div:nth-child(3) { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          #vente .container > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
