"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVentures Inc.",
    quote:
      "Working with Besukal was a game-changer for our platform. The attention to detail and performance optimization exceeded our expectations. Truly a full-stack powerhouse.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, WebCraft Agency",
    quote:
      "The level of creativity and technical skill Besukal brings is rare. Our client dashboard went from concept to production in record time, with zero compromises on quality.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Elena Rodriguez",
    role: "Product Lead, ScaleUp Labs",
    quote:
      "Besukal doesn't just write code — they craft experiences. The animations and interactions on our landing page increased engagement by 40%. Highly recommended.",
    avatar: "https://i.pravatar.cc/100?img=23",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll(".testimonial-card");
      if (!cards) {
        return;
      }

      gsap.fromTo(
        cards,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-24 md:py-32 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="section-label mb-4">Testimonials</div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black mb-4">
          What People Say
        </h2>
        <p className="text-lg text-black/50 mb-16 max-w-xl">
          Feedback from clients and collaborators I've had the pleasure of
          working with.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <Quote className="w-8 h-8 text-black/10 mb-6" />
              <p className="text-base text-black/70 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/80 shadow-sm flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-black">{t.name}</p>
                  <p className="text-xs text-black/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
