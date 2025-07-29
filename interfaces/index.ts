export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  location: string;
}

export interface ProjectDetails extends Project {
  longDescription: string;
  size: string;
  status: string;
}

export interface GalleryGridProps {
  projects: Project[];
}

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  location: string;
}

export interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
