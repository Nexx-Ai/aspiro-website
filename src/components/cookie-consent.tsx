"use client";

import { useState, useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import Script from "next/script";

const COOKIE_NAME = "aspiro-cookie-consent";

export function CookieBanner({ gaId }: { gaId?: string }) {
  const [gaEnabled, setGaEnabled] = useState(false);

  // Returning visitors: consent cookie already set — load GA immediately
  useEffect(() => {
    if (getCookieConsentValue(COOKIE_NAME) === "true") {
      setGaEnabled(true);
    }
  }, []);

  return (
    <>
      {gaEnabled && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName={COOKIE_NAME}
        onAccept={() => setGaEnabled(true)}
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
