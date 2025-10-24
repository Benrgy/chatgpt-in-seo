import { Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ToolCardProps {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  ctaText: string;
  ctaLink: string;
  rating: number;
}

export const ToolCard = ({
  title,
  description,
  category,
  categoryColor,
  ctaText,
  ctaLink,
  rating,
}: ToolCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative">
      <Badge className={`absolute top-4 right-4 ${categoryColor}`}>
        {category}
      </Badge>
      <CardHeader>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">
            {rating}.0
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-6">{description}</CardDescription>
        <Button asChild className="w-full" size="lg">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            itemProp="url"
          >
            {ctaText}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
