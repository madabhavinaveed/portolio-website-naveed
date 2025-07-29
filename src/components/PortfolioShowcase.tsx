import { ExternalLink, Eye, Code, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "Modern React-based e-commerce solution with payment integration",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    tags: ["React", "Node.js", "Stripe"],
    link: "#",
    icon: Code,
  },
  {
    title: "Brand Identity Design",
    category: "Design",
    description:
      "Complete brand identity package including logo, colors, and guidelines",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    tags: ["Branding", "Logo Design", "Guidelines"],
    link: "#",
    icon: Palette,
  },
  {
    title: "Mobile App UI/UX",
    category: "UI/UX Design",
    description:
      "Clean and intuitive mobile app interface for fitness tracking",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    tags: ["Mobile UI", "Figma", "User Research"],
    link: "#",
    icon: Eye,
  },
];

const PortfolioShowcase = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Featured Portfolio
        </h2> */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore some of my recent work and successful projects delivered
          through freelance platforms
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </div>
            </div>

            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="text-blue-600 border-blue-200"
                >
                  {item.category}
                </Badge>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full hover:bg-blue-50 hover:border-blue-300"
                onClick={() => window.open(item.link, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button
          size="lg"
          variant="outline"
          className="border-blue-200 text-blue-600 hover:bg-blue-50"
          onClick={() => window.open("#", "_blank")}
        >
          View Complete Portfolio
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
