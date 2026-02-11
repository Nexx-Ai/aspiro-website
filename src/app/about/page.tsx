import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Steve and Alex, the co-founders behind Aspiro AI. We help SMEs harness AI with a human-first, consultative approach.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-purple-glow)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Built on a simple belief
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              AI should work for your business, not the other way around. That&apos;s
              why Aspiro AI exists.
            </p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl mb-16">
            The people behind Aspiro
          </h2>
          
          {/* Founders Grid */}
          <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Steve */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto overflow-hidden rounded-2xl border-2 border-purple/30 shadow-lg shadow-purple/10">
                <Image
                  src="/steve-headshot.jpg"
                  alt="Steve Paulachak - Co-Founder of Aspiro AI"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-4 text-lg font-medium">Steve Paulachak</p>
              <p className="text-sm text-muted-foreground">Co-Founder</p>
              <a
                href="https://www.linkedin.com/in/stevepaulachak/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-purple hover:text-purple-light transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            
            {/* Alex */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto overflow-hidden rounded-2xl border-2 border-purple/30 shadow-lg shadow-purple/10">
                <Image
                  src="/alex-williams.jpg"
                  alt="Alex Williams - Co-Founder of Aspiro AI"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-medium">Alex Williams</p>
              <p className="text-sm text-muted-foreground">Co-Founder</p>
              <a
                href="https://www.linkedin.com/in/atkw1977/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-purple hover:text-purple-light transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Story */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="space-y-6 text-muted-foreground">
              <p>
                We founded Aspiro AI after years of watching businesses struggle
                with the same problem: they knew AI mattered, but nobody was
                helping them figure out how it actually fit into their world.
              </p>
              <p>
                The market was full of tool vendors pushing products, consultancies
                drowning people in jargon, and hype merchants promising the moon.
                What was missing was someone who would simply sit down, listen,
                and build something that worked.
              </p>
              <p>
                That&apos;s what Aspiro does. We take the time to understand your
                business before we touch any technology. We speak in plain
                language. And we build solutions that your team can actually use
                &mdash; not shelf-ware that gathers dust after the first week.
              </p>
              <p>
                This isn&apos;t about being on the cutting edge for the sake of it.
                It&apos;s about finding the right AI for your business and making sure
                it sticks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            What drives us
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Human first",
                description:
                  "Technology serves people, not the other way around. Every solution starts with understanding the humans who'll use it.",
              },
              {
                title: "Honesty over hype",
                description:
                  "If AI isn't the right answer for a problem, we'll tell you. We'd rather build trust than make a sale.",
              },
              {
                title: "Partnership, not projects",
                description:
                  "We're not here to deliver and disappear. We build lasting relationships because AI is a journey, not a one-off.",
              },
              {
                title: "Plain language",
                description:
                  "No jargon, no acronyms for the sake of sounding smart. If we can't explain it simply, we don't understand it well enough.",
              },
              {
                title: "Built to stick",
                description:
                  "The best solution in the world is useless if nobody uses it. We obsess over adoption and real-world fit.",
              },
              {
                title: "Start small, think big",
                description:
                  "We begin with what will make the biggest difference now, then grow from there. No boiling the ocean.",
              },
            ].map((value) => (
              <div key={value.title} className="rounded-xl border border-border/50 bg-card p-6">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">
              Let&apos;s figure it out together
            </h2>
            <p className="mt-4 text-muted-foreground">
              If any of this resonates, we should talk. No sales pitch &mdash; just
              a genuine conversation about where AI can help your business.
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
