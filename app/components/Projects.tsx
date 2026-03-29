"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
	const [activeProject, setActiveProject] = useState(0);

	return (
		<Section id="projects">
			<div className="section-container">
				<div className="line-accent" />
				<h2 className="section-title">
					Featured <span className="gradient-text">Projects</span>
				</h2>

				{/* Tabs */}
				<div className="project-tabs">
					{portfolio.projects.map((p, i) => (
						<button
							key={i}
							className={`project-tab ${activeProject === i ? "active" : ""}`}
							onClick={() => setActiveProject(i)}
							style={
								{
									"--project-accent": p.color,
								} as CSSProperties
							}
						>
							{p.title}
						</button>
					))}
				</div>

				{/* Active project card */}
				{portfolio.projects.map(
					(proj, i) =>
						activeProject === i && (
							<div key={i} className="project-card card-hover">
								{/* Accent glow */}
								<div
									className="project-card__glow"
									style={{
										background: `radial-gradient(circle at top right, ${proj.color}10, transparent 70%)`,
									}}
								/>

								<div className="project-card__content">
									<div className="project-card__header">
										<div
											className="project-card__dot"
											style={{
												background: proj.color,
												boxShadow: `0 0 12px ${proj.color}60`,
											}}
										/>
										<span
											className="project-card__subtitle"
											style={{ color: proj.color }}
										>
											{proj.subtitle}
										</span>
									</div>

									<h3 className="project-card__title">{proj.title}</h3>

									<div className="project-card__tech">
										{proj.tech.map((t) => (
											<span key={t} className="tag-pill">
												{t}
											</span>
										))}
									</div>

									<div className="project-card__highlights">
										{proj.highlights.map((h, j) => (
											<div key={j} className="highlight-item">
												<span
													className="highlight-dot"
													style={{
														background: proj.color,
														boxShadow: `0 0 8px ${proj.color}40`,
													}}
												/>
												<span className="highlight-text">{h}</span>
											</div>
										))}

										<div className="flex items-center gap-4">
											{proj.link && (
												<a
													href={proj.link}
													target="_blank"
													rel="noopener noreferrer"
													className="project-link"
													style={
														{
															"--project-accent": proj.color,
														} as CSSProperties
													}
												>
													Live
												</a>
											)}
											{proj.youtube && (
												<a
													href={proj.youtube}
													target="_blank"
													rel="noopener noreferrer"
													className="project-link"
													style={
														{
															"--project-accent": proj.color,
														} as CSSProperties
													}
												>
													Youtube Demo
												</a>
											)}
										</div>
									</div>
								</div>
							</div>
						),
				)}
			</div>
		</Section>
	);
}
