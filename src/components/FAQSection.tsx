import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ChatGPT and how can it help with SEO?",
    answer:
      "ChatGPT is an advanced AI language model developed by OpenAI that can generate human-like text. For SEO, ChatGPT can help with keyword research, content creation, meta description writing, content optimization, competitor analysis, and generating SEO-friendly titles. It accelerates content production while maintaining quality and can provide data-driven insights for your SEO strategy.",
  },
  {
    question: "Which AI SEO tools are best for keyword research?",
    answer:
      "The best AI SEO tools for keyword research include ChatGPT SEO Toolkit, which offers AI-powered keyword discovery and analysis. These tools use machine learning to identify long-tail keywords, search intent patterns, and competitive opportunities that traditional tools might miss. They can also predict keyword trends and suggest semantic variations to improve your content relevance.",
  },
  {
    question: "How can AI automate content creation for SEO?",
    answer:
      "AI tools can automate content creation by generating blog outlines, writing first drafts, optimizing existing content, creating meta descriptions, and suggesting internal linking opportunities. However, human oversight is essential to ensure accuracy, brand voice consistency, and E-E-A-T compliance. The best approach is using AI to accelerate the process while maintaining human editorial control.",
  },
  {
    question: "What are the best AI tools for SEO link building?",
    answer:
      "AI-powered link building tools help identify link opportunities, analyze competitor backlink profiles, automate outreach campaigns, and predict link value. They can also generate personalized outreach emails and track campaign performance. Our directory features several AI marketing automation tools that include link building capabilities alongside other SEO features.",
  },
  {
    question: "How does AI improve SEO content optimization?",
    answer:
      "AI improves SEO content optimization by analyzing top-ranking content, identifying semantic keywords, suggesting content structure improvements, optimizing for user intent, and ensuring proper keyword density. AI tools can also analyze readability scores, suggest multimedia additions, and provide real-time optimization recommendations as you write.",
  },
  {
    question: "Can ChatGPT replace traditional SEO tools?",
    answer:
      "ChatGPT complements rather than replaces traditional SEO tools. While ChatGPT excels at content generation, ideation, and strategy development, traditional tools provide essential data like search volume, keyword difficulty, backlink metrics, and technical SEO audits. The most effective SEO strategy combines both AI-powered tools and traditional SEO platforms.",
  },
  {
    question: "What are the limitations of using AI for SEO?",
    answer:
      "AI SEO tools have limitations including potential factual inaccuracies, lack of real-time data access, inability to fully understand brand nuance, and risk of generating generic content. They also can't replace human creativity, strategic thinking, or the ability to build genuine relationships for link building. Always verify AI-generated content and combine it with human expertise.",
  },
  {
    question: "How do I implement AI tools into my existing SEO workflow?",
    answer:
      "Start by identifying repetitive tasks in your SEO workflow that AI can handle, such as meta description writing or content outlining. Gradually integrate AI tools for specific use cases, train your team on best practices, and establish quality control processes. Monitor results and adjust your approach based on performance data. Our directory features tools for various stages of the SEO process.",
  },
  {
    question: "What is the best way to use ChatGPT for SEO in 2026?",
    answer:
      "In 2026, the best way to use ChatGPT for SEO is to combine it with specialized AI SEO tools. Use ChatGPT for content ideation, writing meta descriptions, creating content outlines, and generating FAQs. Pair it with dedicated SEO tools for keyword research data, backlink analysis, and technical audits. Always fact-check AI output and optimize for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).",
  },
  {
    question: "How do AI SEO tools help with Google's AI Overview?",
    answer:
      "AI SEO tools help optimize content for Google's AI Overview (SGE) by creating comprehensive, well-structured content that directly answers user questions. Focus on clear headings, bullet points, FAQ sections, and authoritative sources. AI tools can analyze what content appears in AI Overviews and help you structure your content similarly to increase visibility in AI-generated search results.",
  },
  {
    question: "What are the costs of AI SEO tools?",
    answer:
      "AI SEO tool costs vary widely from free tiers to enterprise plans. ChatGPT offers a free version and Plus subscription ($20/month). Dedicated AI SEO tools in our directory range from one-time purchases to monthly subscriptions. Many offer free trials so you can test before committing. Consider the ROI: time saved on content creation and improved rankings often justify the investment.",
  },
  {
    question: "How do I choose the right AI SEO tool for my needs?",
    answer:
      "Choose AI SEO tools based on your specific needs: for content creation, look at ChatGPT-based tools; for video marketing, explore our AI video tools section; for automation, check our marketing automation category. Consider your budget, team size, and current workflow. Start with one tool, master it, then expand. Our curated directory helps you compare options across different categories.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything you need to know about using AI for SEO
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
