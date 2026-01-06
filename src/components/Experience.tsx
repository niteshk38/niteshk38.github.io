import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer - II",
      company: "OLA",
      period: "Feb 2024 - Jun 2025",
      description: "Primary owner of Pricing, Peak Pricing, Location, Signals, and Allocation Services. Led a 5-member team, designed scalable automation frameworks, and expanded test coverage from 75% to 95%.",
      highlights: [
        "Designed and implemented scalable automation frameworks (Java, TestNG) — reduced manual testing effort by 60%",
        "Debugged and resolved production issues, performed root cause analysis (RCA)",
        "Integrated testing within CI/CD pipelines using Jenkins",
        "Mentored junior engineers in automation best practices"
      ]
    },
    {
      title: "Software Engineer - I",
      company: "OLA",
      period: "Mar 2020 - Jan 2024",
      description: "Owned and automated test coverage for Pricing and Peak Pricing modules using Java, TestNG, RestAssured, and Postman.",
      highlights: [
        "Developed and executed automated and manual test cases",
        "Integrated automation with Jenkins pipelines, improving CI reliability"
      ]
    },
    {
      title: "Support Engineer",
      company: "NestAway Technologies Pvt. Ltd.",
      period: "Apr 2018 - Feb 2020",
      description: "Conducted manual and regression testing for production stability. Managed backend application monitoring and issue triaging.",
      highlights: [
        "Refactored legacy test scripts, reducing flakiness",
        "Performed root cause analysis using SQL and monitoring tools",
        "Collaborated with engineering teams to resolve production issues"
      ]
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
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-12 md:pl-20 mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 glow-gold" />

                {/* Content */}
                <div className="card-gradient border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="text-primary font-body text-sm">{exp.period}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gold-soft font-body text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-muted-foreground font-body text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
