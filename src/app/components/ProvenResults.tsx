"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Constants for card dimensions and spacing
type Item = { id: number; title: string };
const CARD_WIDTH = 350;
const CARD_HEIGHT = 480;
const GAP = 64;

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

  // Sample items for carousel
  const items: Item[] = [
    { id: 1, title: "SuperWalk" },
    { id: 2, title: "Arbitrum" },
    { id: 3, title: "Tokyobeast" },
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
                {/* Card placeholder content */}
                <div className="h-full flex flex-col items-center justify-center">
                  <p className="text-[#BBA98D] mb-2">{item.title}</p>
                  <p className="text-sm text-[#888]">…</p>
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
