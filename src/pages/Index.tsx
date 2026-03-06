import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
// import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PersonalProjectSection from "@/components/PersonalProjectSection";
import FooterSection from "@/components/FooterSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSectionDescription from "@/components/ProjectsSectionDescription";
// import GamesSection from "@/components/GamesSection";
import BooksSection from "@/components/BooksSection";
import ICOGallerySection from "@/components/ICOGallerySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BioSection />
      {/* <SkillsSection /> */}
      <ProjectsSectionDescription />
      <ProjectsSection />
      <ICOGallerySection />
      <SkillsSection />
      <PersonalProjectSection />
      <BooksSection />
      {/* <GamesSection /> */}
      <FooterSection />
    </div>
  );
};

export default Index;
