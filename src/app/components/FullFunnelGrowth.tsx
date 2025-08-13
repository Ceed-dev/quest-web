"use client";

import React from "react";
import Image from "next/image";

type FullFunnelGrowthT = {
  heading1: string;
  heading2: string;
  description: string;
};

export default function FullFunnelGrowth({
  t,
  lang,
}: {
  t: FullFunnelGrowthT;
  lang: "en" | "ja";
}) {
  // List of service card image paths (stored under /public/services)
  const cardFiles: string[] = [
    "media-pr.svg",
    "user-acquisition-growth.svg",
    "japan-asia-gtm-strategy.svg",
    "app-growth-aso-content.svg",
    "community-activation-events.svg",
    "ip-licensing-brand-partnerships.svg",
  ];
  const cards = cardFiles.map((file) => `/services/${lang}/${file}`);

  return (
    <section
      id="full-funnel-growth"
      className="
        bg-[#1C1C1C]    /* dark background */
        py-16 px-6     /* vertical & horizontal padding */
        lg:px-12       /* increased horizontal padding on large screens */
        min-h-screen   /* at least full viewport height */
      "
    >
      {/* Section Header */}
      <div
        className="
          mb-12                      /* space below header */
          md:flex                    /* horizontal layout from md up */
          md:items-end               /* align heading & description on baseline */
          md:justify-between         /* spread out heading & description */
          md:space-x-10              /* gap between heading & description */
        "
      >
        {/* Title */}
        <h2
          className="
            text-[35px] md:text-[45px]    /* responsive font sizes */
            font-semibold                 /* bold */
            text-[#D5B77A]                /* gold color */
            leading-[1.1]                 /* tighter line-height */
            md:w-1/2                      /* half width on md+ */
          "
        >
          {t.heading1}
          <br />
          {t.heading2}
        </h2>

        {/* Sub-title / Description */}
        <p
          className="
            mt-2                           /* small top margin on mobile */
            md:mt-0                        /* remove margin on md+ */
            text-[17px] md:text-[22px]    /* responsive font sizes */
            text-[#BBA98D]                /* muted gold color */
            md:w-1/2                      /* half width on md+ */
          "
        >
          {t.description}
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="
          grid
          grid-cols-1        /* 1 column on mobile */
          md:grid-cols-2     /* 2 columns from md up */
          lg:grid-cols-3     /* 3 columns from lg up */
          gap-2              /* small gap between cards */
        "
      >
        {cards.map((src, i) => (
          <div
            key={i}
            className="
              p-2                    /* padding inside each card */
              rounded-lg             /* rounded corners */
              flex items-center      /* center image vertically */
              justify-center         /* center image horizontally */
              w-full                 /* full available width */
              bg-transparent         /* no background color */
            "
          >
            {/* Service card image */}
            <Image
              src={src}
              alt={`Service card ${i + 1}`}
              width={0}
              height={0}
              unoptimized
              className="
                object-contain  /* maintain aspect ratio */
                w-full          /* full width of container */
                h-auto          /* height adjusts automatically */
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
