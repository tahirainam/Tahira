// src/hooks/useGsapAnimations.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function gsapAnimations() {
  useEffect(() => {
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.from(section, {
    y: 50,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%",   // waits until section is near the bottom
      end: "bottom 60%",  // optional: defines when animation is done
      toggleActions: "play none none reverse", 
      // markers: true,  // remove when done debugging
    },
  });
});

  }, []);
}

export default gsapAnimations;