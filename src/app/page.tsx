// src/app/page.tsx  — Landing page entry
// --------------------------------------------------
// Renders the fixed <Header/> and stacks the remaining
// one-page sections (Hero, …) below it.
//---------------------------------------------------

import Header from "@/app/components/Header"; // fixed site-wide
import Hero from "@/app/components/Hero"; // top section

/** Main landing page */
export default function Home() {
  return (
    <>
      {/* Fixed header at top */}
      <Header />

      <main>
        <Hero />

        {/*
          ── future sections go here ──
          <Features />
          <Services />
          <Footer />
        */}
      </main>
    </>
  );
}
