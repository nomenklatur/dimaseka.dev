"use client"
import Navbar from "./components/landing_page/Navbar";
import Hero from "./components/landing_page/Hero";
import Experience from "./components/landing_page/Experience";
import Projects from "./components/landing_page/Projects";
import Footer from "./components/landing_page/Footer";
import FloatingButton from "./components/landing_page/FloatingButton";

export default function Home() {
  return (
    <div className="h-fit overflow-y-scroll snap-y snap-proximity block">
      <Navbar/>
      <Hero />
      <FloatingButton />
      <Projects />
      <Experience />
      <Footer />
    </div>
   );
}
