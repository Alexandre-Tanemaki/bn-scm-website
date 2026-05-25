"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "À vendre", href: "#vente" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "1px solid rgba(82,112,72,0.1)" : "none",
      }}>
        <div className="container" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "64px" : "80px",
          transition: "height 0.4s ease",
        }}>
          {/* Logo */}
          <button onClick={() => handleNav("#hero")} style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", gap: "10px",
          }}>
            <div style={{ position: "relative", width: "42px", height: "42px", flexShrink: 0 }}>
              <Image src="/logo.png" alt="B&N SCM Logo" fill style={{ objectFit: "contain" }} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 800, fontSize: "clamp(15px,3vw,18px)", color: scrolled ? "var(--green)" : "white", lineHeight: 1.1 }}>
                B&N SCM
              </div>
              <div style={{ fontSize: "clamp(9px,1.5vw,10px)", color: scrolled ? "var(--gold)" : "rgba(255,255,255,0.8)", fontWeight: 500, letterSpacing: "0.5px" }}>
                Supply Chain Management
              </div>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="desktop-nav" style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            {links.map((link) => (
              <button key={link.href} onClick={() => handleNav(link.href)} style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "8px 12px", borderRadius: "8px",
                fontSize: "14px",
                fontWeight: active === link.href ? 600 : 500,
                color: active === link.href ? "var(--green)" : scrolled ? "var(--gray)" : "rgba(255,255,255,0.9)",
                transition: "all 0.2s ease",
                fontFamily: "Rubik, sans-serif",
                borderBottom: active === link.href ? "2px solid var(--gold)" : "2px solid transparent",
                whiteSpace: "nowrap",
              }}>
                {link.label}
              </button>
            ))}
            <button onClick={() => handleNav("#contact")} className="btn-primary"
              style={{ padding: "9px 18px", fontSize: "13px", marginLeft: "8px" }}>
              Nous contacter
            </button>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" aria-label="Menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none" }}>
            <div style={{ width: "24px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{ display: "block", height: "2px", background: scrolled ? "var(--green)" : "white", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
              <span style={{ display: "block", height: "2px", background: scrolled ? "var(--green)" : "white", borderRadius: "2px", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", height: "2px", background: scrolled ? "var(--green)" : "white", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className="mobile-menu-overlay" style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "white",
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        display: "flex",
        flexDirection: "column",
        paddingTop: "80px",
        overflowY: "auto",
      }}>
        <div style={{ padding: "24px" }}>
          {links.map((link) => (
            <button key={link.href} onClick={() => handleNav(link.href)} style={{
              display: "flex", width: "100%", background: "none", border: "none",
              cursor: "pointer", textAlign: "left", padding: "16px 0",
              fontSize: "18px", fontWeight: active === link.href ? 700 : 500,
              color: active === link.href ? "var(--green)" : "var(--black)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              fontFamily: "Rubik, sans-serif",
            }}>
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNav("#contact")} className="btn-primary"
            style={{ width: "100%", textAlign: "center", marginTop: "24px", padding: "16px" }}>
            Nous contacter
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
}
