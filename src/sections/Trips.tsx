import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import TripCards from "../components/TripCards";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Trips = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Create refs for our elements
  const containerRef = useRef(null);
  const rocketRef = useRef(null);

  // Use the useGSAP hook to set up the animation
  useGSAP(
    () => {
      // Set initial position
      gsap.set(rocketRef.current, {
        x: 0,
        y: window.innerHeight * 0.8, // Start near bottom
        transformOrigin: "center center",
        opacity: 1, // Start fully visible
      });

      // Create the ScrollTrigger
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom", // Start when top of container hits bottom of viewport
        end: "bottom top", // End when bottom of container hits top of viewport
        scrub: 1, // Smooth scrubbing with 1 second lag
        markers: false, // Helpful during development, remove in production
        onUpdate: (self) => {
          const progress = self.progress;

          const r = window.innerHeight * 0.4; // radius
          const h = window.innerWidth / 2; // x-center of arc
          const k = window.innerHeight * 0.5; // y-center of arc

          // Move from left to right across the arc
          const x = h - r + 2 * r * progress - 100;

          // Clamp to avoid sqrt of negative
          const dx = x - h;
          const underRoot = r * r - dx * dx;

          const y = underRoot >= 0 ? k - Math.sqrt(underRoot) : k;

          // Calculate opacity based on vertical position
          // Start fading when the rocket reaches halfway up the screen
          const topThreshold = window.innerHeight * 0.2; // Point where fade begins
          let opacity = 1;

          if (y < topThreshold) {
            // Linear fade out as it approaches the top
            // Map y from [0, topThreshold] to [0, 1] for opacity
            opacity = Math.max(0, y / topThreshold);
          }

          gsap.set(rocketRef.current, {
            x: x,
            y: y,
            rotation: progress * 30,
            opacity: opacity, // Apply the calculated opacity
          });
        },
      });
    },
    { scope: containerRef }
  ); // Scope animations to the container

  return (
    <div
      id="price"
      ref={containerRef}
      className="bg-[url('./images/star-bg.png')] bg-cover h-screen w-full mt-4 md:mt-6 overflow-x-hidden"
    >
      <h2 className="text-gradient text-3xl md:text-5xl">Trips and Packages</h2>

      {!isMobile ? (
        <div id="rocket" ref={rocketRef} className="z-1  text-7xl select-none">
          <img className="size-32" src="/images/rocket.png" alt="rocket" />
        </div>
      ) : null}

      <div className="flex gap-12 flex-col md:flex-row items-center justify-between p-10">
        <TripCards
          planet="./images/sun.png"
          title="sun"
          desc="Experience the scorching heat of our solar system's star from a safe distance"
          cardColor="bg-gradient-to-tl from-yellow-100 to-amber-400"
          price="2.5 million"
        />
        <TripCards
          planet="./images/mars.png"
          title="mars"
          desc="Explore the red planet's vast canyons and ancient river valleys"
          cardColor="bg-gradient-to-tl from-slate-100 to-orange-400"
          price="1.8 million"
        />
        <TripCards
          planet="./images/saturn.png"
          title="saturn"
          desc="Witness the majestic rings of the solar system's most beautiful planet"
          cardColor="bg-gradient-to-tl from-cyan-700 via-amber-600 to-yellow-700"
          price="3.7 million"
        />
        <TripCards
          planet="./images/black-hole.png"
          title="gaiabh1"
          desc="Journey to the edge of a black hole for the ultimate spacetime experience"
          cardColor="bg-gradient-to-tl from-yellow-200 via-orange-600 to-slate-900"
          price="8.9 million"
        />
      </div>

      {/* <ShootingStars starColor="#6adc99" trailColor="#745494" maxSpeed={5} /> */}
      {/* <StarsBackground starDensity={0.0003} minTwinkleSpeed={1} /> */}
    </div>
  );
};

export default Trips;
