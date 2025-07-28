import GalleryGrid from "@/components/GalleryGrid";
import { sampleProjects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="py-16 bg-slate-50 dark:bg-slate-900">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                        Our Projects
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Explore our portfolio of innovative construction projects that showcase our expertise in architectural design and sustainable building practices.
                    </p>
                </div>

                <GalleryGrid projects={sampleProjects} />
            </div>
        </div>
    );
} 