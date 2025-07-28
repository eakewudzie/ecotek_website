export default function IntroSection() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-950">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Ecotek
            </h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              With over a decade of experience in construction and architectural design,
              Ecotek has established itself as a leader in innovative building solutions.
              Our team combines technical expertise with creative vision to deliver
              exceptional results that exceed expectations.
            </p>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              We specialize in commercial, residential, and industrial projects,
              always prioritizing sustainability, quality, and client satisfaction
              in every project we undertake.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border p-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">10+</span>
                </div>
                <div>
                  <h3 className="font-semibold">Years of Experience</h3>
                  <p className="text-sm text-gray-500">Delivering excellence since 2014</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border p-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">200+</span>
                </div>
                <div>
                  <h3 className="font-semibold">Projects Completed</h3>
                  <p className="text-sm text-gray-500">Successfully delivered projects</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border p-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">100%</span>
                </div>
                <div>
                  <h3 className="font-semibold">Client Satisfaction</h3>
                  <p className="text-sm text-gray-500">Exceeding expectations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 