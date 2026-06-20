"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Download, Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_30px_rgb(0,0,0,0.03)]"
          : "py-6 bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10">
        {/* LOGO */}
        <Link href="/" className="group flex items-center">
          <p className="text-2xl font-sans font-semibold text-black tracking-tight">
            Besukal
          </p>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-[0.95rem] font-medium text-black/80">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "relative py-2 transition-colors hover:text-black",
                  pathname === l.href ? "text-black font-semibold" : "",
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/cv.pdf" download className="btn-pill-dark gap-2">
            Download CV
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <Download className="w-3 h-3 text-black" />
            </div>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 rounded-md text-black/80 hover:text-black transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-black/5 transition-all duration-300 overflow-hidden",
          open ? "max-h-[400px] py-4 shadow-lg" : "max-h-0 py-0",
        )}
      >
        <div className="px-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block py-2 text-lg font-medium transition-colors",
                pathname === l.href
                  ? "text-black"
                  : "text-black/70 hover:text-black",
              )}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-black/5">
            <a
              href="/cv.pdf"
              download
              target="blank"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1A1A1A] py-3 text-white font-medium"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
