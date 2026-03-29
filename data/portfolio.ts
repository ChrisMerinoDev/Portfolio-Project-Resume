export const portfolio = {
	name: "Chris Merino",
	title: "Frontend Developer",
	email: "chrismerino.dev@gmail.com",
	links: {
		portfolio: "https://chrismerino.dev",
		github: "https://github.com/chrismerinodev",
		linkedin: "https://www.linkedin.com/in/chrismerinodev/",
		youtube: "https://www.youtube.com/@Chris_Merino",
	},
	summary:
		"Frontend developer building production-ready web applications that solve real-world problems using React, Next.js, and TypeScript. Experienced in developing full-stack applications with authentication, payments, and AI integrations.",
	education: [
		{
			degree: "Web Developer Certification",
			school: "ZTM Academy",
			year: "2025",
		},
		{
			degree: "Audio Technology Diploma",
			school: "SAE Institute",
			year: "2022",
		},
	],
	skills: {
		Frontend: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"HTML",
			"CSS",
			"Tailwind CSS",
		],
		Backend: ["Node.js", "Express"],
		Databases: ["MongoDB", "PostgreSQL", "Supabase"],
		"Tools & Deployment": ["Git", "GitHub", "Vercel", "Railway", "Stripe API"],
		Other: ["REST APIs", "Authentication", "AI API Integration"],
	},
	projects: [
		{
			title: "KontentFlow AI",
			link: "https://kontentflowai.com",
			subtitle: "AI SaaS Content Generator",
			tech: [
				"Next.js",
				"TypeScript",
				"Node.js",
				"Express",
				"Supabase",
				"Stripe",
				"OpenAI",
			],
			highlights: [
				"Built a SaaS platform helping content creators generate 15–30 days of social media content",
				"Implemented subscription-based monetization with Stripe and protected authentication routes",
				"Responsive frontend with Next.js + Tailwind CSS for cross-device usability",
				"Integrated OpenAI API for captions, hashtags, and content strategies",
			],
			color: "#00F0FF",
		},
		{
			title: "Decision AI",
			link: "https://decision-ai-delta.vercel.app",
			youtube: "https://youtu.be/fgcFkSCG_5s",
			subtitle: "AI Decision-Making Engine",
			tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API"],
			highlights: [
				"AI-powered tool for structured pros/cons decision analysis",
				"Generates personalized 3-month action plans from user goals",
				"Ranked Top 50 out of 700+ participants in a competitive AI hackathon",
				"Shipped a functional MVP within 48 hours",
			],
			color: "#A855F7",
		},
		{
			title: "Web Dev Flashcards",
			link: "https://web-dev-flashcards.vercel.app/",
			youtube: "https://youtu.be/VchVATK_2pM",
			subtitle: "Interview Prep Platform",
			tech: ["React", "JavaScript", "Tailwind CSS"],
			highlights: [
				"Interactive learning platform for React, JavaScript, and algorithm patterns",
				"Designed UI/UX for fast knowledge retention with structured flashcards",
				"Performance-focused with clean component architecture",
			],
			color: "#F59E0B",
		},
	],
	experience: {
		role: "Gymnastics Head Coach",
		company: "TAG USA",
		period: "2021 - Present",
		highlights: [
			"Led training programs while managing schedules and performance tracking",
			"Developed strong leadership, communication, and problem-solving skills",
			"Trained and mentored students, improving retention and performance outcomes",
		],
	},
};

export type PortfolioData = typeof portfolio;
