// src/app/page.tsx — Landing page entry
// --------------------------------------------------
// Displays the fixed <Header/> at the top,
// followed by stacked one-page sections (Hero, ProvenResults, FullFunnelGrowth),
// and ends with the <Footer/>.
// Adds simple locale state to switch EN/JA and passes texts to children.
// --------------------------------------------------

"use client"; // Required to use React hooks on this page

import { useState } from "react";
import { messages } from "@/lib/messages"; // Translation dictionary

import Header from "@/app/components/Header"; // Fixed site-wide header
import Hero from "@/app/components/Hero"; // Top hero section
import ProvenResults from "@/app/components/ProvenResults"; // Results/statistics section
import FullFunnelGrowth from "@/app/components/FullFunnelGrowth"; // Services/features grid section
import Footer from "@/app/components/Footer"; // Site-wide footer

type Locale = "en" | "ja";

/** Main landing page component */
export default function Home() {
  // Locale state: controls which language is rendered across the page
  const [locale, setLocale] = useState<Locale>("en");

  // Current message bundle for the selected locale
  const t = messages[locale];

  return (
    <>
      {/* Fixed header always visible at the top.
          Pass the current locale and a setter so the header can host the language switcher. */}
      <Header locale={locale} setLocale={setLocale} t={t.header} />

      {/* Main content sections.
          Pass only the slice each section needs to keep components simple. */}
      <main>
        <Hero t={t.hero} />
        <ProvenResults t={t.provenResults} />
        <FullFunnelGrowth t={t.fullFunnelGrowth} />
      </main>

      {/* Footer displayed at the bottom of the page */}
      <Footer t={t.footer} />
    </>
  );
}
