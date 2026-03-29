"use client";

import { useState, useEffect } from "react";
import { portfolio } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="nav-blur"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "16px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background:
            scrollY > 50 ? "rgba(10,10,15,0.85)" : "transparent",
          borderBottom:
            scrollY > 50
              ? "1px solid rgba(255,255,255,0.04)"
              : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 20,
            color: "#E8E8ED",
            textDecoration: "none",
            letterSpacing: "-0.5px",
          }}
        >
          CM<span style={{ color: "#00F0FF" }}>.</span>
        </a>

        <div
          className="desktop-nav"
          style={{ display: "flex", gap: 32, alignItems: "center" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
            >
              {l.label}
            </a>
          ))}
          <a href={`mailto:${portfolio.email}`} className="nav-cta">
            Let&apos;s Talk
          </a>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
