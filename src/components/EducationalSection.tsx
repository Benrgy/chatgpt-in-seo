import { BookOpen, Lightbulb, TrendingUp, Zap, Bot, Search, MessageSquare, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const guides = [
  {
    icon: Bot,
    title: "AI Overview & SGE Optimization",
    description:
      "In 2026, Google's AI Overview dominates search results. Optimize your content to appear in AI-generated answers by creating comprehensive, well-structured content that directly answers user questions with authoritative sources.",
    prompt: "Example Prompt: 'Rewrite this content to be featured in Google AI Overview for the query [search query]'",
    isNew: true,
  },
  {
    icon: Search,
    title: "Zero-Click SEO Strategy",
    description:
      "With 65% of searches ending without a click in 2026, optimize for featured snippets, knowledge panels, and AI summaries. Focus on brand visibility and direct answers that establish authority.",
    prompt: "Example Prompt: 'Create a featured snippet-optimized answer for [question] in under 50 words'",
    isNew: true,
  },
  {
    icon: MessageSquare,
    title: "Conversational Search Optimization",
    description:
      "Voice search and AI assistants like ChatGPT, Claude, and Gemini are now primary search interfaces. Optimize for natural language queries and conversational intent patterns.",
    prompt: "Example Prompt: 'Generate 10 conversational search queries people might ask about [topic]'",
    isNew: true,
  },
  {
    icon: Eye,
    title: "Multimodal AI Content Creation",
    description:
      "2026 SEO requires text, image, and video optimization. Use AI to create cohesive multimodal content that ranks across Google Search, Images, Video, and AI Overview simultaneously.",
    prompt: "Example Prompt: 'Create a content brief for [topic] optimized for text, image alt tags, and video SEO'",
    isNew: true,
  },
  {
    icon: BookOpen,
    title: "E-E-A-T & Author Authority Building",
    description:
      "Experience, Expertise, Authoritativeness, and Trustworthiness are critical in 2026. AI helps build author profiles, generate expert credentials, and create content that demonstrates first-hand experience.",
    prompt: "Example Prompt: 'Suggest ways to demonstrate E-E-A-T for [topic] based on my experience as [role]'",
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Content Gap Analysis",
    description:
      "Use AI to analyze competitor content, identify gaps in your coverage, and discover untapped keyword opportunities that align with 2026 search intent patterns.",
    prompt: "Example Prompt: 'Analyze the top 10 ranking pages for [keyword] and identify content gaps I can fill'",
  },
  {
    icon: TrendingUp,
    title: "Predictive SEO with AI Agents",
    description:
      "AI agents in 2026 can autonomously monitor rankings, predict algorithm changes, and suggest proactive optimizations before traffic drops occur.",
    prompt: "Example Prompt: 'Based on recent Google updates, predict which content types will perform best for [niche] in Q2 2026'",
  },
  {
    icon: Zap,
    title: "Automated Technical SEO Audits",
    description:
      "AI-powered tools now handle Core Web Vitals optimization, schema markup generation, and crawl budget optimization automatically, freeing you to focus on content strategy.",
    prompt: "Example Prompt: 'Generate JSON-LD schema markup for [page type] including FAQ, HowTo, and Article schemas'",
  },
];

const trends2026 = [
  {
    title: "AI Overview Dominance",
    description: "Google's AI Overview now appears in 80% of informational queries, fundamentally changing how content is discovered and consumed.",
    impact: "High Impact",
  },
  {
    title: "LLM Citation SEO",
    description: "Getting cited by ChatGPT, Claude, Perplexity, and other LLMs is the new link building. Authoritative, well-structured content gets referenced.",
    impact: "Critical",
  },
  {
    title: "Voice-First Indexing",
    description: "With smart speakers and AI assistants mainstream, conversational content optimization is essential for visibility.",
    impact: "Growing",
  },
  {
    title: "AI Content Detection Balance",
    description: "Google rewards AI-assisted content that adds value while penalizing purely AI-generated spam. Human expertise remains essential.",
    impact: "Moderate",
  },
];

const caseStudies = [
  {
    metric: "400%",
    label: "AI Overview Appearances",
    description: "B2B SaaS company optimizing for Google's AI-generated summaries in 2026",
  },
  {
    metric: "85%",
    label: "Time Saved with AI Agents",
    description: "Enterprise team using autonomous AI for content production and optimization",
  },
  {
    metric: "200%",
    label: "LLM Citation Growth",
    description: "Authority site appearing in ChatGPT and Perplexity responses consistently",
  },
];

export const EducationalSection = () => {
  return (
    <>
      {/* 2026 SEO Trends */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">2026 Trends</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SEO in 2026: The AI-First Search Landscape
            </h2>
            <p className="text-muted-foreground text-lg">
              Search has fundamentally changed. Here's what matters for SEO success in 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trends2026.map((trend, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-2">
                  <Badge variant={trend.impact === "Critical" ? "destructive" : trend.impact === "High Impact" ? "default" : "secondary"} className="w-fit mb-2">
                    {trend.impact}
                  </Badge>
                  <CardTitle className="text-lg">{trend.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {trend.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Solves SEO Challenges */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              AI-Powered SEO Strategies for 2026
            </h2>
            <p className="text-center text-muted-foreground text-lg">
              Master the latest AI techniques to dominate search in the AI-first era
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      {guide.isNew && <Badge variant="default">New in 2026</Badge>}
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
              Real Results from AI-Powered SEO in 2026
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