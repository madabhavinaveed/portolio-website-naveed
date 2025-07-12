import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="gradient-primary py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="section-card bg-white/10 backdrop-blur-md border-white/20 animate-fade-in">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">
            Let's Connect!
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Senior Software Developer with 8+ years of experience. Available immediately for new opportunities!
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/20 border-white/30 text-primary-foreground hover:bg-white/30 transition-smooth backdrop-blur-sm group"
              asChild
            >
              <a href="mailto:naveed.madabhavi786@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Email Me
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-white/20 border-white/30 text-primary-foreground hover:bg-white/30 transition-smooth backdrop-blur-sm group"
              asChild
            >
              <a href="https://github.com/naveed" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-white/20 border-white/30 text-primary-foreground hover:bg-white/30 transition-smooth backdrop-blur-sm group"
              asChild
            >
              <a href="https://www.linkedin.com/in/naveed-madabhavi-0888b22a5/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 my-8"></div>

          {/* Footer Text */}
          <div className="text-primary-foreground/80 space-y-2">
            <p className="flex items-center justify-center gap-2 text-sm">
              Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> and lots of coffee ☕
            </p>
            <p className="text-xs">
              © 2024 Naveed Madabhavi. All rights reserved.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-white/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </footer>
  );
};

export default FooterSection;