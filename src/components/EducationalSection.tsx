import { BookOpen, Lightbulb, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const guides = [
  {
    icon: BookOpen,
    title: "Automated Keyword Research",
    description:
      "Use AI to discover high-value keywords by analyzing search patterns, competitor strategies, and semantic relationships. ChatGPT can generate hundreds of keyword variations in seconds.",
    prompt: "Example Prompt: 'Generate 20 long-tail keywords for [your topic] with different search intents'",
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Content Optimization",
    description:
      "Optimize existing content by analyzing top-ranking pages and implementing AI-suggested improvements for structure, keyword density, and readability.",
    prompt: "Example Prompt: 'Analyze this content and suggest SEO improvements for the keyword [target keyword]'",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics for SEO",
    description:
      "Leverage AI to predict content performance, identify trending topics before they peak, and allocate resources to high-ROI opportunities.",
    prompt: "Example Prompt: 'What are emerging trends in [your industry] that could drive organic traffic in 2025?'",
  },
  {
    icon: Zap,
    title: "Automated Meta Tag Generation",
    description:
      "Generate SEO-optimized title tags and meta descriptions at scale while maintaining brand voice and including target keywords naturally.",
    prompt: "Example Prompt: 'Write 5 compelling meta descriptions under 160 characters for [page topic] targeting [keyword]'",
  },
];

const caseStudies = [
  {
    metric: "300%",
    label: "Increase in Organic Traffic",
    description: "E-commerce site using AI for content optimization and keyword research",
  },
  {
    metric: "75%",
    label: "Time Saved on Content Creation",
    description: "Marketing agency leveraging AI tools for bulk content production",
  },
  {
    metric: "150%",
    label: "Improvement in Conversion Rate",
    description: "SaaS company optimizing landing pages with AI insights",
  },
];

export const EducationalSection = () => {
  return (
    <>
      {/* How AI Solves SEO Challenges */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              How AI Solves Modern SEO Challenges
            </h2>
            <p className="text-center text-muted-foreground text-lg">
              Transform your SEO workflow with proven AI strategies and techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-base leading-relaxed">
                      {guide.description}
                    </CardDescription>
                    <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                      <p className="text-sm font-mono text-muted-foreground">
                        {guide.prompt}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies & Results */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results from AI-Powered SEO
            </h2>
            <p className="text-muted-foreground text-lg">
              See how businesses are leveraging AI to achieve measurable SEO success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="text-center border-2">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary mb-2">
                    {study.metric}
                  </div>
                  <CardTitle className="text-xl">{study.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {study.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
