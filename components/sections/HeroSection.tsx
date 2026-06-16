"use client";

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { Phone, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── Hero Entrance ──────────────────────────────────────────────
      const heroTl = gsap.timeline();

      heroTl
        .fromTo(
          ".hero-badge",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.2 }
        )
        .fromTo(
          ".hero-title-top",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-title-bottom",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-portrait",
          { y: 120, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: "power4.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-floating-left",
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          ".hero-floating-right",
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          ".hero-marquee",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full">
      {/* ════════════════════════════════════════════════════════════════
          1 · HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="hero-section relative min-h-screen flex flex-col items-center justify-start pt-32 px-6 lg:px-10 w-full max-w-7xl mx-auto overflow-hidden">
        {/* Badge */}
        <div className="hero-badge flex items-center justify-center gap-2 mb-6 z-10">
          <Star className="w-4 h-4 text-black/25" />
          <span className="text-sm font-medium text-black/60 uppercase tracking-widest px-4 py-1.5 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm">
            Certified Full-Stack
          </span>
          <Star className="w-4 h-4 text-black/25" />
        </div>

        {/* Titles */}
        <div className="text-center flex flex-col items-center z-20">
          <h1 className="hero-title-top hero-title text-[3.5rem] sm:text-[5rem] lg:text-[7.5rem] font-sans font-bold text-[#1a1a1a] leading-none tracking-tight">
            HI-IT'S ME BESUKAL!
          </h1>
          <h2 className="hero-title-bottom text-[3rem] sm:text-[4.5rem] lg:text-[7rem] text-[#1a1a1a] leading-[1.1] mt-2">
            <span className="font-sans font-light">Full-Stack </span>
            <span className="font-serif italic">Developer</span>
          </h2>
        </div>

        {/* Portrait */}
        <div className="hero-portrait absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[450px] lg:w-[550px] h-[380px] sm:h-[520px] lg:h-[680px] z-20 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/besukal.png"
              alt="Besukal"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Floating Left Card */}
        <div className="absolute left-4 lg:left-10 top-[65%] -translate-y-1/2 z-40 hidden md:block">
          <div className="glass-panel-light p-6 rounded-3xl w-72">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-lg text-black">40+</p>
                <p className="text-xs text-black/60">Projects Shipped</p>
              </div>
            </div>
            <p className="text-sm text-black/70 leading-relaxed">
              Trusted by startups and businesses globally to build scalable
              full-stack applications.
            </p>
          </div>
        </div>

        {/* Floating Right */}
        <div className="absolute right-4 lg:right-10 top-[65%] -translate-y-1/2 z-40 hidden md:block">
          <div className="w-64 flex flex-col gap-6">
            <p className="text-base text-black/70 leading-relaxed font-medium">
              Passionate developer crafting intuitive, high-performance digital
              experiences that deliver real business value.
            </p>
            <Link href="/contact" className="btn-pill-dark w-max gap-2 group">
              Book a Call
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Phone className="w-3 h-3 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Marquee */}
        <div className="hero-marquee absolute bottom-10 left-0 right-0 z-20 overflow-hidden">
          <div className="flex w-max animate-marquee gap-16 px-6 items-center">
            {[
              "Next.js",
              "React",
              "Node.js",
              "TypeScript",
              "GSAP",
              "MongoDB",
              "Tailwind",
              "Next.js",
              "React",
              "Node.js",
              "TypeScript",
              "GSAP",
              "MongoDB",
              "Tailwind",
            ].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 opacity-30 hover:opacity-60 transition-all cursor-default"
              >
                <div className="w-6 h-6 bg-black/10 rounded flex items-center justify-center">
                  <span className="text-xs text-black font-bold">
                    {tech[0]}
                  </span>
                </div>
                <span className="text-xl font-sans font-bold text-black whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile floating elements */}
      <div className="md:hidden flex flex-col gap-6 px-6 py-10 relative bg-white/80 backdrop-blur-lg border-t border-black/5">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="font-bold text-lg text-black">40+ Projects Shipped</p>
        </div>
        <p className="text-base text-black/70 leading-relaxed font-medium">
          Passionate developer crafting intuitive, high-performance digital
          experiences that deliver real business value.
        </p>
        <Link href="/contact" className="btn-pill-dark w-full gap-2">
          Book a Call
          <Phone className="w-3 h-3 text-white" />
        </Link>
      </div>
    </div>
  );
}
