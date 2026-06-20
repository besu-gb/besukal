import Link from "next/link";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/StackScroll";

const projects = [
  {
    id: "banking",
    title: "Banking Dashboard",
    description:
      "A modern fintech dashboard with real-time analytics, transaction tracking, and AI-powered spending insights.",
    image: "/projects/banking.png",
    tags: ["React", "TypeScript", "Tailwind", "Next.js"],
    color: "#0A0A0A",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with cart, checkout, inventory management, and payment processing.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    color: "#1A1A2E",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "A creative, high-performance portfolio with smooth scroll animations and a brutalist design aesthetic.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    color: "#16213E",
  },
  {
    id: "saas",
    title: "SaaS Analytics",
    description:
      "Analytics platform for SaaS businesses with dashboards, reports, and real-time data visualization.",
    image: "/projects/saas.png",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    color: "#0F3460",
  },
];

export function ProjectsSection() {
  return (
    <section className="relative w-full bg-white overflow-visible">
      <div className="max-w-7xl mx-auto relative px-6 lg:px-10">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="section-label mb-4">Projects</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black mb-4">
              What I Build
            </h2>
            <p className="text-lg text-black/50 max-w-xl">
              A collection of projects spanning AI products, fintech dashboards,
              and highly creative interactive experiences.
            </p>
          </div>
          <Link
            href="/projects"
            className="btn-pill-dark gap-2 group text-base px-8 hidden md:inline-flex"
          >
            All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

<div></div>
      {/* Scroll Stack Cards */}
      <ScrollStack
        useWindowScroll
        itemDistance={170}
        itemStackDistance={90}
        baseScale={0.94}
        itemScale={0.04}
      >

        {/* Project 1: Banking Dashboard */}
        <ScrollStackItem>
          <div className="relative w-full rounded-3xl overflow-visible shadow-2xl bg-[#0A0A0A]">
            <div className="flex flex-col lg:flex-row min-h-[400px] md:min-h-[480px]">
              {/* Image side */}
              <div className="relative w-full lg:w-1/2 h-52 sm:h-64 md:h-72 lg:h-auto overflow-hidden">
                <img
                  src="/projects/banking.png"
                  alt="Banking Dashboard"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:via-transparent lg:to-transparent" />
              </div>

              {/* Content side */}
              <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center text-white">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">React</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">TypeScript</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">Tailwind</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">Next.js</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">Banking Dashboard</h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-lg">
                    A modern fintech dashboard with real-time analytics, transaction tracking, and AI-powered spending insights.
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <Link href="/projects/banking" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-colors rounded-full px-5 py-2.5">
                      View Project <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                      <Code2 className="w-4 h-4" /> Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Project 2: E-Commerce Platform */}
        <ScrollStackItem>
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-[#1A1A2E]">
            <div className="flex flex-col lg:flex-row min-h-[400px] md:min-h-[480px]">
              {/* Image side */}
              <div className="relative w-full lg:w-1/2 h-52 sm:h-64 md:h-72 lg:h-auto overflow-hidden">
                <img
                  src="/projects/ecommerce.png"
                  alt="E-Commerce Platform"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:via-transparent lg:to-transparent" />
              </div>

              {/* Content side */}
              <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center text-white">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">Next.js</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">Stripe</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">Prisma</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">PostgreSQL</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">E-Commerce Platform</h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-lg">
                    Full-featured online store with cart, checkout, inventory management, and payment processing.
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <Link href="/projects/ecommerce" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-colors rounded-full px-5 py-2.5">
                      View Project <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                      <Code2 className="w-4 h-4" /> Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Project 3: Portfolio Website */}
        <ScrollStackItem>
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-[#16213E]">
            <div className="flex flex-col lg:flex-row min-h-[400px] md:min-h-[480px]">
              {/* Image side */}
              <div className="relative w-full lg:w-1/2 h-52 sm:h-64 md:h-72 lg:h-auto overflow-hidden">
                <img
                  src="/projects/portfolio.png"
                  alt="Portfolio Website"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:via-transparent lg:to-transparent" />
              </div>

              {/* Content side */}
              <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center text-white">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">Next.js</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">Framer Motion</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">GSAP</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">Tailwind CSS</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">Portfolio Website</h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-lg">
                    A creative, high-performance portfolio with smooth scroll animations and a brutalist design aesthetic.
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <Link href="/projects/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-colors rounded-full px-5 py-2.5">
                      View Project <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                      <Code2 className="w-4 h-4" /> Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Project 4: SaaS Analytics */}
        <ScrollStackItem>
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-[#0F3460]">
            <div className="flex flex-col lg:flex-row min-h-[400px] md:min-h-[480px]">
              {/* Image side */}
              <div className="relative w-full lg:w-1/2 h-52 sm:h-64 md:h-72 lg:h-auto overflow-hidden">
                <img
                  src="/projects/saas.png"
                  alt="SaaS Analytics"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:via-transparent lg:to-transparent" />
              </div>

              {/* Content side */}
              <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center text-white">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">React</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">D3.js</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">Node.js</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">MongoDB</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">SaaS Analytics</h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-lg">
                    Analytics platform for SaaS businesses with dashboards, reports, and real-time data visualization.
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <Link href="/projects/saas" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-colors rounded-full px-5 py-2.5">
                      View Project <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                      <Code2 className="w-4 h-4" /> Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>

      </ScrollStack>

      {/* Mobile "All Projects" link */}
      <div className="flex justify-center mt-12 md:hidden">
        <Link
          href="/projects"
          className="btn-pill-dark gap-2 group text-base px-8"
        >
          All Projects
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

export default ProjectsSection;
