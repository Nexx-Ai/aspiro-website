"use client";

import CookieConsent from "react-cookie-consent";

export function CookieBanner() {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="aspiro-cookie-consent"
        style={{
          background: "hsl(var(--card))",
          borderTop: "1px solid hsl(var(--border))",
          padding: "1rem",
        }}
        buttonStyle={{
          background: "hsl(var(--purple))",
          color: "white",
          borderRadius: "0.5rem",
          padding: "0.5rem 1.5rem",
          fontWeight: "500",
        }}
        declineButtonStyle={{
          background: "transparent",
          border: "1px solid hsl(var(--border))",
          color: "hsl(var(--foreground))",
          borderRadius: "0.5rem",
          padding: "0.5rem 1.5rem",
          fontWeight: "500",
        }}

      >
        <span style={{ fontSize: "0.875rem" }}>
          We use cookies to analyse site traffic and improve your experience.{" "}
          <a href="/privacy" style={{ color: "hsl(var(--purple-light))", textDecoration: "underline" }}>
            Learn more
          </a>
        </span>
      </CookieConsent>
    </>
  );
}
