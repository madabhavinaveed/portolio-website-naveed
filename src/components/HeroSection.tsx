import { Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('bio');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Profile Photo */}
        <div className="mb-8 animate-bounce-in">
          <div className="profile-border inline-block">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="section-card max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
            ¡HOLA! I'M <span className="bg-gradient-primary bg-clip-text text-transparent">NAVEED</span> & I LOVE TO CODE!
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Senior Software Developer with 8+ years of experience in Frontend Development across Fintech, Blockchain, Healthcare & E-commerce.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:border-primary hover:bg-primary/10 transition-smooth group"
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
              className="border-primary/20 hover:border-primary hover:bg-primary/10 transition-smooth group"
              asChild
            >
              <a href="https://www.linkedin.com/in/naveed-madabhavi-0888b22a5/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-smooth animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;