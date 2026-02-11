import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-purple-glow)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium tracking-wider text-purple-light uppercase">
              AI Consultancy for SMEs
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              You know AI matters.{" "}
              <span className="text-purple">You just don&apos;t know where to start.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We&apos;re not selling tools. We&apos;re building minds that fit your
              business &mdash; with a human-first approach that actually sticks.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-purple px-8 hover:bg-purple-dark"
              >
                <Link href="/contact">Let&apos;s Talk</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border px-8"
              >
                <Link href="/services">See How We Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Sound familiar?
            </h2>
            <p className="mt-4 text-muted-foreground">
              You&apos;re not alone. Most business owners we speak to feel the same way.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Drowning in noise",
                description:
                  "Every day there's a new AI tool, a new headline, a new \"must-have\". It's impossible to know what actually matters for your business.",
              },
              {
                title: "Tried it, didn't stick",
                description:
                  "You've played with ChatGPT, maybe even tried automating something. But it didn't integrate. It didn't last. It didn't feel like yours.",
              },
              {
                title: "Know it matters, but where to start?",
                description:
                  "You can see competitors moving. You know AI is reshaping your industry. But the gap between knowing and doing feels enormous.",
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
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              A different kind of AI partner
            </h2>
            <p className="mt-4 text-muted-foreground">
              We don&apos;t push tools. We don&apos;t speak in jargon. We sit down, listen,
              and figure out where AI actually helps &mdash; then we build it with you.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Listen & Understand",
                description:
                  "We start with your business, not our tech stack. What are you trying to achieve? Where are the bottlenecks?",
              },
              {
                step: "02",
                title: "Design & Build",
                description:
                  "We create AI solutions tailored to your workflows. No cookie-cutter templates. Everything is built to fit.",
              },
              {
                step: "03",
                title: "Embed & Grow",
                description:
                  "We don't just deliver and disappear. We make sure the solution sticks, your team understands it, and it evolves with you.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple/10 text-sm font-bold text-purple">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What working with us looks like
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every engagement starts with a conversation. Here&apos;s what we can build together.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "AI Audit & Advisory",
                description:
                  "A clear-eyed look at your business through an AI lens. We identify where AI can genuinely help and where it can't.",
                href: "/services",
              },
              {
                title: "AI Automation Builds",
                description:
                  "Custom automations that plug into your existing workflows. From lead handling to internal ops, built to save you real time.",
                href: "/services",
              },
              {
                title: "AIPA - AI Personal Assistant",
                description:
                  "Your own AI assistant, trained on your business knowledge. It doesn't just answer questions \u2014 it thinks like part of your team.",
                href: "/aipa",
              },
              {
                title: "Micro Apps",
                description:
                  "Small, focused AI-powered applications that solve one specific problem brilliantly. Fast to build, easy to use.",
                href: "/services",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-purple/30 hover:bg-card/80"
              >
                <h3 className="text-lg font-semibold group-hover:text-purple">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-sm text-purple">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-purple-glow)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to figure this out?
            </h2>
            <p className="mt-4 text-muted-foreground">
              No pitch. No pressure. Just a conversation about where AI fits
              in your business. Let&apos;s start there.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-purple px-8 hover:bg-purple-dark"
            >
              <Link href="/contact">Book a Free Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
