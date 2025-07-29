import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Coffee } from "lucide-react";

const BioSection = () => {
  return (
    <section id="bio" className="py-20 px-6 bg-background red-section">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1fr_auto] gap-12  items-center justify-center text-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-6">Bio</h2>

            <div
              className="space-y-4 text-white leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              <p>
                I’m an Indian developer who recently moved to Germany, and I’m
                beyond excited to be shaping my career here. Programming has
                always been my passion, and I’m dedicated to writing clean,
                efficient code that not only solves problems but also stands the
                test of time.
              </p>

              <p>
                Beyond coding, I love to travel, read, and immerse myself in the
                tech community. Whether it's attending meet-ups or staying
                current with the latest trends at conferences, I’m constantly
                learning and evolving. Weekends are often spent with friends,
                enjoying coffee, exploring new places, or diving into the latest
                tech advancements.
              </p>

              <p>
                I also have a special place in my heart for kids and believe
                that tech can play a big role in education and social impact.
                It's incredible how, even from the comfort of our own homes, we
                as developers can contribute to creating a positive difference
                in society.
              </p>

              <p>
                I feel truly fortunate to be part of a community that is not
                only passionate about technology but also focused on making
                meaningful contributions to the world. I’m excited to continue
                learning and growing while striving to make a lasting impact.
              </p>

              <p>
                If you’d like to learn more about my professional journey, feel
                free to check out my CV!
              </p>
            </div>

            <Button
              className=" text-primary-foreground hover:shadow-glow transition-all duration-300 group mx-auto"
              size="lg"
              asChild
              style={{ alignContent: "right" }}
            >
              <a
                href="https://www.linkedin.com/in/naveed-madabhavi-0888b22a5/"
                className="text-muted-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn Profile
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Decorative Image/Illustration */}
          <div
            className="animate-scale-in flex justify-center"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Place your image or illustration here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
