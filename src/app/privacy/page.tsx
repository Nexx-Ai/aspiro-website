import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Aspiro AI handles your data and protects your privacy.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-muted-foreground">Last updated: February 2025</p>

      <div className="mt-12 space-y-8 text-muted-foreground">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Who we are</h2>
          <p className="mt-2">
            Aspiro AI Ltd is an AI consultancy based in the United Kingdom. Our website address is: https://aspiroai.digital
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">What data we collect</h2>
          <p className="mt-2">
            When you visit our website, we may collect:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Information you provide via contact forms (name, email, message)</li>
            <li>Analytics data about how you use our site (pages visited, time on site)</li>
            <li>Technical data (IP address, browser type, device information)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">How we use cookies</h2>
          <p className="mt-2">
            We use cookies to understand how visitors interact with our website. We use Google Analytics to collect anonymous usage data. These cookies are only set if you accept them via our cookie consent banner.
          </p>
          <p className="mt-2">
            You can choose to decline cookies, and we will not track your visit.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">How we protect your data</h2>
          <p className="mt-2">
            We take reasonable precautions to protect your personal information. Any data you provide is stored securely and only accessed when necessary to provide our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">Your rights</h2>
          <p className="mt-2">
            Under GDPR, you have the right to:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">Contact us</h2>
          <p className="mt-2">
            If you have any questions about this privacy policy or how we handle your data, please contact us at{" "}
            <a href="mailto:hello@aspiroai.digital" className="text-purple-light hover:underline">
              hello@aspiroai.digital
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
