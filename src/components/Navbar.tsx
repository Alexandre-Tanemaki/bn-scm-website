"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Nos Services", href: "#services" },
  { label: "Véhicules à vendre", href: "#vente" },
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

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "1px solid rgba(82,112,72,0.1)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "70px" : "90px",
          transition: "height 0.4s ease",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}
        >
          <div style={{ position: "relative", width: "50px", height: "50px" }}>
            <Image src="/logo.png" alt="B&N SCM Logo" fill style={{ objectFit: "contain" }} />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: 800, fontSize: "18px", color: scrolled ? "var(--green)" : "white", lineHeight: 1.1 }}>
              B&N SCM
            </div>
            <div style={{ fontSize: "10px", color: scrolled ? "var(--gold)" : "rgba(255,255,255,0.8)", fontWeight: 500, letterSpacing: "0.5px" }}>
              Supply Chain Management
            </div>
          </div>
        </button>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }} className="desktop-nav">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: active === link.href ? 600 : 500,
                color: active === link.href
                  ? "var(--green)"
                  : scrolled
                  ? "var(--gray)"
                  : "rgba(255,255,255,0.9)",
                transition: "all 0.2s ease",
                fontFamily: "Rubik, sans-serif",
                borderBottom: active === link.href ? "2px solid var(--gold)" : "2px solid transparent",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="btn-primary"
            style={{ padding: "10px 22px", fontSize: "13px", marginLeft: "8px" }}
          >
            Nous contacter
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "none",
          }}
        >
          <div style={{ width: "24px", display: "flex", flexDirection: "column", gap: "5px" }}>
            <span style={{ display: "block", height: "2px", background: scrolled ? "var(--green)" : "white", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", height: "2px", background: scrolled ? "var(--green)" : "white", borderRadius: "2px", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", height: "2px", background: scrolled ? "var(--green)" : "white", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          background: "white",
          borderTop: "1px solid rgba(82,112,72,0.1)",
          maxHeight: menuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div className="container" style={{ padding: "16px 24px" }}>
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                display: "block",
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: "12px 0",
                fontSize: "15px",
                fontWeight: 500,
                color: active === link.href ? "var(--green)" : "var(--gray)",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                fontFamily: "Rubik, sans-serif",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
