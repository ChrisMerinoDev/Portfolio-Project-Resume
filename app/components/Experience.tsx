import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience">
      <div className="section-container section-container--narrow">
        <div className="line-accent" />
        <h2 className="section-title">
          Professional <span className="text-amber">Experience</span>
        </h2>

        <div className="experience-card card-hover">
          <div className="experience-card__glow" />
          <div className="experience-card__content">
            <div className="experience-period">
              {portfolio.experience.period}
            </div>
            <h3 className="experience-role">{portfolio.experience.role}</h3>
            <div className="experience-company">
              {portfolio.experience.company}
            </div>

            <div className="experience-highlights">
              {portfolio.experience.highlights.map((h, i) => (
                <div key={i} className="highlight-item">
                  <span className="highlight-dot highlight-dot--amber" />
                  <span className="highlight-text">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Source note */}
        <div className="opensource-note">
          <span className="opensource-note__label">Also an </span>
          <span className="opensource-note__accent">
            Open Source Contributor
          </span>
          <span className="opensource-note__label">
            {" "}
            — Animation Nation (CSS Animation Library)
          </span>
        </div>
      </div>
    </Section>
  );
}
