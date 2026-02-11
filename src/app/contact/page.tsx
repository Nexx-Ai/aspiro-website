import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free call with Aspiro AI. No pitch, no pressure \u2014 just a conversation about where AI fits in your business.",
};

export default function ContactPage() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-purple-glow)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s talk
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              No pitch. No pressure. Just a genuine conversation about where AI
              can help your business. Pick a time that works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly + Contact Info */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Calendly Embed */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-xl border border-border/50">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/elsa-aspiroai/30min?background_color=0a0a0a&text_color=f5f5f5&primary_color=8B5CF6"
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            </div>

            {/* Direct Contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold">Prefer email?</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  No problem. Drop us a line and we&apos;ll get back to you within
                  24 hours.
                </p>
                <a
                  href="mailto:steve@aspiroai.digital"
                  className="mt-4 inline-block text-purple transition-colors hover:text-purple-light"
                >
                  steve@aspiroai.digital
                </a>
              </div>

              <div>
                <h2 className="text-xl font-bold">What to expect</h2>
                <ul className="mt-4 space-y-3">
                  {[
                    "A relaxed, no-pressure conversation",
                    "We'll ask about your business and goals",
                    "Honest advice on where AI can (and can't) help",
                    "Clear next steps if you want to move forward",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <p className="text-sm font-medium">Aspiro AI Ltd</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  AI consultancy helping SMEs harness artificial intelligence
                  with a human-first approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
