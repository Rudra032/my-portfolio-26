export interface Project {
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Hotwire Global – AI Business Data Platform",
    subtitle: "AI-Driven Business Intelligence",
    description:
      "Developed a data-centric AI platform enabling businesses to analyze, structure, and visualize large-scale datasets for smarter decision-making.",
    achievements: [
      "Implemented AI-assisted data processing pipelines for faster business insights",
      "Built dynamic dashboards and analytics visualizations using Apache Charts",
      "Optimized API data fetching with RTK Query for real-time performance",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "RTK Query",
      "ShadCN UI",
      "Apache ECharts",
      "AI Integrations",
    ],
  },

  {
    title: "Renew – Renewable Energy Bidding Portal",
    subtitle: "Enterprise Bidding & Auction System",
    description:
      "Created a secure bidding portal for renewable energy companies to manage tenders, bids, and vendor interactions with real-time updates.",
    achievements: [
      "Designed scalable bidding workflows with live data synchronization",
      "Implemented complex data tables with filtering, sorting, and pagination",
      "Enhanced UX with modular UI components and responsive layouts",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "ShadCN UI",
      "RTK Query",
      "TanStack Table",
      "REST APIs",
    ],
  },

  {
    title: "Unilever Workflow Tool – Chrome Extension",
    subtitle: "Digital Adoption & User Guidance Platform",
    description:
      "Built a Chrome browser extension that guides users through enterprise web workflows using Digital Adoption Platform (DAP) concepts and contextual step-by-step assistance.",
    achievements: [
      "Implemented interactive spotlights and walkthroughs using Walktour",
      "Reduced navigation errors with contextual prompts and hints",
      "Improved task completion rates through real-time DOM-based guidance",
    ],
    technologies: [
      "Chrome Extension API",
      "JavaScript",
      "Walktour",
      "DOM Manipulation",
      "User Guidance Systems",
      "Browser APIs",
    ],
  },

  {
    title: "Kawada AI RAG Platform",
    subtitle: "AI Document Intelligence System",
    description:
      "Engineered an AI-powered Retrieval-Augmented Generation (RAG) platform for document comparison, grammar checking, summarization, and AI-based learning.",
    achievements: [
      "Integrated Server-Sent Events (SSE) for real-time AI streaming responses",
      "Built document comparison and summarization pipelines",
      "Implemented push notifications using Firebase for AI task updates",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "RTK Query",
      "ShadCN UI",
      "Firebase",
      "SSE",
      "AI APIs",
    ],
  },

  {
    title: "Mdaddy Quiz Application",
    subtitle: "Interactive Quiz & Analytics Platform",
    description:
      "Developed a dynamic quiz application featuring real-time scoring, analytics dashboards, and responsive UI for seamless user interaction.",
    achievements: [
      "Implemented real-time quiz evaluation with API-driven architecture",
      "Built analytics dashboards using Apache ECharts",
      "Optimized state management and caching with RTK Query",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "RTK Query",
      "ShadCN UI",
      "Apache ECharts",
      "REST APIs",
    ],
  },

  {
    title: "Artpark Drone Website",
    subtitle: "Product & CMS-Driven Marketing Website",
    description:
      "Created a high-performance marketing website for drone technology products with CMS-driven content management and responsive UI.",
    achievements: [
      "Integrated Strapi CMS for dynamic content management",
      "Implemented optimized image handling and SEO-friendly routing",
      "Delivered a fully responsive and performance-optimized UI",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Strapi CMS",
      "SEO Optimization",
    ],
  },
];
