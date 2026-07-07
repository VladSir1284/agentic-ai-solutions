import { Hero } from "./components/Hero";
import { PositioningBlock } from "./components/PositioningBlock";
import { Solution } from "./components/Solution";
import { EvalBlock } from "./components/EvalBlock";
import "./assets/styles/main_page.css";

export default function Home() {
  return (
    <main>
      <div className="main-page-content">
        <Hero />
        <PositioningBlock />
      </div>
      <Solution />
      <EvalBlock />
    </main>
  );
}
