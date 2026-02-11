"use client";

import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import Script from "next/script";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-8G9H5Y007E";

export function CookieBanner() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = getCookieConsentValue("aspiro-cookie-consent");
    setHasConsent(consent === "true");
  }, []);

  return (
    <>
      {hasConsent && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
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
        onAccept={() => setHasConsent(true)}
        onDecline={() => setHasConsent(false)}
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
