import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Digital Foundation — AI-Ready Websites | Aspiro AI",
  description:
    "AI-ready websites that get you found — by humans and machines. Fast, modern websites built for the AI era with structured data, mobile-first design, and sub-2-second load times.",
  openGraph: {
    title: "Digital Foundation — AI-Ready Websites | Aspiro AI",
    description:
      "AI-ready websites that get you found — by humans and machines. Fast, modern websites built for the AI era.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is this different from Wix/Squarespace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Those are templates. We build custom, with AI-discoverability baked in from the start. No plugin bloat, no slow load times.",
      },
    },
    {
      "@type": "Question",
      name: "What about my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can migrate your content or start fresh. Either way, you keep your domain.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most sites are live within 2-3 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What if I want AI features later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's the point. Your Digital Foundation is ready to plug into AIPA (our AI assistant platform) whenever you are.",
      },
    },
  ],
};

export default function DigitalFoundationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-purple-glow)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium tracking-wider text-purple-light uppercase">
              Digital Foundation
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              AI-ready websites that get you found — by humans and machines
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Before AI can help your business, you need the right foundation. A
              fast, modern website that builds trust, converts visitors, and
              speaks the language of AI assistants.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-purple px-8 hover:bg-[var(--color-accent-purple)]"
            >
              <Link href="/contact">Book a free audit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">The problem</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Your website was built for 2015. Google SEO. Desktop-first.
                Maybe WordPress with 47 plugins.
              </p>
              <p>
                But customers have changed. They ask ChatGPT for
                recommendations. They search on their phones. They bounce in 3
                seconds if your site feels dated.
              </p>
              <p className="font-medium text-foreground">
                If AI assistants can&apos;t read your site, they can&apos;t
                recommend you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">What we build</h2>
            <p className="mt-4 text-muted-foreground">
              Modern, conversion-focused websites designed for the AI era.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI-Discoverable",
                description:
                  "Structured for ChatGPT, Perplexity, and Google AI to read, understand, and cite.",
              },
              {
                title: "Mobile-First",
                description:
                  "70% of your traffic is on phones. We design for that reality.",
              },
              {
                title: "Fast",
                description:
                  "Sub-2-second load times. No bloat. No WordPress spaghetti.",
              },
              {
                title: "Conversion-Ready",
                description:
                  "Clear CTAs, trust signals, and lead capture that actually works.",
              },
              {
                title: "Future-Proof",
                description:
                  "Built to plug into AI assistants, chatbots, and automation.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border/50 bg-card p-6"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Who this is for
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Trades & home services",
                description:
                  "Plumbers, electricians, HVAC, landscaping — get found by customers searching on their phones and through AI.",
              },
              {
                title: "Professional services",
                description:
                  "Accountants, solicitors, consultants — a website that reflects the quality of your work.",
              },
              {
                title: "Finance & mortgage brokers",
                description:
                  "Build trust online and convert visitors into qualified leads.",
              },
              {
                title: "Local businesses",
                description:
                  "Tired of your dated website? Get a modern foundation that works for you around the clock.",
              },
            ].map((audience) => (
              <div
                key={audience.title}
                className="rounded-xl border border-border/50 bg-card p-6"
              >
                <h3 className="text-lg font-semibold">{audience.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground italic">
            If your current site makes you cringe when you share the link — we
            should talk.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold sm:text-3xl">
              How it works
            </h2>
            <div className="mt-12 space-y-8">
              {[
                {
                  step: "01",
                  title: "Audit",
                  description:
                    "We review your current site, your competitors, and what's actually working in your industry.",
                },
                {
                  step: "02",
                  title: "Build",
                  description:
                    "We design and build a clean, fast website optimized for humans and AI. Usually 2-3 weeks.",
                },
                {
                  step: "03",
                  title: "Launch & Support",
                  description:
                    "We handle hosting, maintain security, and make updates as your business evolves.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple/10 text-sm font-bold text-purple">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Then, When You're Ready */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Then, when you&apos;re ready
            </h2>
            <p className="mt-4 text-muted-foreground">
              Your Digital Foundation is built to grow with you:
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Add an AI Assistant",
                description:
                  "Handle enquiries 24/7, qualify leads while you sleep.",
              },
              {
                title: "Automate Follow-ups",
                description: "Never let a lead go cold again.",
              },
              {
                title: "Connect Your Tools",
                description:
                  "CRM, calendar, inbox — all talking to each other.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/50 bg-card p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground italic">
            The website is step one. What comes next is where the magic happens.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-12 space-y-8">
              {[
                {
                  question:
                    "How is this different from Wix/Squarespace?",
                  answer:
                    "Those are templates. We build custom, with AI-discoverability baked in from the start. No plugin bloat, no slow load times.",
                },
                {
                  question: "What about my existing website?",
                  answer:
                    "We can migrate your content or start fresh. Either way, you keep your domain.",
                },
                {
                  question: "How long does it take?",
                  answer:
                    "Most sites are live within 2-3 weeks.",
                },
                {
                  question: "What if I want AI features later?",
                  answer:
                    "That's the point. Your Digital Foundation is ready to plug into AIPA (our AI assistant platform) whenever you are.",
                },
              ].map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-purple-glow)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">
              Ready for a website that works as hard as you do?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Get a free audit of your current site and see exactly
              what&apos;s holding you back — and what&apos;s possible.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-purple px-8 hover:bg-[var(--color-accent-purple)]"
            >
              <Link href="/contact">Book a free audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
