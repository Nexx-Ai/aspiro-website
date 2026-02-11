import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AIPA - AI Personal Assistant",
  description:
    "Your own AI assistant, trained on your business. AIPA doesn't just answer questions \u2014 it thinks like part of your team.",
};

export default function AIPAPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-purple-glow)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium tracking-wider text-purple-light uppercase">
              AI Personal Assistant
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A mind that lives in your business
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              AIPA isn&apos;t a chatbot. It&apos;s an AI assistant trained on your
              knowledge, your processes, and your way of working. It thinks like
              part of your team because it&apos;s built from your team.
            </p>
          </div>
        </div>
      </section>

      {/* What makes AIPA different */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              What makes AIPA different
            </h2>
            <p className="mt-4 text-muted-foreground">
              Generic AI tools give generic answers. AIPA gives answers that are
              specific to your business.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Trained on your knowledge",
                description:
                  "We feed AIPA your documents, processes, FAQs, and institutional knowledge. It knows your business like a senior team member.",
              },
              {
                title: "Speaks your language",
                description:
                  "AIPA learns your tone, your terminology, your way of explaining things. Customers won't know they're talking to AI.",
              },
              {
                title: "Always available",
                description:
                  "24/7 availability for your team and your customers. No sick days, no holidays, no waiting for someone to get back to you.",
              },
              {
                title: "Gets smarter over time",
                description:
                  "Every interaction is a learning opportunity. AIPA continuously improves based on real conversations and feedback.",
              },
              {
                title: "Integrates with your tools",
                description:
                  "AIPA plugs into the platforms you already use. Your website, your CRM, your internal tools \u2014 wherever it's needed.",
              },
              {
                title: "You stay in control",
                description:
                  "Full visibility into what AIPA is saying and doing. Easy to update, easy to refine, always aligned with your business.",
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

      {/* How it works */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold sm:text-3xl">
              How AIPA gets built
            </h2>
            <div className="mt-12 space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We learn about your business, your customers, and the questions that come up most. We map out the knowledge AIPA needs.",
                },
                {
                  step: "02",
                  title: "Knowledge Building",
                  description:
                    "We gather your documents, processes, and expertise and use them to train your personalised AI assistant.",
                },
                {
                  step: "03",
                  title: "Testing & Refinement",
                  description:
                    "We put AIPA through real-world scenarios, refine its responses, and make sure it sounds right before it goes live.",
                },
                {
                  step: "04",
                  title: "Launch & Evolve",
                  description:
                    "AIPA goes live where you need it. We monitor, gather feedback, and continuously improve its knowledge and accuracy.",
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

      {/* Use cases */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Where businesses use AIPA
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Customer Support",
                description:
                  "Instant, accurate answers to customer questions \u2014 based on your actual knowledge base, not generic responses.",
              },
              {
                title: "Internal Knowledge Base",
                description:
                  "New team members get up to speed faster. Anyone can ask AIPA about processes, policies, or how things work.",
              },
              {
                title: "Sales Qualification",
                description:
                  "AIPA engages prospects, answers their questions, and helps qualify leads before they ever reach your sales team.",
              },
              {
                title: "Content & Communications",
                description:
                  "Draft emails, proposals, and content in your brand voice. AIPA knows how you communicate and keeps it consistent.",
              },
            ].map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-xl border border-border/50 bg-card p-6"
              >
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-purple-glow)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">
              Curious what AIPA could do for you?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every AIPA is different because every business is different. Let&apos;s
              talk about yours and explore what&apos;s possible.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-purple px-8 hover:bg-purple-dark"
            >
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
