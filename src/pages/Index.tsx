import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
// import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PersonalProjectSection from "@/components/PersonalProjectSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BioSection />
      {/* <SkillsSection /> */}
      <ProjectsSection />
      <PersonalProjectSection />
      <FooterSection />
    </div>
  );
};

export default Index;
