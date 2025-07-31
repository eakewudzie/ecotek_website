import { Building2, Hammer, Ruler, Shield, Lightbulb, Users } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            icon: Building2,
            title: "Architectural Design",
            description: "Complete architectural design services from concept to construction documents, ensuring your vision becomes reality."
        },
        {
            icon: Hammer,
            title: "Construction Management",
            description: "Professional construction oversight ensuring quality, timeline adherence, and budget control throughout your project."
        },
        {
            icon: Ruler,
            title: "Planning & Development",
            description: "Strategic planning and development services to maximize your property&apos;s potential while meeting regulatory requirements."
        },
        {
            icon: Shield,
            title: "Project Consultation",
            description: "Expert consultation services providing technical guidance and feasibility analysis for your construction projects."
        },
        {
            icon: Lightbulb,
            title: "Sustainable Design",
            description: "Eco-friendly and sustainable design solutions that reduce environmental impact while maximizing energy efficiency."
        },
        {
            icon: Users,
            title: "Team Coordination",
            description: "Seamless coordination between architects, engineers, contractors, and stakeholders for successful project delivery."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Comprehensive architectural and construction services tailored to bring your vision to life
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-white dark:bg-slate-950 rounded-lg border p-8 hover:shadow-lg transition-shadow">
                                    <div className="mb-4">
                                        <Icon className="h-12 w-12 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let&apos;s discuss how we can bring your architectural vision to reality
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}