import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ToolCard } from "@/components/ToolCard";
import { FAQSectionNL } from "@/components/FAQSectionNL";
import { EducationalSectionNL } from "@/components/EducationalSectionNL";
import heroImage from "@/assets/hero-seo-ai.jpg";
import { Link } from "react-router-dom";

const tools = [
  {
    title: "ChatGPT SEO Toolkit voor Marketeers",
    description:
      "Beheers ChatGPT voor SEO. Leer, pas toe & rank snel. Ontdek hoe ChatGPT jouw SEO-resultaten écht beïnvloedt.",
    category: "SEO Tools",
    categoryColor: "primary",
    ctaText: "Probeer Toolkit",
    ctaLink: "https://f8ccf5qat3ax2l151jl9445v0h.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 5,
  },
  {
    title: "AI Video Creatie & Bewerking Tools",
    description:
      "Ontdek AI-videotools voor slimme bewerking. Automatiseer productie, bespaar tijd en til je content naar een hoger niveau.",
    category: "Video Tools",
    categoryColor: "secondary",
    ctaText: "Bekijk Video Tools",
    ctaLink: "https://a42b49kcsdbw6s14uru2cs6zbw.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 5,
  },
  {
    title: "Verhoog ROI met Slimme Automatisering",
    description:
      "Ontdek AI-tools die marketingtaken automatiseren, ROI verdubbelen en advertentiekosten moeiteloos verlagen.",
    category: "Automatisering",
    categoryColor: "accent",
    ctaText: "Automatiseer Marketing",
    ctaLink: "https://25a5cxnmya8y7r9mu9xpv65zfc.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 5,
  },
  {
    title: "AI Video Creatie Tools Directory",
    description:
      "Ontdek top AI-tools voor videocreatie. Verbeter content, bespaar tijd en verhoog engagement moeiteloos.",
    category: "Video Creatie",
    categoryColor: "primary",
    ctaText: "Top Video Tools",
    ctaLink: "https://3f1da1rk327l9x9b3f1x2r5z6r.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 4,
  },
  {
    title: "AI Blog Monetisatie Systeem",
    description:
      "Maak van blogs passieve inkomstenmachines met AI. Verhoog verkeer, automatiseer winst, start vandaag.",
    category: "Monetisatie",
    categoryColor: "secondary",
    ctaText: "Monetiseer Blog",
    ctaLink: "https://ba4d0zukz36k2wagyd-24s3tcw.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 5,
  },
  {
    title: "AI Marketing Meesterschap",
    description:
      "Ontdek AI-tools die marketingtaken automatiseren, ROI verdubbelen en advertentiekosten moeiteloos verlagen.",
    category: "Marketing",
    categoryColor: "accent",
    ctaText: "AI Marketing",
    ctaLink: "https://1fcad9hj31dm9xej16rfvd1pdu.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 5,
  },
];

