import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI Audit & Advisory, AI Automation Builds, AIPA, and Micro Apps. Discover how Aspiro AI can help your business.",
};

const services = [
  {
    id: "audit",
    title: "AI Audit & Advisory",
    subtitle: "See clearly before you build",
    description:
      "Before you invest in any AI solution, you need to know where it actually makes sense. Our audit gives you a clear, jargon-free map of the opportunities in your business.",
    points: [
      "Deep dive into your current workflows and pain points",
      "Identify where AI can save time, money, or effort",
      "Honest assessment of what's worth automating and what isn't",
      "Prioritised roadmap so you know exactly where to start",
    ],
    outcome:
      "You walk away with clarity, not confusion. A practical plan you can act on, whether that's with us or on your own.",
  },
  {
    id: "automation",
    title: "AI Automation Builds",
    subtitle: "Make your business run smoother",
    description:
      "Custom automations that plug into the tools you already use. We build workflows that handle the repetitive stuff so your team can focus on what matters.",
    points: [
      "Lead capture and qualification on autopilot",
      "Internal operations streamlined with AI",
      "Customer communication flows that feel personal",
      "Data processing and reporting automated",
    ],
    outcome:
      "Less manual work, fewer errors, more time for the work that actually grows your business.",
  },
  {
    id: "aipa",
    title: "AIPA \u2014 AI Personal Assistant",
    subtitle: "A mind that lives in your business",
    description:
      "Your own AI assistant, trained on your business knowledge, your processes, your tone of voice. It doesn't just answer questions \u2014 it thinks like part of your team.",
    points: [
      "Trained on your specific business knowledge",
      "Answers customer and team queries instantly",
      "Learns and improves over time",
      "Integrates with your existing tools and platforms",
    ],
    outcome:
      "Like hiring a team member who knows everything, never sleeps, and gets smarter every day.",
    cta: { label: "Learn more about AIPA", href: "/aipa" },
  },
  {
    id: "micro-apps",
    title: "Micro Apps",
    subtitle: "Small tools, big impact",
    description:
      "Not every problem needs a massive platform. Sometimes you just need a small, focused application that does one thing brilliantly. That's what Micro Apps are for.",
    points: [
      "Purpose-built for a single workflow or task",
      "Fast to develop and deploy",
      "Simple interfaces your team will actually use",
      "AI-powered intelligence under the hood",
    ],
    outcome:
      "A tool that solves your specific problem, without the bloat of enterprise software.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-purple-glow)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              How we help
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Every engagement starts with listening. Here&apos;s what we build once
              we understand your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`border-t border-border/50 ${idx % 2 === 1 ? "bg-card/30" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-medium tracking-wider text-purple uppercase">
                {service.subtitle}
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                {service.title}
              </h2>
              <p className="mt-4 text-muted-foreground">{service.description}</p>

              <ul className="mt-8 space-y-3">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-lg border border-border/50 bg-card p-4">
                <p className="text-sm font-medium">The outcome</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {service.outcome}
                </p>
              </div>

              {service.cta && (
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple/30 text-purple hover:bg-purple/10"
                  >
                    <Link href={service.cta.href}>{service.cta.label} &rarr;</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative border-t border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-purple-glow)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Not sure what you need?</h2>
            <p className="mt-4 text-muted-foreground">
              That&apos;s completely fine. Most people we work with start in exactly
              that place. Book a call and we&apos;ll help you figure it out.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-purple px-8 hover:bg-[var(--color-accent-purple)]"
            >
              <Link href="/contact">Book a Free Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
