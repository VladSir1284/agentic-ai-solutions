import { Hero } from "./components/Hero";
import { PositioningBlock } from "./components/PositioningBlock";
import { Solution } from "./components/Solution";
import { Expertise } from "./components/Expertise";
import { KPISection } from "./components/KPISection";
import { CTA } from "./components/CTA";
import "./assets/styles/main_page.css";

export default function Home() {
  return (
    <main>
      <div className="main-page-content">
        <Hero />
        <PositioningBlock />
      </div>
      <Solution />
      {/* <Expertise />
      <KPISection />
      <CTA /> */}
    </main>
  );
}
