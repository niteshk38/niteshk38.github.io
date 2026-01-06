import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/10 rounded-full" />
      </div>

      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="animate-fade-up text-muted-foreground font-body text-lg md:text-xl mb-4 tracking-wide">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="animate-fade-up animate-delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Alex </span>
            <span className="text-gradient">Morgan</span>
          </h1>

          {/* Title */}
          <p className="animate-fade-up animate-delay-200 font-body text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
            Senior Product Designer
          </p>

          {/* Description */}
          <p className="animate-fade-up animate-delay-300 font-body text-muted-foreground max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
            Crafting meaningful digital experiences through thoughtful design. 
            Based in San Francisco, I help companies build products that people love.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up animate-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" onClick={scrollToAbout}>
              Explore My Work
            </Button>
            <Button variant="gold-outline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-500">
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-sm font-body tracking-wider uppercase">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
