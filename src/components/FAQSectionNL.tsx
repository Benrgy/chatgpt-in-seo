import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wat is ChatGPT en hoe kan het helpen bij SEO?",
    answer:
      "ChatGPT is een geavanceerd AI-taalmodel ontwikkeld door OpenAI dat mensachtige tekst kan genereren. Voor SEO kan ChatGPT helpen met zoekwoordonderzoek, contentcreatie, meta-beschrijvingen schrijven, content optimalisatie, concurrentieanalyse en het genereren van SEO-vriendelijke titels. Het versnelt contentproductie met behoud van kwaliteit.",
  },
  {
    question: "Welke AI SEO tools zijn het beste voor zoekwoordonderzoek?",
    answer:
      "De beste AI SEO tools voor zoekwoordonderzoek zijn ChatGPT SEO Toolkit, die AI-gedreven zoekwoordontdekking en -analyse biedt. Deze tools gebruiken machine learning om long-tail zoekwoorden, zoekintentiepatronen en concurrentiemogelijkheden te identificeren die traditionele tools missen.",
  },
  {
    question: "Hoe kan AI contentcreatie automatiseren voor SEO?",
    answer:
      "AI tools kunnen contentcreatie automatiseren door blog-outlines te genereren, eerste concepten te schrijven, bestaande content te optimaliseren, meta-beschrijvingen te maken en interne linkingkansen te suggereren. Menselijk toezicht blijft essentieel voor nauwkeurigheid en E-E-A-T compliance.",
  },
  {
    question: "Wat zijn de beste AI tools voor SEO linkbuilding?",
    answer:
      "AI-gedreven linkbuilding tools helpen bij het identificeren van linkmogelijkheden, analyseren van concurrent-backlink profielen, automatiseren van outreach-campagnes en voorspellen van linkwaarde. Ze kunnen ook gepersonaliseerde outreach-e-mails genereren.",
  },
  {
    question: "Hoe verbetert AI SEO content optimalisatie?",
    answer:
      "AI verbetert SEO content optimalisatie door top-rankende content te analyseren, semantische zoekwoorden te identificeren, contentstructuurverbeteringen voor te stellen, te optimaliseren voor gebruikersintentie en te zorgen voor correcte zoekwoorddichtheid.",
  },
  {
    question: "Kan ChatGPT traditionele SEO tools vervangen?",
    answer:
      "ChatGPT complementeert eerder dan vervangt traditionele SEO tools. Terwijl ChatGPT uitblinkt in contentgeneratie en strategieontwikkeling, bieden traditionele tools essentiële data zoals zoekvolume, zoekwoordmoeilijkheid en technische SEO audits.",
  },
  {
    question: "Wat zijn de beperkingen van AI voor SEO?",
    answer:
      "AI SEO tools hebben beperkingen waaronder potentiële feitelijke onjuistheden, gebrek aan real-time data toegang, onvermogen om merknuance volledig te begrijpen, en risico op generieke content. Altijd AI-gegenereerde content verifiëren.",
  },
  {
    question: "Wat is de beste manier om ChatGPT voor SEO te gebruiken in 2026?",
    answer:
      "In 2026 is de beste manier om ChatGPT voor SEO te gebruiken het combineren met gespecialiseerde AI SEO tools. Gebruik ChatGPT voor content-ideeën, meta-beschrijvingen, content-outlines en FAQ's. Combineer het met dedicated SEO tools voor zoekwoorddata en technische audits.",
  },
  {
    question: "Hoe helpen AI SEO tools met Google's AI Overview in 2026?",
    answer:
      "In 2026 verschijnt Google's AI Overview in 80% van informatieve zoekopdrachten. AI SEO tools helpen door AI Overview patronen te analyseren, content te structureren voor featured inclusie, te optimaliseren voor conversationele queries en E-E-A-T signalen te versterken.",
  },
  {
    question: "Wat is LLM Citation SEO en waarom is het belangrijk in 2026?",
    answer:
      "LLM Citation SEO is de praktijk van content optimaliseren om geciteerd te worden door AI-assistenten zoals ChatGPT, Claude, Perplexity en Gemini. In 2026 zoeken miljoenen gebruikers via deze AI-interfaces. Geciteerd worden door LLMs drijft verkeer en bouwt autoriteit.",
  },
  {
    question: "Hoe is voice search veranderd voor SEO in 2026?",
    answer:
      "Voice search via smart speakers, AI-assistenten en mobiele apparaten is nu goed voor 50% van zoekopdrachten in 2026. Dit vereist optimalisatie voor natuurlijke taalqueries, vraag-gebaseerde zoekwoorden en conversationele content.",
  },
  {
    question: "Wat zijn AI SEO agents en hoe werken ze?",
    answer:
      "AI SEO agents zijn autonome AI-systemen die continu je website SEO-prestaties monitoren, problemen identificeren en automatisch oplossingen implementeren. In 2026 kunnen deze agents meta tags updaten, content verbeteringen suggereren en technische SEO issues fixen.",
  },
  {
    question: "Hoe optimaliseer ik voor multimodale zoekopdrachten in 2026?",
    answer:
      "Multimodale zoekopdrachten combineren tekst, afbeelding, video en spraakqueries. In 2026 begrijpt Google's AI content over alle formaten. Optimaliseer door samenhangende contentstrategieën te creëren waar tekst, afbeeldingen en video's allemaal dezelfde onderwerpen targeten.",
  },
  {
    question: "Wat zijn de kosten van AI SEO tools in 2026?",
    answer:
      "AI SEO tool prijzen in 2026 variëren van gratis tiers tot enterprise oplossingen. ChatGPT Plus is €20/maand, Claude Pro is €20/maand, en gespecialiseerde AI SEO tools variëren van €50-500/maand. De ROI overtreft doorgaans de kosten binnen 2-3 maanden.",
  },
  {
    question: "Hoe kies ik de juiste AI SEO tool voor 2026?",
    answer:
      "Kies op basis van je primaire behoeften: voor AI Overview optimalisatie, kijk naar tools met SGE analyse features; voor LLM citaties, focus op autoriteitsopbouwende tools; voor content op schaal, verken AI schrijfassistenten. Overweeg integratie met je bestaande stack en teamgrootte.",
  },
];

export const FAQSectionNL = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Veelgestelde Vragen
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Alles wat je moet weten over AI voor SEO
          </p>
          
          <div itemScope itemType="https://schema.org/FAQPage">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span itemProp="name">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text" className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
