"use client"
import Navbar from "./components/landing_page/Navbar";
import Hero from "./components/landing_page/Hero";
import Experience from "./components/landing_page/Experience";
import Projects from "./components/landing_page/Projects";

export default function Home() {
  return (
    <div className="h-fit overflow-y-scroll snap-y snap-proximity">
      <Navbar/>
      <Hero />
      <Projects />
      <Experience />
    </div>
   );
}
