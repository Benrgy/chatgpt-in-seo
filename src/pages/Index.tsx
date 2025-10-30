import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ToolCard } from "@/components/ToolCard";
import { FAQSection } from "@/components/FAQSection";
import { EducationalSection } from "@/components/EducationalSection";
import heroImage from "@/assets/hero-seo-ai.jpg";

const tools = [
  {
    title: "ChatGPT SEO Toolkit for Marketers",
    description:
      "Master ChatGPT in SEO. Learn, apply & rank fast. See how ChatGPT will truly affect your SEO results",
    category: "SEO Tools",
    categoryColor: "primary",
    ctaText: "Try Toolkit",
    ctaLink: "https://f8ccf5qat3ax2l151jl9445v0h.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 5,
  },
  {
    title: "AI Video Creation & Editing Tools Hub",
    description:
      "Explore AI video tools for smart editing. Automate production, save time, and elevate your content.",
    category: "Video Tools",
    categoryColor: "secondary",
    ctaText: "Explore Video Tools",
    ctaLink: "https://a42b49kcsdbw6s14uru2cs6zbw.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 5,
  },
  {
    title: "Boost ROI with Smart Automation",
    description:
      "Discover AI tools that automate marketing tasks, double ROI, and cut ad costs effortlessly.",
    category: "Automation",
    categoryColor: "accent",
    ctaText: "Automate Marketing",
    ctaLink: "https://25a5cxnmya8y7r9mu9xpv65zfc.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 5,
  },
  {
    title: "AI Video Creation Tools Directory",
    description:
      "Discover top AI tools for video creation. Enhance content, save time, boost engagement effortlessly.",
    category: "Video Creation",
    categoryColor: "primary",
    ctaText: "Top Video Tools",
    ctaLink: "https://3f1da1rk327l9x9b3f1x2r5z6r.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 4,
  },
  {
    title: "AI Blog Monetisation System",
    description:
      "Turn blogs into passive income machines with AI. Boost traffic, automate profits, start today.",
    category: "Monetization",
    categoryColor: "secondary",
    ctaText: "Monetise Blog",
    ctaLink: "https://ba4d0zukz36k2wagyd-24s3tcw.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 5,
  },
  {
    title: "AI Marketing Mastery",
    description:
      "Discover AI tools that automate marketing tasks, double ROI, and cut ad costs effortlessly.",
    category: "Marketing",
    categoryColor: "accent",
    ctaText: "AI Marketing",
    ctaLink: "https://1fcad9hj31dm9xej16rfvd1pdu.hop.clickbank.net/?&traffic_source=lovable&traffic_type=directory",
    rating: 5,
  },
];

const Index = () => {
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
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed w-full bg-background/95 backdrop-blur-sm z-50 shadow-sm border-b">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="https://chatgptinseo.com/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            ChatGpt In Seo
          </a>
          <div className="hidden md:flex space-x-8">
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
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
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
              About Us
            </a>
            <a
              href="#contact"
              className="block px-6 py-4 hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[60vh] flex items-center justify-center relative pt-20"
        aria-label="Hero section showcasing AI-powered SEO tools"
      >
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Modern office workspace featuring AI-powered SEO tools dashboard with ChatGPT integration for search engine optimization and digital marketing professionals"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10 py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            ChatGpt in SEO: Smart Chatgpt Seo Tools for Fast Ranking
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-3xl mx-auto">
            AI-Powered SEO Tool Directory
          </p>
          <p className="text-lg text-white/90 mb-8 max-w-4xl mx-auto">
            ChatGPTInSEO.com is a curated directory of AI-powered SEO tools,
            resources, and educational content designed to help marketers,
            content creators, and SEO professionals optimize online performance
            and drive results.
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
              Try Our #1 SEO AI Tool
            </a>
          </Button>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: "Tools Directory" }]} />
      </div>

      {/* Trust Bar */}
      <section className="py-12 bg-muted/50" aria-label="Trust and statistics">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary" aria-label="Over one thousand users">1000+</div>
              <div className="text-muted-foreground">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary" aria-label="Six premium tools">6</div>
              <div className="text-muted-foreground">Premium Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary" aria-label="Twenty-four seven support">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary" aria-label="Founded in 2024">Founded 2024</div>
              <div className="text-muted-foreground">Trusted Directory</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Challenges of Modern SEO
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Staying Ahead of Algorithm Updates
                </h3>
                <p className="text-muted-foreground">
                  Search engine algorithms evolve constantly, making it
                  challenging to maintain rankings without continuous
                  optimization and monitoring.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Analyzing Massive Datasets
                </h3>
                <p className="text-muted-foreground">
                  Traditional SEO tools struggle to process and analyze the vast
                  amounts of data needed for competitive keyword research and
                  content optimization.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Creating Engaging Content at Scale
                </h3>
                <p className="text-muted-foreground">
                  Producing high-quality, SEO-optimized content consistently
                  requires significant time and resources that most teams don't
                  have.
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How AI Solves These Problems
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Automated Keyword Research
                </h3>
                <p className="text-muted-foreground">
                  AI analyzes search patterns and competitor strategies in
                  seconds, uncovering high-value keywords and long-tail
                  opportunities automatically.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  AI-Powered Content Optimization
                </h3>
                <p className="text-muted-foreground">
                  Leverage machine learning to optimize content structure,
                  keyword density, and readability based on top-ranking pages in
                  your niche.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Predictive Analytics for SEO
                </h3>
                <p className="text-muted-foreground">
                  AI predicts content performance and identifies trending topics
                  before they peak, giving you a competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Listings */}
      <section id="directory" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Curated AI SEO Tool Selection
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover a hand-picked selection of the most effective AI tools for
              SEO, saving you time and effort
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
      <EducationalSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Explore Our AI SEO Tools?
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Join thousands of marketers, content creators, and SEO professionals
            leveraging AI to optimize their online performance
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
              Get Started Now
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Welcome to the premier destination for AI-powered SEO tools and
              resources. Our carefully curated directory connects marketers,
              content creators, and SEOs with the best solutions to optimize
              online performance and drive results.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We understand the challenges of modern SEO and believe that
              AI-powered tools are essential for staying competitive. Our mission
              is to help you discover, learn, and implement the most effective AI
              solutions for your specific needs, whether you're optimizing
              content, automating workflows, or scaling your marketing efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:bgkingdombizz2009@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  bgkingdombizz2009@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://chatgptinseo.com/privacy.html"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://chatgptinseo.com/terms.html"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Terms of Service
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
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest tools and features
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex" aria-label="Newsletter subscription form">
                <label htmlFor="footer-newsletter-email" className="sr-only">Email address for newsletter</label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                  className="px-4 py-2 rounded-l-full w-full text-gray-900"
                />
                <Button
                  type="submit"
                  className="px-6 rounded-r-full bg-primary hover:bg-primary/90"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 ChatGpt In SEO | chatgpt seo tools Directory. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
