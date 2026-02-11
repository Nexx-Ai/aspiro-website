import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-bold">
              <span className="text-purple">Aspiro</span> AI
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Empowering your ambitions with AI that fits your business.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Pages</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/aipa" className="transition-colors hover:text-foreground">
                  AIPA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact" className="transition-colors hover:text-foreground">
                  Book a Call
                </Link>
              </li>
              <li>
                <a
                  href="mailto:enquiries@aspiroai.digital"
                  className="transition-colors hover:text-foreground"
                >
                  enquiries@aspiroai.digital
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <p className="text-sm text-muted-foreground">
              Aspiro AI Ltd
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Aspiro AI Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
