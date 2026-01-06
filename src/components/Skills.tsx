import { Code, TestTube, Database, GitBranch, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Testing & QA",
      skills: ["Test Automation", "Functional Testing", "Regression Testing", "API Testing", "TestNG", "JUnit", "Selenium", "Cypress", "Playwright"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      skills: ["Java", "Python", "OOPs", "Data Structures & Algorithms"],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Automation Tools",
      skills: ["Selenium WebDriver", "RestAssured", "Postman", "Maven", "Jenkins", "Git", "Docker"],
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Frameworks",
      skills: ["Hybrid", "POM (Page Object Model)", "BDD (Cucumber)", "TestNG Framework"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "CI/CD & DevOps",
      skills: ["Jenkins", "GitHub Actions", "Docker", "AWS (EC2, S3)"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Redis", "ScyllaDB"],
    },
  ];

  const otherSkills = ["Agile/Scrum", "SDLC/STLC", "API Automation", "Jira", "Confluence"];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-4">
            Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group card-gradient border border-border/50 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground font-body text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-8">
            Other Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 rounded-full border border-border bg-secondary/50 text-secondary-foreground font-body text-sm hover:border-primary/50 hover:text-primary transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
