"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: "ai-saas",
      title: "NeuroSync AI",
      category: "AI SaaS Platform",
      desc: "A high-performance AI collaboration workspace with real-time sync, custom LLM routing, and an intuitive dashboard.",
      year: "2026",
    },
    {
      id: "fintech-dash",
      title: "VaultFlow",
      category: "Fintech Dashboard",
      desc: "Financial analytics platform handling millions of data points with real-time WebGL charts and secure banking integrations.",
      year: "2025",
    },
    {
      id: "creative-portfolio",
      title: "Aura Motion",
      category: "Creative Development",
      desc: "An award-winning interactive experience showcasing complex GSAP timelines, 3D physics, and custom WebGL shaders.",
      year: "2024",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl lg:text-7xl font-sans font-bold text-black mb-6 tracking-tight">All Work</h1>
        <p className="text-xl text-black/60 max-w-2xl leading-relaxed">
          A collection of projects spanning AI products, fintech dashboards, and highly creative interactive experiences.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((p) => (
          <Link
            key={p.id}
            href={`/projects/${p.id}`}
            className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 rounded-3xl glass-panel-light hover:shadow-xl transition-all hover:-translate-y-1 bg-white/60"
          >
            <div>
              <p className="text-black/50 text-sm font-medium tracking-widest uppercase mb-2">{p.category} • {p.year}</p>
              <h2 className="text-3xl font-sans font-bold text-black mb-3">{p.title}</h2>
              <p className="text-black/60 max-w-xl leading-relaxed">{p.desc}</p>
            </div>
            
            <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black transition-colors shrink-0">
              <ArrowRight className="w-6 h-6 text-black group-hover:text-white transform -rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
