import SiteNav from "@/components/SiteNav";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import LatelySection from "@/components/LatelySection";
import CoreSkillsSection from "@/components/CoreSkillsSection";
import SelectedProjectsSection from "@/components/SelectedProjectsSection";
import ShowcaseProjectsSection from "@/components/ShowcaseProjectsSection";
import IcoPlatformsSection from "@/components/IcoPlatformsSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="wrapper pb-8">
        <IntroSection />
        <AboutSection />
        <LatelySection />
        <CoreSkillsSection />
        <SelectedProjectsSection />
        <ShowcaseProjectsSection />
        <IcoPlatformsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
