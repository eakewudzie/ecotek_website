import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection({ day }: { day: string }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Building {day}&apos;s
              <span className="text-primary"> Architecture</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Ecotek specializes in innovative construction solutions, bringing architectural visions to life with precision engineering and sustainable practices.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View Our Projects
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
    </section>
  );
} 