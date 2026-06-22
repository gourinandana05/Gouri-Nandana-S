import { 
  Code, 
  Cpu, 
  Globe, 
  Terminal, 
  Server, 
  Database,
  Briefcase,
  GraduationCap,
  Award,
  Zap
} from 'lucide-react';

export const personalInfo = {
  name: "Gouri Nandana S",
  role: "Senior React Developer & UI/UX Designer",
  tagline: "Building digital products, brands, and experience.",
  bio: "I am a passionate and driven software developer with over 5 years of experience in building modern, scalable, and accessible web applications. My expertise lies in React.js, Tailwind CSS, and creating beautiful user interfaces with a focus on high performance.",
  objective: "To leverage my skills in a dynamic environment where I can contribute to innovative projects and continue to grow as a full-stack engineer.",
  email: "hello@example.com",
  location: "San Francisco, CA",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com"
};

export const skills = {
  technical: [
    { name: "React.js", level: 95 },
    { name: "JavaScript/ES6+", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 75 },
  ],
  aiMl: [
    { name: "Python", level: 85 },
    { name: "TensorFlow", level: 70 },
    { name: "PyTorch", level: 65 },
    { name: "Data Analysis", level: 80 },
  ],
  electronics: [
    { name: "Arduino", level: 90 },
    { name: "Raspberry Pi", level: 85 },
    { name: "IoT Devices", level: 80 },
    { name: "Circuit Design", level: 75 },
  ]
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing e-commerce stores, featuring real-time analytics, inventory management, and beautiful data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Recharts", "Redux"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "A web application that interfaces with OpenAI's DALL-E API to generate images from text descriptions. Includes user authentication and gallery saving.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "OpenAI API", "Prisma", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Smart Home IoT Controller",
    description: "An interface to monitor and control various smart home devices built with React Native and an Express backend communicating with Raspberry Pi.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
    tags: ["React Native", "Node.js", "IoT", "Raspberry Pi"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const experience = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Led the frontend team in rebuilding the core SaaS product using React and Tailwind CSS, improving load times by 40% and user retention by 25%."
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Creative Digital Agency",
    period: "2018 - 2021",
    description: "Developed responsive websites for various high-profile clients. Collaborated closely with UI/UX designers to implement pixel-perfect designs."
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    period: "2016 - 2018",
    description: "Specialized in Artificial Intelligence and Human-Computer Interaction. Graduated with Honors."
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Electronics",
    institution: "State Engineering College",
    period: "2012 - 2016",
    description: "Core focus on embedded systems, microcontrollers, and communication networks."
  }
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive, fast, and accessible web applications using modern frameworks.",
    icon: <Globe className="w-8 h-8 text-primary-500" />
  },
  {
    id: 2,
    title: "AI/ML Solutions",
    description: "Integrating intelligent features and machine learning models into existing products.",
    icon: <Zap className="w-8 h-8 text-primary-500" />
  },
  {
    id: 3,
    title: "Embedded Systems",
    description: "Designing and programming custom hardware solutions and IoT devices.",
    icon: <Cpu className="w-8 h-8 text-primary-500" />
  }
];
