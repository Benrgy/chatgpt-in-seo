import { BookOpen, Lightbulb, TrendingUp, Zap, Bot, Search, MessageSquare, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const guides = [
  {
    icon: Bot,
    title: "AI Overview & SGE Optimalisatie",
    description:
      "In 2026 domineert Google's AI Overview de zoekresultaten. Optimaliseer je content om in AI-gegenereerde antwoorden te verschijnen door uitgebreide, goed gestructureerde content te maken die gebruikersvragen direct beantwoordt.",
    prompt: "Voorbeeld Prompt: 'Herschrijf deze content om featured te worden in Google AI Overview voor de query [zoekterm]'",
    isNew: true,
  },
  {
    icon: Search,
    title: "Zero-Click SEO Strategie",
    description:
      "Met 65% van zoekopdrachten die eindigen zonder klik in 2026, optimaliseer voor featured snippets, knowledge panels en AI samenvattingen. Focus op merkzichtbaarheid en directe antwoorden.",
    prompt: "Voorbeeld Prompt: 'Maak een featured snippet-geoptimaliseerd antwoord voor [vraag] in minder dan 50 woorden'",
    isNew: true,
  },
  {
    icon: MessageSquare,
    title: "Conversationele Zoekoptimalisatie",
    description:
      "Voice search en AI-assistenten zoals ChatGPT, Claude en Gemini zijn nu primaire zoekinterfaces. Optimaliseer voor natuurlijke taalqueries en conversationele intentiepatronen.",
    prompt: "Voorbeeld Prompt: 'Genereer 10 conversationele zoekvragen die mensen kunnen stellen over [onderwerp]'",
    isNew: true,
  },
  {
    icon: Eye,
    title: "Multimodale AI Content Creatie",
    description:
      "2026 SEO vereist tekst, afbeelding en video-optimalisatie. Gebruik AI om samenhangende multimodale content te maken die rankt in Google Search, Images, Video en AI Overview.",
    prompt: "Voorbeeld Prompt: 'Maak een contentbrief voor [onderwerp] geoptimaliseerd voor tekst, alt tags en video SEO'",
    isNew: true,
  },
  {
    icon: BookOpen,
    title: "E-E-A-T & Auteur Autoriteit",
    description:
      "Experience, Expertise, Authoritativeness en Trustworthiness zijn cruciaal in 2026. AI helpt auteursprofielen opbouwen en content creëren die first-hand ervaring demonstreert.",
    prompt: "Voorbeeld Prompt: 'Stel manieren voor om E-E-A-T te demonstreren voor [onderwerp] op basis van mijn ervaring als [rol]'",
  },
  {
    icon: Lightbulb,
    title: "AI-Gedreven Content Gap Analyse",
    description:
      "Gebruik AI om concurrentcontent te analyseren, gaten in je dekking te identificeren en onbenutte zoekwoordkansen te ontdekken die aansluiten bij 2026 zoekintentiepatronen.",
    prompt: "Voorbeeld Prompt: 'Analyseer de top 10 rankende pagina's voor [zoekwoord] en identificeer contentgaten'",
  },
  {
    icon: TrendingUp,
    title: "Voorspellende SEO met AI Agents",
    description:
      "AI agents in 2026 kunnen autonoom rankings monitoren, algoritmewijzigingen voorspellen en proactieve optimalisaties voorstellen voordat verkeer daalt.",
    prompt: "Voorbeeld Prompt: 'Voorspel welke contenttypes het beste presteren voor [niche] in Q2 2026'",
  },
  {
    icon: Zap,
    title: "Geautomatiseerde Technische SEO Audits",
    description:
      "AI-gedreven tools handelen nu Core Web Vitals optimalisatie, schema markup generatie en crawl budget optimalisatie automatisch af.",
    prompt: "Voorbeeld Prompt: 'Genereer JSON-LD schema markup voor [paginatype] inclusief FAQ, HowTo en Article schemas'",
  },
];

const trends2026 = [
  {
    title: "AI Overview Dominantie",
    description: "Google's AI Overview verschijnt nu in 80% van informatieve queries, wat fundamenteel verandert hoe content wordt ontdekt.",
    impact: "Hoge Impact",
  },
  {
    title: "LLM Citatie SEO",
    description: "Geciteerd worden door ChatGPT, Claude, Perplexity en andere LLMs is de nieuwe linkbuilding. Gezaghebbende content wordt gerefereerd.",
    impact: "Kritiek",
  },
  {
    title: "Voice-First Indexering",
    description: "Met smart speakers en AI-assistenten mainstream, is conversationele content optimalisatie essentieel voor zichtbaarheid.",
    impact: "Groeiend",
  },
  {
    title: "AI Content Detectie Balans",
    description: "Google beloont AI-ondersteunde content die waarde toevoegt en bestraft puur AI-gegenereerde spam. Menselijke expertise blijft essentieel.",
    impact: "Matig",
  },
];

const caseStudies = [
  {
    metric: "400%",
    label: "AI Overview Verschijningen",
    description: "B2B SaaS bedrijf dat optimaliseert voor Google's AI-gegenereerde samenvattingen in 2026",
  },
  {
    metric: "85%",
    label: "Tijd Bespaard met AI Agents",
    description: "Enterprise team dat autonome AI gebruikt voor contentproductie en optimalisatie",
  },
  {
    metric: "200%",
    label: "LLM Citatie Groei",
    description: "Autoriteitssite die consistent verschijnt in ChatGPT en Perplexity antwoorden",
  },
];

export const EducationalSectionNL = () => {
  return (
    <>
      {/* 2026 SEO Trends */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">2026 Trends</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SEO in 2026: Het AI-First Zoeklandschap
            </h2>
            <p className="text-muted-foreground text-lg">
              Zoeken is fundamenteel veranderd. Dit is wat telt voor SEO-succes in 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trends2026.map((trend, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-2">
                  <Badge variant={trend.impact === "Kritiek" ? "destructive" : trend.impact === "Hoge Impact" ? "default" : "secondary"} className="w-fit mb-2">
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
              AI-Gedreven SEO Strategieën voor 2026
            </h2>
            <p className="text-center text-muted-foreground text-lg">
              Beheers de nieuwste AI-technieken om te domineren in zoekresultaten in het AI-first tijdperk
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
                      {guide.isNew && <Badge variant="default">Nieuw in 2026</Badge>}
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
              Echte Resultaten van AI-Gedreven SEO in 2026
            </h2>
            <p className="text-muted-foreground text-lg">
              Bekijk hoe bedrijven AI inzetten om meetbaar SEO-succes te behalen
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
