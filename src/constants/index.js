import project1 from "/assets/projects/project-1.png";
import project2 from "/assets/projects/project-2.png";
import project3 from "/assets/projects/project-3.png";
import project4 from "/assets/projects/project-4.png";

export const HERO_CONTENT = `I am an aspiring software engineer passionate about learning new technologies. With 5 years in programming, I have honed my skills in back-end technologies such as Django, Node.js, Express.js, MySQL, and PostgreSQL as well as front-end technologies such as React, HTML+CSS, Tailwind CSS. My goal is to constantly improve to serve the community of programmers and beyond.`;

export const ABOUT_TEXT = HERO_CONTENT


export const EXPERIENCES = [
  {
    year: "Feb. 2024 – Apr. 2024",
    role: "Software Engineering Intern",
    company: "GlobalArt.AI",
    description: `Trained Stable Diffusion 2 model using Python, creating over 50 samples of generative artwork. Migrated the backend from Google Colab to Python on Google Cloud Platform, enhancing public system access. Coded online AR application using Three.js to improve user experience by increasing interactivity of artwork.`,
    technologies: ["Express.js", "Stable Diffusion", "Google Cloud Platform", "Three.js"],
  },
  {
    year: "Sep. 2023 – Apr. 2024",
    role: "Student Researcher",
    company: "Gensler",
    description: `Designed a project to enhance self-awareness of office workers at Gensler HQ, largest architectural company. Developed an MVP using React, tested by 20 Gensler employees, achieving 4.9/5 satisfaction rate. Coordinated 8 meetings as point of contact with employees from $2 billion company.`,
    technologies: ["HTML", "CSS", "React"],
  },
 
];

export const PROJECTS = [
  {
    title: "Chef.in",
    image: project1,
    description:
      "a Django-based web application designed to help users discover, share, and manage recipes in an intuitive and user-friendly interface. With Bootstrap CSS for styling, the platform offers a seamless experience for food enthusiasts to explore new dishes and organize their favorite recipes.",
    technologies: ["Django", "PostgreSQL", "HTML", "Bootstrap"],
  },
  {
    title: "Pl-speech",
    image: project2,
    description:
      "Real-time Polish-to-English and English-to-Polish speech-to-text translator. Was used by Econverse on their conferences",
    technologies: ["Python", "Whisper", "Deep Translator", "PyQt"],
  },
  {
    title: "WELLTH",
    image: project3,
    description:
      "IOS application with an integrated chatbot and Apple HealthKit to prevent from overwhelming.  ",
    technologies: ["Swift", "OpenAI API", "Apple HealthKit"],
  },
  {
    title: "Caffeine Intake Recommender",
    image: project4,
    description:
      "Javascript based application for Amazfit watch to calculate the recommended caffeine intake based on health data.",
    technologies: ["Javascript", "Zepp OS"],
  },
];

export const ACHIEVEMENTS = [
  {
    year: "2022",
    title: "Astana IT University Competitive Programming Finalist",
    description: "Awarded for outstanding knowledge in solving competitive programming problems. 2000+ participants",
  },
  {
    year: "2023",
    title: "Calhacks 10.0 Winner",
    description: "Awarded for the best use of Zepp Health. Won $1000+ in prizes for the team. Largest collegiate hackathon in the world.",
  },
  {
    year: "2024",
    title: "UC Berkeley Hack For Impact Winner",
    description: "Awarded for the best solution for The Dancing Cat. 300+ paricipants ",
  },
  // Add more achievements as needed
];

export const CONTACT = {
  address: "16 Turk St., San Francisco, California, CA 94102 ",
  phoneNo: "+1 628 444 9011 ",
  email: "islam@uni.minerva.edu",
};