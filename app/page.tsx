import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import GalleryGrid from "@/components/GalleryGrid";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />

      {/* Featured Projects Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover some of our most innovative and successful construction projects.
            </p>
          </div>

          <GalleryGrid projects={featuredProjects} />

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
