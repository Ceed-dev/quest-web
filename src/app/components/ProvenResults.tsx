"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Constants for card dimensions and spacing
const CARD_WIDTH = 350;
const CARD_HEIGHT = 500;
const GAP = 64;

// Represents a single statistic to display on a carousel card
type Stat = {
  /** Descriptive label for the statistic (e.g., "User Onboarded") */
  label: string;
  /** Display value for the statistic (e.g., "4.5K+") */
  value: string;
};

/**
 * Defines the shape of a carousel item, including an optional stats array.
 */
export type Item = {
  /** Unique identifier for each carousel item */
  id: number;
  /** Title text displayed on the card */
  title: string;
  /** URL or path to the icon image for this card */
  iconSrc: string;
  /** Optional array of statistics to render on the card */
  stats?: Stat[];
};

export default function ProvenResults() {
  // Ref to carousel container for centering calculations
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  // Calculate horizontal offset to center active card
  useEffect(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    setOffset((containerWidth - CARD_WIDTH) / 2);
  }, []);

  // Items for carousel
  const items: Item[] = [
    {
      id: 1,
      title: "SuperWalk",
      iconSrc: "/carousel/superwalk.svg",
    },
    {
      id: 2,
      title: "Arbitrum",
      iconSrc: "/carousel/arbitrum.svg",
      stats: [
        { label: "User Onboarded", value: "4.5K+" },
        { label: "Impressions", value: "250K+" },
        { label: "Total PRs", value: "40+" },
      ],
    },
    {
      id: 3,
      title: "Tokyobeast",
      iconSrc: "/carousel/tokyobeast.svg",
    },
  ];

  // Carousel index state and handlers
  const [index, setIndex] = useState(1);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(items.length - 1, i + 1));

  return (
    <section
      id="proven-results"
      className="bg-[#252525] py-16 px-6 lg:px-12 min-h-screen flex flex-col"
    >
      {/* Section heading and subheading */}
      <div className="mb-12">
        <h2 className="text-[35px] md:text-[50px] font-semibold text-[#D5B77A]">
          Proven Results, Real Growth
        </h2>
        <p className="mt-2 text-[17px] md:text-[22px] text-[#BBA98D]">
          A track record of driving results across Japan and Asia — from launch
          to scale.
        </p>
      </div>

      {/* Carousel wrapper */}
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full flex-1 flex items-center rounded-3xl border border-[#D5B77A] md:border-none shadow-[0_0_25px_rgba(213,183,122,0.6)] md:shadow-none bg-[#1C1C1C] md:bg-transparent"
      >
        {/* Motion container slides left/right based on index */}
        <motion.div
          className="flex items-center gap-16"
          animate={{ x: offset - index * (CARD_WIDTH + GAP) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item, i) => {
            const isActive = i === index;
            return (
              <div
                key={item.id}
                className={`
                  flex-shrink-0
                  w-[${CARD_WIDTH}px] h-[${CARD_HEIGHT}px]
                  p-6
                  rounded-3xl
                  transition-all
                  ${
                    isActive
                      ? "bg-[#1C1C1C] scale-105 md:border md:border-[#D5B77A] md:shadow-[0_0_25px_rgba(213,183,122,0.6)]"
                      : "bg-[#1A1A1A] opacity-40 md:border md:border-gray-300"
                  }
                `}
              >
                {/* Card content: icon, title and optional stats */}
                <div className="h-full flex flex-col items-center justify-center">
                  {/* Icon */}
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={90}
                    height={90}
                    className="rounded-3xl"
                    unoptimized
                  />

                  {/* Title */}
                  <h3 className="text-[#D5B77A] text-[50px] font-semibold">
                    {item.title}
                  </h3>

                  {/* Optional stats list */}
                  {item.stats && (
                    <ul className="text-center space-y-3">
                      {item.stats.map((stat) => (
                        <li key={stat.label}>
                          <span className="text-[25px] text-[#BBA98D]">
                            {stat.label}
                          </span>
                          <span className="block font-semibold text-[25px] text-[#F7E1D0]">
                            {stat.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-lg bg-[#D5B77A]/20 hover:bg-[#D5B77A] text-white text-2xl"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-lg bg-[#D5B77A]/20 hover:bg-[#D5B77A] text-white text-2xl"
        >
          ›
        </button>
      </div>
    </section>
  );
}
