"use client";

// -----------------------------------------------------------------------------
// Hero Section Component
// -----------------------------------------------------------------------------
// Mobile (default): inline Image at header offset
// Desktop (md+): CSS background and responsive padding

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  // Partner logo paths for marquee
  const logos = [
    "/logo-text.svg",
    "/logo-text.svg",
    "/logo-text.svg",
    "/logo-text.svg",
    "/logo-text.svg",
  ];

  return (
    <section
      id="hero"
      className={`
        relative overflow-hidden bg-[#1C1C1C] min-h-screen
        bg-none
        md:bg-[url('/hero/bg-desktop.svg')] md:bg-no-repeat md:bg-right md:bg-contain
        md:pt-[150px]
      `}
      style={{ minHeight: "100vh" }}
    >
      {/* Mobile hero image positioned below header */}
      <Image
        src="/hero/bg-mobile.svg"
        alt="Hero background mobile"
        width={1000} // intrinsic ratio: does not limit width
        height={600}
        className="block md:hidden mt-[87px] w-full h-auto object-cover object-top"
        priority
      />

      {/* Main container: flex column mobile, row desktop */}
      <div className="mx-auto w-full flex flex-col lg:flex-row px-6 lg:px-12 pb-14">
        {/* Text column */}
        <div className="flex-1">
          {/* Eyebrow label */}
          <p className="text-[#F7E1D0] tracking-tighter text-[20px] lg:text-[40px] leading-none">
            ASIA&apos;S LEADING
          </p>

          {/* Main headline */}
          <h1 className="mt-2 lg:mt-5 tracking-tight leading-[1.07] text-[28px] md:text-[50px] lg:text-[70px] text-[#D5B77A]">
            PERFORMANCE‑BASED
            <br />
            MARKETING AGENCY
          </h1>

          {/* Sub-headline */}
          <p className="mt-5 lg:mt-10 text-[16px] lg:text-[30px] font-medium text-[#D5B77A]">
            Pay for results. Not hours.
          </p>

          {/* Body copy with explicit line breaks per Figma */}
          <p className="mt-2 lg:mt-5 text-[13px] lg:text-[22px] leading-[1.2] text-[#BBA98D]">
            <span className="font-semibold">
              Full‑funnel marketing across Japan and Asia.
            </span>
            <br />
            We support games, apps, and brands from GTM strategy and
            <br />
            localization to user acquisition and long‑term growth.
          </p>

          {/* Call to action link */}
          <Link
            href="https://form.typeform.com/to/ZXMA01GK?typeform-source=t.co"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 md:mt-10 lg:mt-20 inline-block text-[20px] lg:text-[30px] font-semibold text-[#F7E1D0] underline underline-offset-[10px] hover:text-[#D5B77A] transition"
          >
            Start Scaling Today
          </Link>

          {/* Trusted by marquee logos */}
          <div className="mt-5 md:mt-10 lg:mt-18">
            {/* Section label */}
            <p className="mb-6 text-[16px] lg:text-[24px] font-medium text-[#BBA98D]">
              Trusted by
            </p>
            {/* Marquee container */}
            <div className="mt-5 md:mt-10 md:w-[50vw] w-full overflow-hidden relative select-none">
              {/* Animated logo strip */}
              <motion.div
                className="flex gap-10 lg:gap-18"
                animate={{ x: [0, "-100%"] }}
                transition={{ ease: "linear", duration: 8, repeat: Infinity }}
              >
                {[...logos, ...logos].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="partner"
                    width={0}
                    height={0}
                    className="w-auto h-[20px] lg:h-[45px]"
                    unoptimized
                  />
                ))}
              </motion.div>
              {/* Overlay for fade effect */}
              <div className="pointer-events-none absolute inset-0 bg-[#1C1C1C]/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
