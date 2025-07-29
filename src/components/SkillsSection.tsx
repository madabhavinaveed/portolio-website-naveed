import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      skills: [
        "React.js",
        "Vue.js",
        "Angular.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "SCSS",
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        "Node.js",
        "GraphQL",
        "REST APIs",
        "RPC Calls",
        "Web3",
        "Smart Contracts",
      ],
    },
    {
      title: "Management Tools",
      skills: [
        "Trello",
        "Confluence",
        "Jira",
        "Azure DevOps",
        "GitHub",
        "Bitbucket",
      ],
    },
    {
      title: "Technologies & Platforms",
      skills: [
        "OpenCart",
        "Shopify",
        "WordPress",
        "AWS (EC2, S3, IAM)",
        "DevOps",
        "Linux",
      ],
    },
    {
      title: "Databases",
      skills: ["Oracle SQL Server", "MS SQL Server", "MongoDB", "MySQL"],
    },
    {
      title: "Libraries & Tools",
      skills: [
        "Redux",
        "Vuex",
        "React Native",
        "Ionic",
        "jQuery",
        "Webpack",
        "CodeAI",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            8+ years of expertise across diverse technology stacks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="shadow-card border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-card-foreground flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
