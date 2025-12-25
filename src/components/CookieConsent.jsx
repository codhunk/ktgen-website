"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };
// jnfjkds
  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem("cookieConsent", "dismissed");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-6">
      <div
        className="
          relative
          mx-auto max-w-6xl
          bg-[#5b931b]
          backdrop-blur-xl
          border border-white/20
          shadow-[0_-10px_30px_rgba(0,0,0,0.18)]
          rounded-lg
          px-6 py-5
          flex flex-col md:flex-row
          items-start md:items-center
          gap-6"
      >
        {/* Close Icon (Top Right) */}
        <button
          onClick={handleClose}
          className="
            absolute top-3 right-3
            text-white
            text-lg
            hover:opacity-80
            transition
          "
          aria-label="Close cookie banner"
        >
          ✕
        </button>

        {/* Content */}
        <div className="flex gap-4 items-start">
          <div className="hidden sm:flex h-10 w-10 rounded-full bg-white/20 items-center justify-center text-white">
            🍪
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">
              We respect your privacy
            </h4>
            <p className="mt-1 text-sm text-white/90 leading-relaxed max-w-2xl">
              We use cookies to enhance your browsing experience, analyze website
              traffic, and improve our services. Learn more in our{" "}
              <a
                href="/privacy-policy"
                className="underline font-medium text-white hover:text-white/80"
              >
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={handleReject}
            className="
              px-4 py-2
              text-sm font-medium
              rounded-lg
              border border-white/50
              text-white
              hover:bg-white/10
              transition
            "
          >
            Reject
          </button>

          <button
            onClick={handleAccept}
            className="
              px-5 py-2
              text-sm font-semibold
              rounded-lg
              bg-white
              text-[#75c120]
              hover:bg-white/90
              transition
              shadow-sm
            "
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
