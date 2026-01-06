import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "SDET-II",
      company: "OLA",
      period: "02/2024 to 06/2025",
      description: "Primary owner of Pricing, Peak Pricing, Location Services, Signals, and Allocation Services at Ola.",
      highlights: [
        "Worked on debugging production issues, fixing them, and creating an RCA",
        "Led and managed the technical work and priorities for a team of five SDETs",
        "Implemented robust automation frameworks, reducing manual testing by 60%",
        "Increased test coverage from 75% to 95% through the creation of comprehensive automated test suites",
        "Performed manual and exploratory testing to identify critical issues",
        "Collaborated with development and product teams, and participated in code reviews",
        "Managed test cases, plans, and bug tracking in JIRA and ServiceNow",
        "Developed and implemented automated testing frameworks using TestNG and Java, enhancing test coverage and efficiency",
        "Led cross-functional teams in Agile environments to drive continuous integration and deployment practices, improving software quality",
        "Mentored junior developers in best practices for automated testing, fostering a culture of knowledge sharing and collaboration"
      ]
    },
    {
      title: "SDET-I",
      company: "OLA",
      period: "03/2020 to 01/2024",
      description: "Owned and automated testing for Pricing and Peak Pricing modules at Ola.",
      highlights: [
        "Developed and executed automated and manual test cases using Java, TestNG, RestAssured, and Postman",
        "Debugged and resolved production issues by analyzing logs, identifying defects, and ensuring post-fix stability through regression testing",
        "Reviewed new feature requirements and created detailed test plans and strategies to ensure full coverage",
        "Improved automation reliability by refactoring legacy test suites and integrating with Jenkins pipelines"
      ]
    },
    {
      title: "Support Engineer",
      company: "NestAway Technologies Pvt. Ltd.",
      period: "04/2018 to 02/2020",
      description: "Handled application-level troubleshooting and root cause analysis.",
      highlights: [
        "Supported backend system monitoring and issue triaging using SQL and internal tools"
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
