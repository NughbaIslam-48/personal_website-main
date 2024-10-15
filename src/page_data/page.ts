interface PersonalDataType {
  name: string;
  role: string;
  education: string[];
  contactLinks: string[];
}

interface AboutMEDataType {
  title: string;
  body: string[];
}

export const PersonalData: PersonalDataType = {
  name: "Nughba Islam",
  role: "Frontend Developer|Graphic Designer",
  education: [
    "Govt Degree Girls Collage – Intermediate (Pre Engineering) → June 2022 - July 2024",
    "High Star Secondary School – Matriculation in Computer Science → May 2012",
  ],
  contactLinks: [
    "mailto:emailto:nughbai@gmail.com",
    "https://www.linkedin.com/in/nughba-islam/",
    "https://wa.me/+923493388434",
  ],
};

export const aboutMe: AboutMEDataType = {
  title: "About Me",
  body: [
    "As a Frontend Developer, I am deeply passionate about leveraging technology to create meaningful solutions and drive positive change. With a solid foundation in computer science, I possess a versatile skill set encompassing both technical expertise and effective communication abilities",
    "I'm committed to continuous learning and staying updated with the latest industry trends. Whether it's tackling complex algorithms or finding creative solutions to UI/UX challenges, I embrace every opportunity to expand my skill set.",
  ],
};

export const skills = {
  soft: [
    { icon: "👂🏼", text: "Active Listening" },
    { icon: "💬", text: "Effective Communication" },
    { icon: "👥", text: "Collaboration" },
    { icon: "⽓", text: "Teamwork" },
    { icon: "💡", text: "Creative Problem Solving" },
    { icon: "⌛️", text: "Time management" },
  ],
  hard: [
    { icon: "N ➡️  ", text: "Next.js" },
    { icon: "🚀", text: "React.js" },
    { icon: "🟢JS  ", text: "Node.js" },
    { icon: "💾", text: "PostgreSQL" },
    { icon: "🧠", text: "Sanity (Headless CMS)" },
    { icon: "🎨", text: "Shadcn/ui" },
    { icon: "TW 🌬️ ", text: "Tailwind CSS" },
    { icon: "ʦ", text: "TypeScript" },
    { icon: "💻", text: "Javascript" },
    { icon: "☕", text: "Java" },
    { icon: "🐍", text: "Python" },
    { icon: "🔢", text: "C++" },
    { icon: "🔌", text: "API's" },
    { icon: "☁️", text: "Vercel" },
  ],
};


export const professionalData = {
	title: "Professional Experience",
	experiences: [
		{
			role: "Web Devolping, PIAIC. (2024-Present)",
			description:
				"A web developer is a professional who specializes in creating and maintaining websites and web applications. They work with a combination of programming languages like HTML, CSS, JavaScript, and frameworks to build the frontend (user interface) and backend (server-side logic) of a website. Web developers ensure websites are responsive, functional, and optimized for performance, security, and user experience. They collaborate with designers, content creators, and other developers to deliver dynamic, interactive, and scalable web solutions.",
			current: true,
		},

		{
			role: "Graphics Designing, The Summit. (2021-2023)",
			description:
				"A Graphic Designer is a creative professional who specializes in visual communication. They use typography, imagery, color, and layout to create compelling designs for a wide range of mediums, including digital platforms, print, and branding materials. Graphic designers work on projects such as logos, websites, advertisements, brochures, and social media content, blending creativity with technical skills to deliver aesthetically pleasing and effective visual solutions that meet clients' or business needs.",
			current: false,
		},
	],
};