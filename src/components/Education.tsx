import { GraduationCap, Globe, Camera, Bike, Bot } from "lucide-react";

const Education = () => {
  const languages = [
    { name: "English", level: "Native or Bilingual Proficiency" },
    { name: "Hindi", level: "Native or Bilingual Proficiency" },
  ];

  const interests = [
    { icon: <Camera className="w-5 h-5" />, name: "Photography" },
    { icon: <Bike className="w-5 h-5" />, name: "Motorcycling" },
    { icon: <Bot className="w-5 h-5" />, name: "Robotics" },
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-4">
              Background
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Education & <span className="text-gradient">More</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Education */}
            <div className="card-gradient border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Education
              </h3>
              <p className="text-gold-soft font-body text-sm mb-1">
                B.Tech Computer Science Engineering
              </p>
              <p className="text-muted-foreground font-body text-sm mb-1">
                Christ University, Bengaluru
              </p>
              <p className="text-muted-foreground font-body text-xs">
                April 2018
              </p>
            </div>

            {/* Languages */}
            <div className="card-gradient border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <p className="text-foreground font-body text-sm">{lang.name}</p>
                    <p className="text-muted-foreground font-body text-xs">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="card-gradient border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Interests
              </h3>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                    <span className="text-primary">{interest.icon}</span>
                    <span className="font-body text-sm">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
