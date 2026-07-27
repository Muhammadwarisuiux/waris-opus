export const projects = [
  {
    slug: "luxe-market",
    title: "Luxe Market",
    category: "E-Commerce",
    description: "Premium fashion e-commerce mobile app with AI-powered recommendations.",
    image: "https://placehold.co/800x600/1a1a1a/FFFFFF?text=Luxe+Market",
    tags: ["Figma", "UI/UX", "Mobile App", "E-Commerce"],
    year: "2025",
    link: "#"
  },
  {
    slug: "lumen-ai",
    title: "Lumen AI",
    category: "FinTech",
    description: "AI-powered FinTech mobile app with smart analytics, real-time insights.",
    image: "https://placehold.co/800x600/0B0F1F/FFFFFF?text=Lumen+AI",
    tags: ["Figma", "FinTech", "AI", "Mobile App"],
    year: "2025",
    link: "#"
  },
  {
    slug: "velora-motors",
    title: "Velora Motors",
    category: "Automotive",
    description: "Luxury automotive website with interactive 3D car viewer.",
    image: "https://placehold.co/800x600/111111/FFFFFF?text=Velora+Motors",
    tags: ["Figma", "Web Design", "Automotive", "UI/UX"],
    year: "2024",
    link: "#"
  },
  {
    slug: "fitsync-pro",
    title: "FitSync Pro",
    category: "Health & Fitness",
    description: "Complete AI fitness app with 22 screens, admin dashboard.",
    image: "https://placehold.co/800x600/0A1512/FFFFFF?text=FitSync+Pro",
    tags: ["Figma", "Health Tech", "Mobile App", "Dashboard"],
    year: "2024",
    link: "#"
  },
  {
    slug: "fintrack",
    title: "FinTrack",
    category: "FinTech",
    description: "Personal finance management dashboard with budgeting tools.",
    image: "https://placehold.co/800x600/0B1D2A/FFFFFF?text=FinTrack",
    tags: ["Figma", "FinTech", "Dashboard", "Web App"],
    year: "2024",
    link: "#"
  },
  {
    slug: "medicare-connect",
    title: "MediCare Connect",
    category: "Healthcare",
    description: "Healthcare platform connecting patients with doctors.",
    image: "https://placehold.co/800x600/0A1919/FFFFFF?text=MediCare",
    tags: ["Figma", "Healthcare", "Web App", "UI/UX"],
    year: "2023",
    link: "#"
  }
];

export const projectsBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);