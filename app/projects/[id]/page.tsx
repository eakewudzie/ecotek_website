import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projectDetails } from "@/data/projects";
import { ProjectDetailsPageProps } from "@/interfaces";

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
    const { id } = await params;
    const project = projectDetails[id];

    if (!project) {
        notFound();
    }

    return (
        <div className="py-16 bg-slate-50 dark:bg-slate-900 min-h-screen">
            <div className="container px-4 md:px-6">
                {/* Back Button */}
                <div className="mb-8">
                    <Button variant="ghost" asChild>
                        <Link href="/projects" className="flex items-center space-x-2">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Projects</span>
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Project Image */}
                    <div className="space-y-4">
                        <div className="relative w-full h-96">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                                    {project.category}
                                </span>
                                <span className="text-sm text-gray-500">{project.status}</span>
                            </div>

                            <h1 className="text-4xl font-bold tracking-tighter">{project.title}</h1>

                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                {project.description}
                            </p>
                        </div>

                        {/* Project Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-5 w-5 text-gray-500" />
                                <div>
                                    <p className="text-sm text-gray-500">Completion Date</p>
                                    <p className="font-semibold">{project.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <MapPin className="h-5 w-5 text-gray-500" />
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-semibold">{project.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Building className="h-5 w-5 text-gray-500" />
                                <div>
                                    <p className="text-sm text-gray-500">Size</p>
                                    <p className="font-semibold">{project.size}</p>
                                </div>
                            </div>
                        </div>

                        {/* Long Description */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Project Overview</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {project.longDescription}
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <Button asChild size="lg">
                                <Link href="/projects">
                                    View All Projects
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 