import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Product Designer",
      company: "Airbnb",
      period: "2022 - Present",
      description: "Leading design for the Experiences platform, improving booking conversion by 40% through research-driven redesigns.",
    },
    {
      title: "Product Designer",
      company: "Spotify",
      period: "2019 - 2022",
      description: "Designed key features for the mobile app, including the personalized home feed that serves 400M+ users.",
    },
    {
      title: "UX Designer",
      company: "Stripe",
      period: "2017 - 2019",
      description: "Created design systems and components for the merchant dashboard, streamlining payment management workflows.",
    },
    {
      title: "Junior Designer",
      company: "IDEO",
      period: "2015 - 2017",
      description: "Collaborated on human-centered design projects for clients across healthcare, finance, and retail sectors.",
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-4">
            Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Where I've <span className="text-gradient">Worked</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1/2 z-10 glow-gold" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="card-gradient border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className="text-primary font-body text-sm">{exp.period}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gold-soft font-body text-sm mb-3">{exp.company}</p>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
