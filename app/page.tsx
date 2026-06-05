import { LanguageProvider } from "./components/LanguageContext";
import { Header } from "./components/Header";
import { Expertise } from "./components/Expertise";
import { PositioningBlock } from "./components/PositioningBlock";
import { KPISection } from "./components/KPISection";
import { InteractiveGraph } from "./components/InteractiveGraph";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Overview } from "./components/Overview";
import { CTA } from "./components/CTA";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* <Main /> */}
          <Hero />
          <PositioningBlock />
          <InteractiveGraph />
          <Overview />
          <Expertise />
          <KPISection />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
