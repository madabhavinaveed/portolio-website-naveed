import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BioSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
