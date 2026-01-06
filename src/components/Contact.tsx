import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-body text-sm tracking-widest uppercase mb-4">
              Contact
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="card-gradient border border-border/50 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:alex@example.com" 
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Email</p>
                    <p className="font-body text-foreground">alex@example.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Location</p>
                    <p className="font-body text-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-body text-sm text-muted-foreground mb-4">Follow me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative card-gradient border border-primary/30 rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Ready to start a project?
                </h3>
                <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                  Whether you have a detailed brief or just an idea, I'd love to 
                  hear from you. Let's create something amazing together.
                </p>
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <a href="mailto:alex@example.com">
                    Send Me a Message
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
