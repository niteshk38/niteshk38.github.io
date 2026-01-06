const About = () => {
  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "95%", label: "Test Coverage" },
    { value: "60%", label: "Reduced Manual Testing" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-4">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Engineering{" "}
              <span className="text-gradient">Quality</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Software testing professional with significant experience in developing and implementing 
                comprehensive test plans and automation strategies. Known for strong focus on team 
                collaboration and achieving consistent results, adapting seamlessly to changing 
                project requirements.
              </p>
              <p>
                Expertise in test automation, quality assurance, and problem-solving, bringing 
                reliability and accuracy to software development projects.
              </p>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="card-gradient border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors duration-300"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-body text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
