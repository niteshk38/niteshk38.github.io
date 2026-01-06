import { Palette, Code, Users, Lightbulb, PenTool, BarChart } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Visual Design",
      description: "Creating stunning interfaces with meticulous attention to typography, color, and spacing.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Research",
      description: "Conducting interviews, surveys, and usability tests to deeply understand user needs.",
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Prototyping",
      description: "Building interactive prototypes in Figma to validate concepts before development.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Design Systems",
      description: "Architecting scalable component libraries that ensure consistency across products.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Product Strategy",
      description: "Aligning design decisions with business objectives and user value propositions.",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Data Analysis",
      description: "Leveraging analytics and metrics to inform design iterations and measure impact.",
    },
  ];

  const tools = ["Figma", "Framer", "Adobe CC", "Notion", "Miro", "Principle", "Webflow", "React"];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-4">
            Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What I <span className="text-gradient">Do Best</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group card-gradient border border-border/50 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="px-6 py-3 rounded-full border border-border bg-secondary/50 text-secondary-foreground font-body text-sm hover:border-primary/50 hover:text-primary transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
