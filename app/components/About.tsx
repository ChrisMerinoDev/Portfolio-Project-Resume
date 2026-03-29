import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about">
      <div className="section-container section-container--narrow">
        <div className="line-accent" />
        <h2 className="section-title">
          About <span className="text-cyan">Me</span>
        </h2>

        <div className="about-grid">
          <div>
            <p className="about-text">
              I build production-ready web applications with a strong focus on
              clean UI, performance, and user-centered design. My toolbox
              centers around React, Next.js, and TypeScript, with hands-on
              experience in full-stack development including authentication,
              payments, and AI integrations.
            </p>
            <p className="about-text">
              I&apos;m passionate about turning complex problems into elegant,
              intuitive interfaces. When I&apos;m not coding, I bring my
              leadership and coaching experience from gymnastics into every
              team I work with.
            </p>
          </div>

          <div className="education-stack">
            {portfolio.education.map((ed, i) => (
              <div key={i} className="education-card">
                <div className="education-year">{ed.year}</div>
                <div className="education-degree">{ed.degree}</div>
                <div className="education-school">{ed.school}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
