import { ExternalLink, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

interface ProfileCardProps {
  platform: string;
  platformColor: string;
  profileUrl: string;
  stats: Stat[];
  description: string;
}

const ProfileCard = ({
  platform,
  platformColor,
  profileUrl,
  stats,
  description,
}: ProfileCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 ${platformColor} rounded-lg flex items-center justify-center text-white font-bold text-lg`}
            >
              {platform[0]}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{platform}</h3>
              {/* <Badge variant="secondary" className="mt-1">Professional Profile</Badge> */}
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors"
            onClick={() => window.open(profileUrl, "_blank")}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProfileCard;
