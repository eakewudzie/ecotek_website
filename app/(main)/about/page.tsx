import { Award, Clock, Target, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: "Precision",
            description: "Every detail matters. We bring precision and attention to detail in every project we undertake."
        },
        {
            icon: Award,
            title: "Excellence",
            description: "Committed to delivering exceptional quality that exceeds expectations and stands the test of time."
        },
        {
            icon: Clock,
            title: "Reliability",
            description: "On-time delivery and dependable service you can count on throughout your project journey."
        },
        {
            icon: Heart,
            title: "Passion",
            description: "Driven by passion for creating spaces that inspire and enhance the way people live and work."
        }
    ];

    const stats = [
        { number: "150+", label: "Projects Completed" },
        { number: "12+", label: "Years Experience" },
        { number: "50+", label: "Happy Clients" },
        { number: "8", label: "Team Members" }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6">About Ecotek</h1>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                                    We are a forward-thinking architectural firm dedicated to creating sustainable,
                                    innovative, and beautiful spaces that enhance communities and respect the environment.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative h-96 rounded-lg overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=600"
                                    alt="Modern architectural office"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
                        <div className="prose prose-lg mx-auto dark:prose-invert">
                            <p>
                                Founded in 2012, Ecotek emerged from a vision to revolutionize the architectural landscape
                                through sustainable design and innovative construction practices. Our journey began with a
                                simple belief: that beautiful, functional spaces should coexist harmoniously with the environment.
                            </p>
                            <p>
                                Over the years, we&apos;ve grown from a small team of passionate architects to a comprehensive
                                design and construction firm. Our portfolio spans residential, commercial, and public projects,
                                each reflecting our commitment to excellence, sustainability, and human-centered design.
                            </p>
                            <p>
                                Today, we continue to push boundaries, embracing new technologies and sustainable practices
                                to create spaces that not only meet today&apos;s needs but anticipate tomorrow&apos;s challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div key={index} className="text-center">
                                        <div className="mb-4 flex justify-center">
                                            <Icon className="h-12 w-12 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                            A diverse group of architects, engineers, and designers working together to create extraordinary spaces.
                        </p>
                        <div className="bg-white dark:bg-slate-950 rounded-lg border p-8">
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Our team profiles and detailed information will be available soon.
                                We&apos;re excited to share more about the talented individuals who make Ecotek possible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}