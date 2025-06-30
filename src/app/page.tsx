// src/app/page.tsx  — Landing page entry
// --------------------------------------------------
// Renders the fixed <Header/> and stacks the remaining
// one‑page sections (Hero, Features, …) below it.
// For now only a placeholder Hero section is shown.
//---------------------------------------------------

import Header from "@/app/components/Header";

/**
 * Main landing page
 */
export default function Home() {
  // NOTE: keep this value in sync with Header’s total outer height
  const HEADER_HEIGHT = 87; // px

  return (
    <>
      {/* Fixed Header */}
      <Header />

      {/* Page content – offset so it doesn’t hide under the header */}
      <main className={`pt-[${HEADER_HEIGHT}px]`}>
        {/* Hero Section (TODO: replace with real component) */}
        <section className="min-h-screen flex items-center justify-center bg-orange-200">
          <h1 className="text-3xl font-bold text-white">
            Hero section coming soon
          </h1>
        </section>
      </main>
    </>
  );
}
