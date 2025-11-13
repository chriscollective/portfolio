import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { LatestProject } from "./components/LatestProject";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Bubbles } from "./components/Bubbles";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="min-h-screen">
      <SpeedInsights />
      <Analytics />
      <Header />
      <main>
        <Bubbles />
        <Hero />
        <About />
        <Skills />
        <LatestProject />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
