import project1 from "/assets/projects/project-1.png";
import project2 from "/assets/projects/project-2.png";
import project3 from "/assets/projects/project-3.png";
import project4 from "/assets/projects/project-4.png";
import project5 from "/assets/projects/project-5.png";
export const HERO_CONTENT = `I am a software engineer passionate about learning new technologies. With 7 years in programming, I have honed my skills in full-stack web development. My goal is to constantly improve to serve the humanity via doing what I am passionate about.`;

export const ABOUT_TEXT = HERO_CONTENT



export const EXPERIENCES = [
  {
    year: "Sep. 2024 - Dec. 2024",
    role: "Software Engineer Intern",
    company: "Jubo Health",
    description: `• Engineered prompt-based search system using Intel OpenVINO and FastAPI to query 40,000+ patient records,
implementing robust APIs and system integration, reducing decision-making time by 30 minutes per case
• Utilized agile development practices to deliver enterprise-level healthcare solutions, presenting technical
solution to 70,000+ industry professionals at Taiwan HealthCare+ Expo`,
    technologies: ["Intel OpenVINO", "FastAPI", "React", "MongoDB"],
    logo: "/assets/jubo.jpeg",
  },
  {
    year: "Feb. 2024 – Apr. 2024",
    role: "Machine Learning Fellow",
    company: "GlobalArt.AI",
    description: `• Fine-tuned Stable Diffusion 2 model using Python and PyTorch, generating 50+ high-quality artwork samples
with custom training pipeline
• Migrated backend infrastructure from Google Colab to Google Cloud Platform, improving system scalability
for 100+ users while reducing response latency by 40%`,
    technologies: ["Google Cloud Platform", "Python", "PyTorch"],
    logo: "/assets/globalartailogo.png",
    
  },
  {
    year: "Sep. 2023 – Apr. 2024",
    role: "Student Researcher",
    company: "Gensler",
    description: `• Designed a project to enhance self-awareness of office workers at Gensler HQ, impacting 5000+ employees
• Developed an MVP React app, tested by 20 Gensler employees, achieving 4.9/5 satisfaction rate
• Led a team of 5 in presenting a final project proposal to an audience of over 300+ attendees`,
    technologies: ["HTML", "CSS", "React"],
    logo: "/assets/genslerlogo.png",
  },
 
];

export const PROJECTS = [
  {
    title: "Codio",
    description:
      "Full-stack real-time chat and video calling application for people who are preparing for coding interviews",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Stream API",],
    githubLink: "https://github.com/islamborghini/codio"
  },
  {
    title: "LiveCaps",
    image: project5,
    description:
      "Real time smart speech translation and transcribtion service",
    technologies: ["Next.js", "Typescript", "Supabase", "WebSocket", "Deepgram"],
    githubLink: "https://github.com/islamborghini/LiveCaps"
  },
  {
    title: "Chef.in",
    image: project1,
    description:
      "a Django-based web application designed to help users discover, share, and manage recipes in an intuitive and user-friendly interface. With Bootstrap CSS for styling, the platform offers a seamless experience for food enthusiasts to explore new dishes and organize their favorite recipes.",
    technologies: ["Django", "PostgreSQL", "HTML", "Bootstrap"],
    githubLink: "https://github.com/islamborghini/chef.in"
  },
  {
    title: "Pl-speech",
    image: project2,
    description:
      "Real-time Polish-to-English and English-to-Polish speech-to-text translator. Was used by Econverse on their conferences.",
    technologies: ["Python", "Whisper", "Deep Translator", "PyQt"],
    githubLink: "https://github.com/islamborghini/pl-speech/"
  },
  {
    title: "WELLTH",
    image: project3,
    description:
      "IOS application with an integrated chatbot and Apple HealthKit to prevent from overwhelming.",
    technologies: ["Swift", "OpenAI API", "Apple HealthKit"],
    githubLink: "https://github.com/islamborghini/health2"
  },
  {
    title: "Caffeine Intake Recommender",
    image: project4,
    description:
      "Javascript based application for Amazfit watch to calculate the recommended caffeine intake based on health data.",
    technologies: ["Javascript", "Zepp OS"],
    githubLink: "https://github.com/islamborghini/CalHacks"
  },
];

export const ACHIEVEMENTS = [
  {
    year: "2022",
    title: "Astana IT University Competitive Programming Finalist",
    description: "Awarded for outstanding knowledge in solving competitive programming problems. 2000+ participants.",
  },
  {
    year: "2023",
    title: "Calhacks 10.0 Winner",
    description: "Awarded for the best use of Zepp Health. Won $1000+ in prizes for the team. Largest collegiate hackathon in the world.",
    photo: "/assets/calhacks.jpeg", // Add this line
  },
  {
    year: "2024",
    title: "UC Berkeley Hack For Impact Winner",
    description: "Awarded for the best solution for The Dancing Cat. 300+ paricipants.",
    photo: "/assets/hackforimpact.jpeg", // Add this line
  },
  {
    year: "2025",
    title: "Seoul AI Hackathon Winner",
    description: "Awarded for creating the best platform for K-Biox (largest Korean researcher community). 300+ participants.",
    photo: "/assets/seoulhackathon.jpeg", // Add this line
  }
  // Add more achievements as needed
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Will AI Replace Software Engineers?",
    excerpt: "",
    content: `
      <p>It is nice to see the advancements in AI. A couple years ago everyone just learned what ChatGPT was and it was a big deal. It could not do much, but the fact that it can write like a human and code on any level was exciting. Since then, there was a rumour spread that AI will replace software engineers.</p>
      <p>Now, we have many models that became part of the routine for any developer in the world. Vibe coding became a new word in a dictionary and coding without Cursor, Lovable, or Bolt is unusual. However, recently, people are starting to raise a question on how far can you advance in product development without knowledge of coding. In experiences of most of the people who create a product, it is impossible to build a scalable and secure product with tapping "TAB" every time.</p>
      <p>Because of these, I believe that developers with a knowledge in system design will always be needed. We are waiting for further AI advancements, but I believe that AI will not replace developers, but rather help them to be more productive and focus on the important parts of the product development in the near future.</p>
    `,
    date: "2025-08-25",
    tags: ["React", "Node.js", "Architecture", "Best Practices"],
    readTime: "5 min read"
  },
];

export const CONTACT = {
  address: "San Francisco, California ",
  phoneNo: "+1 628 444 9011 ",
  email: "islam@uni.minerva.edu",
};
