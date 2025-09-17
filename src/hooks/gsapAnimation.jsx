// src/hooks/useGsapAnimations.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function gsapAnimations() {
  useEffect(() => {
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.fromTo(
  section,
  { opacity: 0, y: 20 }, // start
  {
    opacity: 1,
    y: 0, // end
    duration: 0.5,
    scrollTrigger: {
      trigger: section,
      start: "top 90%", // animate when section is in viewport
      end: "top 70%",   // adjust how far the scroll should scrub
      scrub: 5,
      //markers: true,
    },
    ease: "power2.inOut",
  });
});

  }, []);
}

export default gsapAnimations;