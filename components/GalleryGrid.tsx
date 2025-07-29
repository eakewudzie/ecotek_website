import ProjectCard from "./ProjectCard";
import { GalleryGridProps } from "@/interfaces";

export default function GalleryGrid({ projects }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {projects.map((project) => (
        <div key={project.id} className="w-full max-w-sm">
          <ProjectCard
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            category={project.category}
            date={project.date}
            location={project.location}
          />
        </div>
      ))}
    </div>
  );
} 