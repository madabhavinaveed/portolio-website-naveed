
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup",
    platform: "Upwork",
    rating: 5,
    review: "Exceptional work quality and communication. Delivered the project ahead of schedule with outstanding attention to detail. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b3c5?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    platform: "Fiverr",
    rating: 5,
    review: "Professional, creative, and reliable. The branding package exceeded our expectations and helped us establish a strong visual identity.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    platform: "Upwork",
    rating: 5,
    review: "Amazing developer with great problem-solving skills. The web application was built exactly as specified with clean, maintainable code.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const ReviewsSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Client Reviews
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See what my clients say about working with me on various freelance platforms
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Badge 
                  variant={review.platform === "Upwork" ? "default" : "secondary"}
                  className={review.platform === "Upwork" ? "bg-green-500" : "bg-green-400"}
                >
                  {review.platform}
                </Badge>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                <p className="text-gray-600 italic leading-relaxed pl-6">
                  "{review.review}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-800">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-2xl font-bold text-gray-800">4.9/5.0</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Average Client Rating</h3>
        <p className="text-gray-600">Based on 250+ completed projects across all platforms</p>
      </div>
    </div>
  );
};

export default ReviewsSection;
