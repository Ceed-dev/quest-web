"use client";

// -----------------------------------------------------------------------------
// Hero Section Component
// -----------------------------------------------------------------------------
// Mobile (default): inline Image at header offset
// Desktop (md+): CSS background and responsive padding

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type HeroT = {
  heading1: string;
  heading2: string;
  heading3: string;
  subHeading: string;
  description1: string;
  description2: string;
  description3: string;
  cta: string;
  trustedBy: string;
};

export default function Hero({ t }: { t: HeroT }) {
  // Partner logos with project names
  const partners = [
    { name: "Delabs", src: "/hero/partners/delabs.png" },
    { name: "FARCANA", src: "/hero/partners/farcana.png" },
    { name: "Sapien", src: "/hero/partners/sapien.jpg" },
    { name: "Star heroes", src: "/hero/partners/star-heroes.jpg" },
    { name: "Gomble games", src: "/hero/partners/gomble-games.jpg" },
    { name: "Goat gaming", src: "/hero/partners/goat-gaming.png" },
    { name: "okto", src: "/hero/partners/okto.jpg" },
    { name: "Rumble Kong", src: "/hero/partners/rumble-kong-league.jpg" },
    { name: "Overtake", src: "/hero/partners/overtake.png" },
    { name: "SuperWalk", src: "/hero/partners/superwalk.jpg" },
    { name: "Snpit", src: "/hero/partners/snpit.jpg" },
    { name: "Tokyo Beast", src: "/hero/partners/tokyo-beast.png" },
    { name: "Counter Fire", src: "/hero/partners/counter-fire.png" },
    { name: "Jannavi Pro", src: "/hero/partners/jannavi-pro.png" },
    { name: "Sleepagotchi", src: "/hero/partners/sleepagotchi.jpg" },
  ];

  const SEC_PER_ITEM = 2;
  const duration = partners.length * SEC_PER_ITEM;

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
            {t.heading1}
          </p>

          {/* Main headline */}
          <h1 className="mt-2 lg:mt-5 tracking-tight leading-[1.07] text-[28px] md:text-[50px] lg:text-[70px] text-[#D5B77A]">
            {t.heading2}
            <br />
            {t.heading3}
          </h1>

          {/* Sub-headline */}
          <p className="mt-5 lg:mt-10 text-[16px] lg:text-[30px] font-medium text-[#D5B77A]">
            {t.subHeading}
          </p>

          {/* Body copy with explicit line breaks per Figma */}
          <p className="mt-2 lg:mt-5 text-[13px] lg:text-[22px] leading-[1.2] text-[#BBA98D]">
            <span className="font-semibold">{t.description1}</span>
            <br />
            {t.description2}
            <br />
            {t.description3}
          </p>

          {/* Call to action link */}
          <Link
            href="https://form.typeform.com/to/ZXMA01GK?typeform-source=t.co"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 md:mt-10 lg:mt-20 inline-block text-[20px] lg:text-[30px] font-semibold text-[#F7E1D0] underline underline-offset-[10px] hover:text-[#D5B77A] transition"
          >
            {t.cta}
          </Link>

          {/* Trusted by marquee logos */}
          <div className="mt-5 md:mt-10 lg:mt-18">
            {/* Section label */}
            <p className="mb-6 text-[16px] lg:text-[24px] font-medium text-[#BBA98D]">
              {t.trustedBy}
            </p>
            {/* Marquee container */}
            <div className="mt-5 md:mt-10 md:w-[50vw] w-full overflow-hidden relative select-none">
              {/* Animated logo strip */}
              <motion.div
                className="flex gap-10 lg:gap-18 w-max"
                style={{ willChange: "transform" }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration, repeat: Infinity }}
              >
                {[...partners, ...partners].map((partner, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 flex-none"
                  >
                    <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] rounded-full overflow-hidden flex items-center justify-center">
                      <Image
                        src={partner.src}
                        alt={partner.name}
                        width={70}
                        height={70}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </div>
                    <span className="text-[#D5B77A] text-lg lg:text-xl font-medium whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
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
