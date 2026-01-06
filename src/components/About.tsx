const About = () => {
  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
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
              Designing with{" "}
              <span className="text-gradient">Purpose</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                I'm a product designer with over 8 years of experience creating 
                digital products that balance business goals with user needs. 
                My approach combines strategic thinking with meticulous attention 
                to craft.
              </p>
              <p>
                Previously, I've had the privilege of working with innovative 
                startups and Fortune 500 companies, including Airbnb, Spotify, 
                and several Y Combinator-backed ventures.
              </p>
              <p>
                When I'm not pushing pixels, you'll find me exploring hiking 
                trails, experimenting with film photography, or mentoring 
                aspiring designers.
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
