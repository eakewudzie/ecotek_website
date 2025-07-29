import { Project, ProjectDetails } from "@/interfaces";

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   category: string;
//   date: string;
//   location: string;
// }

export const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Modern Office Complex",
    description:
      "A state-of-the-art office building featuring sustainable design principles and cutting-edge technology integration.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    category: "Commercial",
    date: "2024",
    location: "Downtown Metro",
  },
  {
    id: "2",
    title: "Luxury Residential Tower",
    description:
      "Premium residential development with panoramic city views and world-class amenities.",
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    category: "Residential",
    date: "2023",
    location: "Uptown District",
  },
  {
    id: "3",
    title: "Industrial Warehouse",
    description:
      "Large-scale industrial facility designed for maximum efficiency and operational excellence.",
    imageUrl:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    category: "Industrial",
    date: "2023",
    location: "Industrial Zone",
  },
  {
    id: "4",
    title: "Shopping Center",
    description:
      "Modern retail complex with integrated parking and pedestrian-friendly design.",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    category: "Commercial",
    date: "2022",
    location: "Suburban Mall",
  },
  {
    id: "5",
    title: "Mixed-Use Development",
    description:
      "Innovative mixed-use project combining residential, commercial, and recreational spaces.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    category: "Mixed-Use",
    date: "2022",
    location: "City Center",
  },
  {
    id: "6",
    title: "Healthcare Facility",
    description:
      "Advanced medical center designed for patient comfort and operational efficiency.",
    imageUrl:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop",
    category: "Healthcare",
    date: "2021",
    location: "Medical District",
  },
];

export const featuredProjects: Project[] = [
  sampleProjects[0],
  sampleProjects[1],
  sampleProjects[2],
];

export const projectDetails: Record<string, ProjectDetails> = {
  "1": {
    id: "1",
    title: "Modern Office Complex",
    description:
      "A state-of-the-art office building featuring sustainable design principles and cutting-edge technology integration. This project showcases our commitment to creating workspaces that prioritize both functionality and environmental responsibility.",
    longDescription:
      "The Modern Office Complex represents a breakthrough in sustainable commercial architecture. Spanning over 50,000 square feet, this LEED-certified building incorporates advanced energy management systems, natural lighting optimization, and green building materials throughout. The design emphasizes collaborative workspaces while maintaining individual productivity zones, creating an environment that fosters innovation and employee well-being.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    category: "Commercial",
    date: "2024",
    location: "Downtown Metro",
    size: "50,000 sq ft",
    status: "Completed",
  },
};
