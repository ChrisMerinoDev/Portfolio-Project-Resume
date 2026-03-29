import Section from "./Section";
import { portfolio } from "@/data/portfolio";

const socials = [
  { label: "GitHub", href: portfolio.links.github },
  { label: "LinkedIn", href: portfolio.links.linkedin },
  { label: "YouTube", href: portfolio.links.youtube },
];

export default function Contact() {
  return (
    <Section id="contact">
      <div className="contact-container">
        <div className="line-accent" style={{ margin: "0 auto 24px" }} />
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="contact-description">
          I&apos;m always open to new opportunities, collaborations, and
          conversations about building great things on the web.
        </p>

        <a href={`mailto:${portfolio.email}`} className="contact-cta">
          {portfolio.email}
        </a>

        <div className="contact-socials">
          {socials.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
