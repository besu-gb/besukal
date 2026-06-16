"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { use } from "react";

export default function ProjectCaseStudy({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  
  const project = {
    title: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    category: "Full-Stack Development",
    year: "2026",
    description: "An advanced application demonstrating seamless UI interactions, robust state management, and real-time backend integrations.",
    challenge: "The primary challenge was to handle millions of data points smoothly on the client without blocking the main thread, while maintaining an ultra-sleek, Apple-like user experience with GSAP.",
    solution: "I implemented a custom WebWorker architecture combined with React Server Components, pushing heavy computations off the main thread. On the frontend, I used GSAP ScrollTrigger to orchestrate complex timeline animations that remain performant at 60fps.",
    stack: ["Next.js", "React", "TypeScript", "GSAP", "Tailwind CSS", "Node.js"],
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-10 max-w-4xl mx-auto">
      <Link href="/projects" className="inline-flex items-center gap-2 text-black/50 hover:text-black transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" />
        <span className="font-medium">Back to Work</span>
      </Link>

      <div className="mb-16">
        <p className="text-black/50 font-medium tracking-widest uppercase mb-4">{project.category} • {project.year}</p>
        <h1 className="text-5xl lg:text-7xl font-sans font-bold text-black mb-6 tracking-tight">{project.title}</h1>
        <p className="text-xl text-black/70 leading-relaxed">{project.description}</p>
        
        <div className="flex gap-4 mt-8">
          <button className="btn-pill-dark gap-2">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </button>
          <button className="btn-pill-outline gap-2">
            <Code2 className="w-4 h-4" />
            Source Code
          </button>
        </div>
      </div>

      <div className="w-full h-[400px] lg:h-[500px] rounded-3xl glass-panel-light relative overflow-hidden mb-16 flex items-center justify-center bg-black/5 border-black/10">
        <span className="text-black/30 font-sans font-medium">Project Hero Image Placeholder</span>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 flex flex-col gap-12">
          <section>
            <h2 className="text-2xl font-sans font-bold text-black mb-4 tracking-tight">The Challenge</h2>
            <p className="text-black/70 leading-relaxed">{project.challenge}</p>
          </section>
          <section>
            <h2 className="text-2xl font-sans font-bold text-black mb-4 tracking-tight">The Solution</h2>
            <p className="text-black/70 leading-relaxed">{project.solution}</p>
          </section>
        </div>
        
        <div className="flex flex-col gap-8">
          <section className="glass-panel-light bg-white/60 p-6 rounded-2xl">
            <h3 className="text-lg font-sans font-bold text-black mb-4 tracking-tight">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-black/5 text-black/80 text-sm border border-black/5">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
