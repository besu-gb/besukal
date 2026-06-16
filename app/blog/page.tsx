"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const filters = ["All", "Next.js", "GSAP", "TypeScript", "UI/UX"];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const posts = [
    {
      slug: "mastering-gsap-scrolltrigger",
      title: "Mastering GSAP ScrollTrigger in React",
      category: "GSAP",
      date: "Nov 12, 2026",
      desc: "Learn how to build buttery smooth scroll animations and pinned sections without sacrificing performance.",
    },
    {
      slug: "nextjs-server-components",
      title: "The Architecture of Next.js Server Components",
      category: "Next.js",
      date: "Oct 24, 2026",
      desc: "Deep dive into how RSCs fundamentally change how we fetch data and ship UI to the client.",
    },
    {
      slug: "advanced-typescript-patterns",
      title: "Advanced TypeScript Patterns for Scalable Apps",
      category: "TypeScript",
      date: "Sep 08, 2026",
      desc: "A collection of powerful TS patterns and utility types to make your enterprise codebases rock solid.",
    },
    {
      slug: "glassmorphism-css-secrets",
      title: "The Secrets of Perfect Glassmorphism in CSS",
      category: "UI/UX",
      date: "Aug 19, 2026",
      desc: "How to craft stunning, performant frosted glass effects using backdrop-filters and Tailwind CSS.",
    },
  ];

  const filteredPosts = activeFilter === "All" ? posts : posts.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl lg:text-7xl font-sans font-bold text-black mb-6 tracking-tight">Insights & Writing</h1>
        <p className="text-xl text-black/60 max-w-2xl leading-relaxed">
          Thoughts on creative development, software engineering, and designing digital experiences.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all",
              activeFilter === filter 
                ? "bg-black text-white shadow-md" 
                : "glass-panel-light bg-white/50 text-black/70 hover:text-black hover:bg-white/80"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col justify-between p-8 rounded-3xl glass-panel-light bg-white/60 hover:bg-white/90 hover:shadow-xl transition-all hover:-translate-y-1 h-full min-h-[300px]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-black/50 text-xs font-bold tracking-widest uppercase">{post.category}</span>
                <span className="text-black/40 text-sm">{post.date}</span>
              </div>
              <h2 className="text-2xl font-sans font-bold text-black mb-4 group-hover:text-black/80 transition-colors tracking-tight">{post.title}</h2>
              <p className="text-black/60 leading-relaxed">{post.desc}</p>
            </div>
            
            <div className="flex items-center gap-2 mt-8 text-black/50 group-hover:text-black transition-colors font-medium">
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
