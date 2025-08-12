"use client";

// ----------------------------------------------------
// Header Component
// ----------------------------------------------------
// • Fixed at the very top of the viewport
// • Desktop (lg ≥1024px): logo + inline nav + CTA button
// • Mobile (<lg): logo + hamburger → dropdown panel overlay
//   - If the menu is open and the viewport resizes to lg or above,
//     the menu automatically closes via matchMedia listener.
// ----------------------------------------------------

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageSwitch from "@/components/ui/LanguageSwitch";

type Locale = "en" | "ja";
type HeaderT = {
  nav: {
    about: string;
    caseStudies: string;
    services: string;
    questPlatform: string;
  };
  cta: { apply: string };
};

export default function Header({
  locale,
  setLocale,
  t,
}: {
  locale: Locale;
  setLocale: React.Dispatch<React.SetStateAction<Locale>>;
  t: HeaderT;
}) {
  // --------------------------------------------------
  // state: whether the mobile dropdown is open
  // --------------------------------------------------
  const [open, setOpen] = useState(false);

  // --------------------------------------------------
  // Close the mobile menu automatically when viewport
  // widens to the lg breakpoint (≥1024px)
  // --------------------------------------------------
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setOpen(false);
    };

    // initial check + listener
    handleChange(mql);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // ----- Navigation items ----------------------------------------------
  const links = [
    { label: t.nav.about, href: "#hero", external: false },
    { label: t.nav.caseStudies, href: "#proven-results", external: false },
    { label: t.nav.services, href: "#full-funnel-growth", external: false },
    // mark this one external:
    {
      label: t.nav.questPlatform,
      href: "https://quest.0xqube.xyz/en",
      external: true,
    },
  ] as const;

  // --------------------------------------------------
  // render
  // --------------------------------------------------
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-5 py-[18.5px]">
      {/* inner frame */}
      <div className="flex h-[50px] w-full max-w-[1000px] items-center justify-between rounded-md bg-[#2B2B2B] px-4">
        {/* logo */}
        <Link href="#" className="flex shrink-0 items-center gap-2">
          <Image src="/logo-text.svg" alt="QUBE" width={100} height={100} />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-5 text-[16px] font-medium lg:flex">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BBA98D] transition-colors duration-200 hover:text-[#D5B77A]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#BBA98D] transition-colors duration-200 hover:text-[#D5B77A]"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:inline-flex flex gap-4">
          {/* Language selection control: toggles between English (EN) and Japanese (JA) */}
          {/* Temporarily disabled for production release until translations are finalized */}
          {/*
          <LanguageSwitch
            locale={locale}
            onLocaleChange={(l) => setLocale(l)}
          />
          */}

          {/* desktop CTA */}
          <Link
            href="https://form.typeform.com/to/ZXMA01GK?typeform-source=t.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[250px] items-center justify-center rounded-md bg-[#D5B77A] px-3 text-[19px] font-semibold text-[#1C1C1C] transition hover:opacity-90"
          >
            {t.cta.apply}
          </Link>
        </div>

        {/* mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="p-2 text-[#D5B77A] lg:hidden"
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-40 flex justify-center px-5 py-[18.5px]"
          >
            <div className="flex w-full max-w-[1000px] flex-col rounded-md bg-[#2B2B2B] shadow-lg">
              {/* top bar inside dropdown */}
              <div className="flex h-[60px] items-center justify-between px-4">
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/logo-text.svg"
                    alt="QUBE"
                    width={100}
                    height={100}
                  />
                </Link>
                <button
                  aria-label="Close Menu"
                  onClick={() => setOpen(false)}
                  className="p-1 text-[#D5B77A]"
                >
                  <X size={26} />
                </button>
              </div>

              {/* nav links */}
              <nav className="flex flex-col gap-2 px-6 pb-6 text-[25px] font-medium">
                {links.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#BBA98D] transition hover:text-[#D5B77A]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-[#BBA98D] transition hover:text-[#D5B77A]"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </nav>

              {/* Language selection control: toggles between English (EN) and Japanese (JA) */}
              {/* Temporarily disabled for production release until translations are finalized */}
              {/*
              <div className="text-center mb-3">
                <LanguageSwitch
                  locale={locale}
                  onLocaleChange={(l) => setLocale(l)}
                />
              </div>
              */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
