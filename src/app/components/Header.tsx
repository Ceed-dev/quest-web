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

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// ----- Navigation items ----------------------------------------------
const LINKS = [
  { label: "About us", href: "#hero", external: false },
  { label: "Case Studies", href: "#proven-results", external: false },
  { label: "Services", href: "#full-funnel-growth", external: false },
  // mark this one external:
  {
    label: "Quest Platform",
    href: "https://quest.0xqube.xyz/en",
    external: true,
  },
] as const;

export default function Header() {
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

  // --------------------------------------------------
  // render
  // --------------------------------------------------
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-5 py-[18.5px]">
      {/* inner frame */}
      <div className="flex h-[50px] w-full max-w-[853px] items-center justify-between rounded-md bg-[#2B2B2B] px-4">
        {/* logo */}
        <Link href="#" className="flex shrink-0 items-center gap-2">
          <Image src="/logo-text.svg" alt="QUBE" width={100} height={100} />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-5 text-[16px] font-medium lg:flex">
          {LINKS.map((link) =>
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

        {/* desktop CTA */}
        <Link
          href="#"
          className="hidden lg:inline-flex items-center justify-center rounded-md bg-[#D5B77A] px-6 text-[19px] font-semibold text-[#1C1C1C] transition hover:opacity-90"
        >
          Apply to Work With Us
        </Link>

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
            <div className="flex w-full max-w-[853px] flex-col rounded-md bg-[#2B2B2B] shadow-lg">
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
                {LINKS.map((link) =>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
