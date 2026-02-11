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
              <span className="bg-gradient-to-r from-purple-light via-purple to-purple-dark bg-clip-text text-transparent">We make it actually work for your business.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Not another chatbot demo. We build AI that saves your team hours
              every week. Custom-fit to how you already work.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-purple px-8 hover:bg-[var(--color-accent-purple)]"
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
                title: "Your competitors aren't waiting",
                description:
                  "That business down the road just automated half their admin. Your industry is moving fast. Every month you delay is ground you have to make up later.",
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
              and figure out where AI actually helps. Then we build it with you.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Listen & Understand",
                description:
                  "We spend time in your business before we touch any tech. Who does what, where the time goes, what's costing you money. That's where we start.",
              },
              {
                step: "02",
                title: "Design & Build",
                description:
                  "We build AI that plugs into your existing tools. Your CRM, your inbox, your spreadsheets. No ripping and replacing. It works where you already work.",
              },
              {
                step: "03",
                title: "Support & Scale",
                description:
                  "We train your team, monitor what's working, and adjust as your business changes. You're never left figuring it out alone.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-purple/20 bg-purple/10 text-2xl font-bold text-purple shadow-md shadow-purple/10">
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
                  "A clear-eyed look at your business through an AI lens. We identify where AI can genuinely help and where it can't. You walk away with a prioritised action plan, not a vague report.",
                href: "/services",
              },
              {
                title: "AI Automation Builds",
                description:
                  "Custom automations that plug into your existing workflows. Lead handling, invoicing, internal ops. Most clients get 10+ hours back per week.",
                href: "/services",
              },
              {
                title: "AIPA - AI Personal Assistant",
                description:
                  "Your own AI assistant, trained on your business knowledge. It answers customer questions, drafts proposals, and handles routine tasks so your team can focus on the work that matters.",
                href: "/aipa",
              },
              {
                title: "Micro Apps",
                description:
                  "Small, focused AI-powered apps that solve one specific problem brilliantly. Fast to build, easy to use, and they start paying for themselves in weeks.",
                href: "/services",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:scale-[1.02] hover:border-purple/30 hover:bg-card/80 hover:shadow-lg hover:shadow-purple/5"
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
              Curious? Let&apos;s have a chat.
            </h2>
            <p className="mt-4 text-muted-foreground">
              30 minutes, no pitch, no obligation. Just an honest conversation
              about what AI could do for your business. Worst case, you leave with a few good ideas.
            </p>
            <Button
              asChild
              size="lg"
              className="animate-glow-pulse mt-8 bg-purple px-8 hover:bg-purple-dark"
            >
              <Link href="/contact">Book a Free Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
