import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
	return (
		<Section id="skills">
			<div className="section-container">
				<div className="line-accent" />
				<h2 className="section-title">
					Tech <span className="text-purple">Stack</span>
				</h2>

				<div className="skills-grid">
					{Object.entries(portfolio.skills).map(([category, items]) => (
						<div key={category} className="skill-card">
							<div className="skill-category-title">{category}</div>
							<div className="skill-tags">
								{items.map((s) => (
									<span key={s} className="tag-pill">
										{s}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
