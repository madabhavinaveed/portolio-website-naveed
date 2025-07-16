
import { ExternalLink, Star, Users, Clock, Award, Facebook, Instagram, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProfileCard from "./ProfileCard";
import PortfolioShowcase from "./PortfolioShowcase";
import ReviewsSection from "./ReviewsSection";

const FreelanceProfiles = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">


      {/* Platform Profiles */}
      <div className="grid md:grid-cols-2 gap-8">
        <ProfileCard
          platform="Upwork"
          platformColor="bg-green-500"
          profileUrl="https://www.upwork.com/freelancers/~your-profile"
          stats={[
            { icon: Star, label: "Rating", value: "5.0", color: "text-yellow-500" },
            { icon: Users, label: "Clients", value: "50+", color: "text-blue-500" },
            { icon: Clock, label: "Hours", value: "2000+", color: "text-green-500" }
          ]}
          description="Specialized in web development, UI/UX design, and digital marketing solutions."
        />
        
        <ProfileCard
          platform="Fiverr"
          platformColor="bg-green-400"
          profileUrl="https://www.fiverr.com/your-username"
          stats={[
            { icon: Star, label: "Rating", value: "4.9", color: "text-yellow-500" },
            { icon: Users, label: "Orders", value: "200+", color: "text-blue-500" },
            { icon: Award, label: "Level", value: "Pro", color: "text-purple-500" }
          ]}
          description="Offering premium design services, branding solutions, and custom development."
        />
      </div>

      {/* Social Media Success Section */}
      <div className="space-y-8">

        <div className="grid md:grid-cols-2 gap-8">
          {/* Facebook Page */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <Facebook className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Being Punekar</h3>
                    <Badge variant="secondary" className="mt-1 bg-blue-100 text-blue-700">Facebook Page</Badge>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors"
                  onClick={() => window.open("https://www.facebook.com/beingpunekra", "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Instagram Page */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                    <Instagram className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Being Punekar</h3>
                    <Badge variant="secondary" className="mt-1 bg-purple-100 text-purple-700">Instagram Page</Badge>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-purple-50 group-hover:border-purple-300 transition-colors"
                  onClick={() => window.open("https://www.instagram.com/beingpunekra", "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Portfolio Showcase */}
      {/* <PortfolioShowcase /> */}

      {/* Reviews Section */}
      {/* <ReviewsSection /> */}

      {/* CTA Section */}
      {/* <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-xl mb-8 opacity-90">
          Let's discuss your project and bring your vision to life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => window.open("https://www.upwork.com/freelancers/~your-profile", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Upwork Profile
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600"
            onClick={() => window.open("https://www.fiverr.com/your-username", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Fiverr Profile
          </Button>
        </div>
      </div> */}
    </div>
  );
};

export default FreelanceProfiles;
