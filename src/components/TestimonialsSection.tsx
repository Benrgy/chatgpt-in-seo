import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The ChatGPT SEO toolkit has completely transformed our content strategy. We've seen a 250% increase in organic traffic within just 4 months. The AI-powered keyword research saves us countless hours.",
    author: "Sarah Mitchell",
    role: "SEO Director",
    company: "TechGrowth Marketing",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "As a small business owner, I was overwhelmed by SEO complexity. These AI tools made it accessible and actionable. My website now ranks on page 1 for multiple competitive keywords.",
    author: "Michael Chen",
    role: "Founder & CEO",
    company: "E-commerce Solutions Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote:
      "The AI video creation tools have been a game-changer for our content marketing. We produce 10x more video content with half the resources, and our engagement rates have skyrocketed.",
    author: "Jessica Rodriguez",
    role: "Content Marketing Manager",
    company: "Digital Media Agency",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "The automation tools reduced our ad costs by 40% while doubling our ROI. The AI handles the heavy lifting so we can focus on strategy and creative development.",
    author: "David Thompson",
    role: "Marketing Automation Lead",
    company: "SaaS Innovations Ltd",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "I've tried multiple SEO tools over the years, but the AI-powered solutions in this directory are on another level. The insights and recommendations are remarkably accurate and actionable.",
    author: "Emily Watson",
    role: "Freelance SEO Consultant",
    company: "Independent Consultant",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Our blog revenue increased by 180% after implementing the AI monetization strategies. The tools help us identify high-value topics and optimize for both traffic and conversions.",
    author: "James Anderson",
    role: "Blog Monetization Specialist",
    company: "Content Empire Network",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by SEO Professionals Worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            See what industry experts are saying about our AI-powered SEO tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
