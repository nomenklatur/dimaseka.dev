"use client"
import Navbar from "./components/landing_page/Navbar";
import Hero from "./components/landing_page/Hero";
import Experience from "./components/landing_page/Experience";
import Projects from "./components/landing_page/Projects";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar/>
      <Hero />
      <Projects />
      <Experience />
    </div>
   );
}
