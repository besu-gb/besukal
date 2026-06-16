"use client";

import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { use } from "react";

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <article className="min-h-screen pt-32 pb-20 px-6 lg:px-10 max-w-3xl mx-auto">
      <Link href="/blog" className="inline-flex items-center gap-2 text-black/50 hover:text-black transition-colors mb-12 font-medium">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Insights</span>
      </Link>

      <header className="mb-16">
        <div className="flex items-center gap-4 mb-6 text-sm">
          <span className="text-black/50 font-bold tracking-widest uppercase">Development</span>
          <span className="w-1 h-1 rounded-full bg-black/20" />
          <span className="text-black/50">Oct 24, 2026</span>
          <span className="w-1 h-1 rounded-full bg-black/20" />
          <span className="text-black/50">5 min read</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-black leading-[1.1] mb-8 tracking-tight">
          {title}
        </h1>
        <div className="flex items-center justify-between py-6 border-y border-black/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-black/5">
              <img src="/person png.png" alt="Besukal" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="font-bold text-black font-sans">Besukal</p>
              <p className="text-sm text-black/50">Creative Developer</p>
            </div>
          </div>
          <button className="p-3 rounded-full glass-panel-light bg-white/60 text-black hover:bg-white transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="prose prose-lg max-w-none text-black/70">
        <p className="lead text-xl text-black/90 font-medium">
          This is a placeholder for the blog post content. In a real application, you would fetch this content from an MDX file or a CMS like Sanity.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="text-2xl font-sans font-bold text-black mt-8 mb-4">The Architecture</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <blockquote className="border-l-4 border-black/20 pl-4 my-6 italic text-black/60 font-serif text-xl">
          "Design is not just what it looks like and feels like. Design is how it works."
        </blockquote>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </article>
  );
}
