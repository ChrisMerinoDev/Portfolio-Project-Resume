import { portfolio } from "@/data/portfolio";

const socials = [
	{ label: "GitHub", href: portfolio.links.github, icon: "GitHub" },
	{ label: "LinkedIn", href: portfolio.links.linkedin, icon: "LinkedIn" },
	{ label: "YouTube", href: portfolio.links.youtube, icon: "YouTube" },
];

export default function Hero() {
	return (
		<header id="hero" className="hero">
			{/* Floating background orbs */}
			<div className="hero-orb hero-orb--cyan" />
			<div className="hero-orb hero-orb--purple" />
			<div className="hero-orb hero-orb--ring" />

			<div className="hero-content">
				<div className="hero-label">Frontend Developer</div>

				<h1 className="hero-title">
					Chris
					<br />
					<span className="gradient-text">Merino</span>
				</h1>

				<p className="hero-summary">{portfolio.summary}</p>

				<div className="hero-actions">
					<a href="#projects" className="btn-primary">
						View Projects
					</a>
					<a href={`mailto:${portfolio.email}`} className="btn-secondary">
						Get in Touch
					</a>
				</div>

				<div className="hero-socials">
					{socials.map((s) => (
						<a
							key={s.label}
							href={s.href}
							target="_blank"
							rel="noopener noreferrer"
							className="social-icon"
							title={s.label}
						>
							{s.icon}
						</a>
					))}
				</div>
			</div>
		</header>
	);
}
