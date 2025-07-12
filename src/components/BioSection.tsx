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
                I am a passionate full-stack developer who loves creating beautiful, functional web applications. 
                Besides developing awesome stuff, I love spending time exploring new technologies, traveling, 
                and anything that is tech-related.
              </p>
              
              <p>
                I enjoy drinking coffee <Coffee className="inline w-4 h-4 mx-1" /> and building things that make a difference. 
                I have a soft spot for clean code, modern frameworks, and innovative solutions that solve real-world problems.
              </p>
              
              <p className="font-medium text-primary flex items-center gap-2">
                #developer <Heart className="w-4 h-4 text-red-500" /> #creative #geek🤓
              </p>
              
              <p>
                I feel fortunate and grateful to say that I have finally found a career and community 
                that I'm super excited to be a part of. I love what I do and hope to be able to keep 
                on learning and growing as a professional developer.
              </p>
              
              <p>
                If you are interested in my professional journey, feel free to check out my CV.
              </p>
            </div>

            <Button 
              className="gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 group"
              size="lg"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                View CV 
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
                    Always Learning
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Passionate about new technologies and continuous improvement
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