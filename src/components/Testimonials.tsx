"use client";
import { useState, useRef } from "react";

const testimonials = [
  { name: "Jean-Pierre Obiang", role: "Directeur Général, Entreprise SARL", avatar: "👨‍💼", rating: 5, text: "B&N SCM nous a fourni une flotte de 10 véhicules en un temps record. Service impeccable, véhicules en parfait état et prix très compétitifs. Je recommande vivement!" },
  { name: "Marie-Claire Nze", role: "Particulière, Libreville", avatar: "👩‍💼", rating: 5, text: "J&apos;ai loué un véhicule pour un mois lors d&apos;un déplacement professionnel. La disponibilité 24h/24 et la qualité des véhicules sont exceptionnelles. Merci à toute l&apos;équipe!" },
  { name: "Rodrigue Mboumba", role: "Chef de chantier, BTP", avatar: "👷", rating: 5, text: "Nous faisons appel à B&N SCM pour tous nos besoins en véhicules utilitaires. Fiabilité et professionnalisme au rendez-vous à chaque fois. Un partenaire de confiance!" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
    touchStartX.current = null;
  };

  return (
    <section style={{ background: "var(--off-white)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag" style={{ margin: "0 auto 16px" }}>Témoignages</div>
          <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
            Ce que disent{" "}
            <span className="text-gradient-green">nos clients</span>
          </h2>
          <div className="divider" style={{ margin: "0 auto" }} />
        </div>

        {/* Desktop: 3 columns */}
        <div className="testimonials-desktop">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="testimonials-mobile">
          <div
            style={{ overflow: "hidden", borderRadius: "20px" }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div style={{
              display: "flex",
              transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
              transform: `translateX(-${current * 100}%)`,
            }}>
              {testimonials.map((t) => (
                <div key={t.name} style={{ minWidth: "100%", padding: "0 4px" }}>
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots + arrows */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "24px" }}>
            <button onClick={prev} aria-label="Précédent" style={{
              width: "40px", height: "40px", borderRadius: "50%",
              border: "2px solid var(--green)", background: "white",
              cursor: "pointer", fontSize: "18px", color: "var(--green)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>‹</button>
            <div style={{ display: "flex", gap: "8px" }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Témoignage ${i + 1}`} style={{
                  width: i === current ? "24px" : "10px", height: "10px",
                  borderRadius: "5px", border: "none",
                  background: i === current ? "var(--green)" : "rgba(82,112,72,0.3)",
                  cursor: "pointer", transition: "all 0.3s ease", padding: 0,
                }} />
              ))}
            </div>
            <button onClick={next} aria-label="Suivant" style={{
              width: "40px", height: "40px", borderRadius: "50%",
              border: "2px solid var(--green)", background: "white",
              cursor: "pointer", fontSize: "18px", color: "var(--green)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>›</button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-desktop {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .testimonials-mobile { display: none; }
        @media (max-width: 768px) {
          .testimonials-desktop { display: none; }
          .testimonials-mobile { display: block; }
        }
        @media (max-width: 900px) and (min-width: 769px) {
          .testimonials-desktop { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="card-hover" style={{
      background: "white", borderRadius: "20px",
      padding: "clamp(20px,3vw,32px)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
      border: "1px solid rgba(0,0,0,0.05)",
      position: "relative", height: "100%",
    }}>
      <div style={{ fontSize: "40px", color: "rgba(82,112,72,0.15)", position: "absolute", top: "18px", right: "22px", fontWeight: 900, lineHeight: 1 }}>&ldquo;</div>
      <div style={{ display: "flex", gap: "4px", marginBottom: "14px" }}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} style={{ color: "var(--gold)", fontSize: "16px" }}>★</span>
        ))}
      </div>
      <p style={{ color: "var(--gray)", lineHeight: 1.7, fontSize: "clamp(13px,1.6vw,15px)", marginBottom: "20px", fontStyle: "italic" }}>
        &ldquo;{t.text}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "16px" }}>
        <div style={{
          width: "46px", height: "46px", borderRadius: "50%", flexShrink: 0,
          background: "linear-gradient(135deg, var(--green), var(--green-light))",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px",
        }}>
          {t.avatar}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "clamp(13px,1.8vw,15px)" }}>{t.name}</div>
          <div style={{ fontSize: "clamp(11px,1.3vw,13px)", color: "var(--gray)" }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}
