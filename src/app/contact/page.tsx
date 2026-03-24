"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [marketingConsent, setMarketingConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      marketingConsent,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <section className="flex min-h-[60vh] items-center py-20">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple/10">
            <CheckCircle2 className="h-8 w-8 text-purple" />
          </div>
          <h1 className="text-3xl font-bold">Thanks. We&apos;ll be in touch.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We aim to respond within 24 hours.
          </p>
          <p className="mt-2 text-muted-foreground">
            In the meantime, feel free to explore our{" "}
            <Link href="/services" className="text-purple underline underline-offset-4">
              services
            </Link>{" "}
            or read more{" "}
            <Link href="/about" className="text-purple underline underline-offset-4">
              about us
            </Link>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple">
              Get in Touch
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Let&apos;s talk.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              No pitch. No pressure. Just a genuine conversation about where AI
              can help your business. Fill in the form and we&apos;ll come back to you
              within 24 hours.
            </p>

            <ul className="mt-10 space-y-3">
              {[
                "A relaxed, no-pressure conversation",
                "We'll ask about your business and goals",
                "Honest advice on where AI can (and can't) help",
                "Clear next steps if you want to move forward",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl border border-border/50 bg-card p-6">
              <p className="text-sm font-medium">Aspiro AI Ltd</p>
              <p className="mt-2 text-sm text-muted-foreground">
                AI consultancy helping SMEs put AI to work
                with a human-first approach.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border/60 bg-card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Smith"
                    className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company *
                  </label>
                  <input
                    id="company"
                    name="company"
                    required
                    placeholder="Acme Ltd"
                    className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@acme.com"
                  className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple/50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium">
                  What can we help with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit about your business and what you're looking to achieve."
                  className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple/50 resize-none"
                />
              </div>

              <p className="text-xs text-muted-foreground">
                We&apos;ll use the information you provide to respond to your enquiry.
                We will not share your data with third parties. See our{" "}
                <Link href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>{" "}
                for full details.
              </p>

              <div className="flex items-start gap-3">
                <input
                  id="marketing"
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 cursor-pointer accent-purple"
                />
                <label htmlFor="marketing" className="text-sm font-normal text-muted-foreground cursor-pointer">
                  I&apos;d like to receive occasional updates from Aspiro AI. (Optional)
                </label>
              </div>

              {state === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again shortly.
                </p>
              )}

              <Button
                type="submit"
                disabled={state === "submitting"}
                className="w-full bg-purple hover:bg-[var(--color-accent-purple)] text-white"
              >
                {state === "submitting" ? "Sending…" : "Send message"}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
