"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ArrowUpRight, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Word-by-word reveal for the large heading
      const words = sectionRef.current?.querySelectorAll(".cta-word");
      if (words) {
        gsap.fromTo(
          words,
          { y: 80, opacity: 0, rotateX: 25 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.06,
            ease: "power4.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Subtext reveal
      gsap.fromTo(
        ".cta-sub",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Buttons reveal
      gsap.fromTo(
        ".cta-buttons",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const headline = "Let's Create Something Amazing";

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-32 md:py-44 px-6 lg:px-10 overflow-hidden"
    >
      {/* Background decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-black/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Large CTA headline with word-by-word animation */}
        <h2 className="text-[2.8rem] pb-2 sm:text-[4rem] lg:text-[6rem] font-heading font-bold text-black leading-[1.05] mb-8 overflow-hidden">
          {headline.split(" ").map((word, i) => (
            <span
              key={i}
              className="cta-word inline-block mr-[0.25em]"
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Subtext */}
        <p className="cta-sub text-lg sm:text-xl text-black/50 max-w-xl mx-auto mb-12">
          Have a project in mind or just want to say hello? Let's work
          together to build something extraordinary.
        </p>

        {/* Buttons */}
        <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:besukalgobena@gmail.com"
            target="blank"
            className="btn-pill-dark gap-2 group text-base px-8"
          >
            <Mail className="w-4 h-4" />
            besukalgobena@gmail.com
          </Link>
          <Link
            href="/contact"
            className="btn-pill-outline gap-2 group text-base px-8"
          >
            Send a Message
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
