export const projects = [
  {
    slug: "luxe-market",
    title: "Luxe Market",
    category: "E-Commerce",
    description: "Premium fashion e-commerce mobile app with AI-powered recommendations and seamless checkout experience.",
    image: "/projects/luxe-market.jpg",
    tags: ["Figma", "UI/UX", "Mobile App", "E-Commerce"],
    year: "2025",
    link: "#"
  },
  {
    slug: "lumen-ai",
    title: "Lumen AI",
    category: "FinTech",
    description: "AI-powered FinTech mobile app with smart analytics, real-time insights, and personalized financial guidance.",
    image: "/projects/lumen-ai.jpg",
    tags: ["Figma", "FinTech", "AI", "Mobile App"],
    year: "2025",
    link: "#"
  },
  {
    slug: "velora-motors",
    title: "Velora Motors",
    category: "Automotive",
    description: "Luxury automotive website with interactive 3D car viewer, test drive booking, and premium brand experience.",
    image: "/projects/velora-motors.jpg",
    tags: ["Figma", "Web Design", "Automotive", "UI/UX"],
    year: "2024",
    link: "#"
  },
  {
    slug: "fitsync-pro",
    title: "FitSync Pro",
    category: "Health & Fitness",
    description: "Complete AI fitness app with 22 screens, admin dashboard, workout tracking, and personalized fitness plans.",
    image: "/projects/fitsync-pro.jpg",
    tags: ["Figma", "Health Tech", "Mobile App", "Dashboard"],
    year: "2024",
    link: "#"
  },
  {
    slug: "fintrack",
    title: "FinTrack",
    category: "FinTech",
    description: "Personal finance management dashboard with budgeting tools, expense tracking, and investment insights.",
    image: "/projects/fintrack.jpg",
    tags: ["Figma", "FinTech", "Dashboard", "Web App"],
    year: "2024",
    link: "#"
  },
  {
    slug: "medicare-connect",
    title: "MediCare Connect",
    category: "Healthcare",
    description: "Healthcare platform connecting patients with doctors, appointment booking, and telemedicine features.",
    image: "/projects/medicare.jpg",
    tags: ["Figma", "Healthcare", "Web App", "UI/UX"],
    year: "2023",
    link: "#"
  }
];

export const projectsBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);