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
  const badgeVariant = categoryColor === "primary" ? "default" : 
                       categoryColor === "secondary" ? "secondary" : 
                       "outline";
  
  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative"
      itemScope 
      itemType="https://schema.org/SoftwareApplication"
    >
      <Badge variant={badgeVariant} className="absolute top-4 right-4">
        {category}
      </Badge>
      <CardHeader>
        <CardTitle className="text-xl mb-2" itemProp="name">{title}</CardTitle>
        <div className="flex items-center gap-1 mb-2" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content={rating.toString()} />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground/30"
              }`}
              aria-hidden="true"
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">
            {rating}.0
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-6" itemProp="description">{description}</CardDescription>
        <Button asChild className="w-full" size="lg">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            itemProp="url"
            aria-label={`Visit ${title} - ${ctaText}`}
          >
            {ctaText}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
