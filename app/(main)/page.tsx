import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import GalleryGrid from "@/components/GalleryGrid";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";
import { stats, services, testimonials, achievements } from "@/data/homepage";
import {
  Building2,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Leaf,
  Shield,
  TrendingUp
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const serviceIcons = {
    "Architectural Design": Building2,
    "Project Management": Users,
    "Construction Oversight": Shield,
    "Sustainable Solutions": Leaf
  };

  return (
    <div className="min-h-screen">
      <HeroSection day="Tomorrow" />

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-slate-950 border-y">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IntroSection />

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From concept to completion, we provide comprehensive architectural and construction services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.title as keyof typeof serviceIcons];
              return (
                <div key={index} className="bg-white dark:bg-slate-950 rounded-lg border p-6 hover:shadow-lg transition-all group">
                  <div className="mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg inline-flex group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services" className="inline-flex items-center">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover some of our most innovative and successful architectural achievements
            </p>
          </div>

          <GalleryGrid projects={featuredProjects} />

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/portfolio" className="inline-flex items-center">
                View Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real experiences from satisfied clients who trusted us with their vision
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-slate-950 rounded-lg border p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</div>
                  <div className="text-xs text-primary mt-1">Project: {testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Choose Ecotek?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                We combine innovative design, sustainable practices, and exceptional craftsmanship
                to deliver architectural solutions that exceed expectations.
              </p>

              <div className="space-y-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/about" className="inline-flex items-center">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Get Consultation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600"
                alt="Modern architectural building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Leading Innovation in Architecture
              </h2>
              <p className="text-xl mb-8 opacity-90">
                We leverage cutting-edge technology and sustainable practices to create buildings
                that are not just beautiful, but smart, efficient, and environmentally responsible.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm font-medium">Smart Technology</div>
                </div>
                <div className="text-center">
                  <Leaf className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm font-medium">Eco-Friendly</div>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=600"
                alt="Innovation in architecture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white-950 text-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Vision?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss your project and explore how we can bring your architectural dreams to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact" className="inline-flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="default" className="">
                <Link href="/portfolio" className="inline-flex items-center">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
