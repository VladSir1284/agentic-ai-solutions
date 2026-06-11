import { Expertise } from "./components/Expertise";
import { PositioningBlock } from "./components/PositioningBlock";
import { KPISection } from "./components/KPISection";
import { InteractiveGraph } from "./components/InteractiveGraph";
import { Hero } from "./components/Hero";
import { Overview } from "./components/Overview";
import { CTA } from "./components/CTA";
import "./assets/styles/main_page.css";

export default function Home() {
  return (
    <main>
      <div className="main-page-content">
        <Hero />
        <PositioningBlock />
      </div>
      <InteractiveGraph />
      <Overview />
      <Expertise />
      <KPISection />
      <CTA />
    </main>
  );
}
