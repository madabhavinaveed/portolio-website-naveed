import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
// import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PersonalProjectSection from "@/components/PersonalProjectSection";
import FooterSection from "@/components/FooterSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BioSection />
      {/* <SkillsSection /> */}
      <ProjectsSection />
      <SkillsSection />
      <PersonalProjectSection />
      <FooterSection />
    </div>
  );
};

export default Index;
