import { Navigation } from "@/components/Navigation";
import { SectionHero } from "@/components/SectionHero";
import { SectionHowItWorks } from "@/components/SectionHowItWorks";
import { SectionPricing } from "@/components/SectionPricing";
import { SectionWhatAISees } from "@/components/SectionWhatAISees";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      {/* Gradient overlay matching Figma — fades from transparent to warm beige on the right */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, rgba(39,57,112,0) 55%, rgba(205,193,189,0.15) 100%)",
        }}
      />

      <div className="relative z-10">
        <Navigation />
        <main>
          <SectionHero />
          <SectionHowItWorks />
          <SectionPricing />
          <SectionWhatAISees />
        </main>
        <Footer />
      </div>
    </div>
  );
}
