"use client";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3, duration: 1, ease: "power2.inOut" }
    );

    gsap.fromTo(
      ".hero-p",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 0.5, stagger: 0.1, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <div
      id="hero"
      className=" font-display h-screen bg-black flex flex-col items-center justify-center gap-10 relative w-full"
    >
      <h1 className=" hero-text z-10 text-5xl md:text-9xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-br animate-pulse from-zinc-800 via-zinc-500 to-white">
        Astralis
      </h1>
      <p className=" hero-text z-10 text-xl md:text-3xl tracking-widest bg-clip-text text-transparent text-center bg-gradient-to-br from-zinc-800 via-zinc-500 to-white ">
        Beyond the Stars | Beyond Imagination.
      </p>
      <p className=" hero-p z-10 text-lg md:text-xl tracking-wide text-center text-white">
        Join the next generation of space travelers.
      </p>

      <button
        onClick={() => {
          const el = document.getElementById("contact");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
        className=" hero-text z-11 hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 font-display inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        Book Now!
      </button>

      <ShootingStars starColor="#6adc99" trailColor="#745494" maxSpeed={5} />
      <StarsBackground starDensity={0.0003} minTwinkleSpeed={1} />
    </div>
  );
}
