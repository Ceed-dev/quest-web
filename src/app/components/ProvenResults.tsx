"use client";

import React from "react";

/**
 * ProvenResults Section
 * Displays a heading, subheading, and a placeholder for the results carousel/cards.
 */
export default function ProvenResults() {
  return (
    <section
      id="proven-results"
      className="bg-[#252525] py-16 px-6 lg:px-12 min-h-screen"
    >
      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-[35px] md:text-[50px] font-semibold text-[#D5B77A]">
          Proven Results, Real Growth
        </h2>
        <p className="mt-2 text-[17px] md:text-[22px] text-[#BBA98D]">
          A track record of driving results across Japan and Asia — from launch
          to scale.
        </p>
      </div>

      {/* Main content placeholder (e.g. Carousel or Cards) */}
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          {/* TODO: Insert carousel or result cards here */}
        </div>
      </div>
    </section>
  );
}