const NL = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nieuwsbrief inschrijving:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed w-full bg-background/95 backdrop-blur-sm z-50 shadow-sm border-b">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="/nl"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            ChatGpt In Seo
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#hero"
              className="hover:text-primary transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#directory"
              className="hover:text-primary transition-colors duration-300"
            >
              Tools Directory
            </a>
            <a
              href="#about"
              className="hover:text-primary transition-colors duration-300"
            >
              Over Ons
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
            <Link
              to="/"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              EN
            </Link>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background w-full border-t">
            <a
              href="#hero"
              className="block px-6 py-4 hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#directory"
              className="block px-6 py-4 hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tools Directory
            </a>
            <a
              href="#about"
              className="block px-6 py-4 hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Over Ons
            </a>
            <a
              href="#contact"
              className="block px-6 py-4 hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Link
              to="/"
              className="block px-6 py-4 hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              🌐 English
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[60vh] flex items-center justify-center relative pt-20"
        aria-label="Hero sectie met AI-gedreven SEO tools"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <meta itemProp="name" content="ChatGPT SEO Tools Directory - AI-Gedreven SEO Oplossingen" />
        <meta itemProp="description" content="Ontdek de beste AI SEO tools inclusief ChatGPT voor zoekwoordonderzoek, content optimalisatie en marketing automatisering." />
        <meta itemProp="inLanguage" content="nl" />
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Moderne kantoorwerkplek met AI-gedreven SEO tools dashboard en ChatGPT integratie voor zoekmachine optimalisatie"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10 py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" itemProp="headline">
            ChatGPT voor SEO: Slimme AI Tools voor Snelle Google Rankings
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-3xl mx-auto hero-description">
            AI-Gedreven SEO Tool Directory voor Marketeers & Content Creators
          </p>
          <p className="text-lg text-white/90 mb-8 max-w-4xl mx-auto" itemProp="about">
            ChatGPTInSEO.com is een gecureerde directory van AI-gedreven SEO tools,
            bronnen en educatieve content. Wij helpen marketeers, content creators 
            en SEO-professionals hun online prestaties te optimaliseren met ChatGPT, 
            AI-zoekwoordonderzoek, geautomatiseerde content optimalisatie en slimme marketing automatisering.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-lg text-xl px-8 py-6 h-auto"
          >
            <a
              href="https://1b4a78qiy57n5sa9ptk8zuaw6j.hop.clickbank.net"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="url"
            >
              Probeer Onze #1 SEO AI Tool
            </a>
          </Button>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: "Nederlands" }, { label: "Tools Directory" }]} />
      </div>

      {/* Trust Bar */}
      <section className="py-12 bg-muted/50" aria-label="Vertrouwen en statistieken">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary" aria-label="Meer dan duizend gebruikers">1000+</div>
              <div className="text-muted-foreground">Tevreden Gebruikers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary" aria-label="Zes premium tools">6</div>
              <div className="text-muted-foreground">Premium Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary" aria-label="24 uur per dag 7 dagen per week support">24/7</div>
              <div className="text-muted-foreground">Support Beschikbaar</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary" aria-label="Opgericht in 2024">Sinds 2024</div>
              <div className="text-muted-foreground">Vertrouwde Directory</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-background" itemScope itemType="https://schema.org/Article">
        <meta itemProp="headline" content="Hoe AI Moderne SEO Uitdagingen Oplost" />
        <meta itemProp="author" content="ChatGPT in SEO" />
        <meta itemProp="inLanguage" content="nl" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              De Uitdagingen van Moderne SEO in 2026
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16" itemProp="articleBody">
              <article>
                <h3 className="text-xl font-semibold mb-3">
                  Voorop Blijven bij Google Updates
                </h3>
                <p className="text-muted-foreground">
                  Zoekmachine algoritmes evolueren constant, wat het uitdagend maakt om rankings
                  te behouden zonder continue optimalisatie. AI tools helpen je sneller aanpassen.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-semibold mb-3">
                  Enorme SEO Datasets Analyseren
                </h3>
                <p className="text-muted-foreground">
                  Traditionele SEO tools worstelen met het verwerken van grote hoeveelheden data
                  voor competitief zoekwoordonderzoek. ChatGPT en AI lossen dit op.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-semibold mb-3">
                  SEO Content op Schaal Creëren
                </h3>
                <p className="text-muted-foreground">
                  Consistent hoogwaardige, SEO-geoptimaliseerde content produceren vereist veel tijd.
                  AI content tools versnellen productie met behoud van kwaliteit.
                </p>
              </article>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Hoe ChatGPT en AI SEO Problemen Oplossen
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article itemScope itemType="https://schema.org/HowToStep">
                <h3 className="text-xl font-semibold mb-3 text-primary" itemProp="name">
                  Geautomatiseerd Zoekwoordonderzoek met AI
                </h3>
                <p className="text-muted-foreground" itemProp="text">
                  AI analyseert zoekpatronen en concurrentiestrategieën in seconden, en ontdekt
                  automatisch waardevolle zoekwoorden. ChatGPT genereert direct zoekwoordideeën.
                </p>
              </article>
              <article itemScope itemType="https://schema.org/HowToStep">
                <h3 className="text-xl font-semibold mb-3 text-primary" itemProp="name">
                  AI-Gedreven Content Optimalisatie
                </h3>
                <p className="text-muted-foreground" itemProp="text">
                  Gebruik machine learning om contentstructuur, zoekwoorddichtheid en leesbaarheid
                  te optimaliseren. Verbeter je Google rankings met AI-inzichten.
                </p>
              </article>
              <article itemScope itemType="https://schema.org/HowToStep">
                <h3 className="text-xl font-semibold mb-3 text-primary" itemProp="name">
                  Voorspellende SEO Analytics
                </h3>
                <p className="text-muted-foreground" itemProp="text">
                  AI voorspelt contentprestaties en identificeert trending onderwerpen voordat
                  ze pieken, wat je een concurrentievoordeel geeft in zoekresultaten.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Listings */}
      <section id="directory" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gecureerde AI SEO Tool Selectie
            </h2>
            <p className="text-muted-foreground text-lg">
              Ontdek een handgeselecteerde verzameling van de meest effectieve AI tools voor
              SEO, waarmee je tijd en moeite bespaart
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {tools.map((tool, index) => (
              <div
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Product"
              >
                <meta itemProp="name" content={tool.title} />
                <meta itemProp="description" content={tool.description} />
                <ToolCard {...tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <EducationalSectionNL />

      {/* FAQ Section */}
      <FAQSectionNL />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Klaar om Onze AI SEO Tools te Verkennen?
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Sluit je aan bij duizenden marketeers, content creators en SEO-professionals
            die AI inzetten om hun online prestaties te optimaliseren
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-lg text-xl px-8 py-6 h-auto"
          >
            <a
              href="https://1b4a78qiy57n5sa9ptk8zuaw6j.hop.clickbank.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Nu
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Over Ons</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Welkom bij dé bestemming voor AI-gedreven SEO tools en bronnen. Onze
              zorgvuldig samengestelde directory verbindt marketeers, content creators
              en SEO-professionals met de beste oplossingen om online prestaties te
              optimaliseren en resultaten te behalen.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Wij begrijpen de uitdagingen van moderne SEO en geloven dat AI-gedreven
              tools essentieel zijn om competitief te blijven. Onze missie is je te helpen
              de meest effectieve AI-oplossingen te ontdekken, leren en implementeren
              voor jouw specifieke behoeften.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                E-mail:{" "}
                <a
                  href="mailto:bgkingdombizz2009@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  bgkingdombizz2009@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Snelle Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://chatgptinseo.com/privacy.html"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Privacybeleid
                  </a>
                </li>
                <li>
                  <a
                    href="https://chatgptinseo.com/terms.html"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Algemene Voorwaarden
                  </a>
                </li>
                <li>
                  <a
                    href="https://chatgptinseo.com/blog.html"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Talen</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    🇬🇧 English
                  </Link>
                </li>
                <li>
                  <span className="text-white">
                    🇳🇱 Nederlands (huidige)
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Nieuwsbrief</h3>
              <p className="text-gray-400 mb-4">
                Blijf op de hoogte van de nieuwste AI SEO trends
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Je e-mail"
                  className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 flex-1"
                  required
                />
                <Button type="submit" size="sm">
                  Aanmelden
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2026 ChatGpt In SEO | chatgpt seo tools Directory. Alle
              rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NL;
