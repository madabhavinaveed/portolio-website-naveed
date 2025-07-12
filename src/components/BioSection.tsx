import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Coffee } from "lucide-react";

const BioSection = () => {
  return (
    <section id="bio" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Bio
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an accomplished Senior Software Developer with over 8 years of experience in front-end software
                development across diverse domains including <strong>Fintech, Blockchain, Healthcare, E-commerce, and IoT</strong>.
                Currently based in Nürnberg, Germany, I'm passionate about creating scalable and maintainable applications.
              </p>
              
              <p>
                Expert in working in Agile and Scrum environments, I actively participate in all agile ceremonies 
                from refinement and sprint planning to daily scrums and sprint reviews. I love drinking coffee <Coffee className="inline w-4 h-4 mx-1" /> 
                and building innovative solutions using modern JavaScript frameworks.
              </p>

              <p>
                My expertise spans across <strong>React.js, Vue.js, Angular.js, Node.js</strong>, and I have extensive experience 
                with cloud infrastructure (AWS), DevOps practices, and blockchain technologies including Web3 and smart contracts.
              </p>
              
              <p className="font-medium text-primary flex items-center gap-2">
                #SeniorDeveloper <Heart className="w-4 h-4 text-red-500" /> #Frontend #Blockchain #Agile
              </p>
              
              <p>
                I feel fortunate to have built a career spanning multiple cutting-edge technologies, from traditional 
                e-commerce platforms to revolutionary blockchain applications. I'm always eager to take on new challenges 
                and mentor fellow developers in their growth journey.
              </p>
              
              <p>
                Available immediately for new opportunities. Feel free to check out my professional journey and connect with me.
              </p>
            </div>

            <Button 
              className="gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 group"
              size="lg"
              asChild
            >
              <a href="https://www.linkedin.com/in/naveed-madabhavi-0888b22a5/" target="_blank" rel="noopener noreferrer">
                View LinkedIn Profile 
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Decorative Image/Illustration */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="section-card p-8 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <div className="text-4xl">💻</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    8+ Years Experience
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Frontend expertise across Fintech, Blockchain, Healthcare & E-commerce
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-elegant">
                <span className="text-lg">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;