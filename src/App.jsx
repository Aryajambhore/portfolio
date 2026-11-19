import "./css/App.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Projects, About, Skills, Journey, Contact } from "./components/Sections";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 32,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      // fill the little charts when they scroll into view
      gsap.utils.toArray(".bar-fill, .prob-fill").forEach((el) => {
        gsap.from(el, {
          width: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}

export default App;
