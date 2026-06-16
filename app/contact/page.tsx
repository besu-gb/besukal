"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-5xl lg:text-7xl font-sans font-bold text-black mb-6 tracking-tight">
              Let's build <br/>something <span className="font-serif italic text-primary">great.</span>
            </h1>
            <p className="text-xl text-black/60 leading-relaxed max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-panel-light flex items-center justify-center text-black">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-black/50 mb-1">Email</p>
                <a href="mailto:besukalgobena@gmail.com" className="text-lg text-black font-medium hover:text-black/70 transition-colors">
                  besukalgobena@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-panel-light flex items-center justify-center text-black">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-black/50 mb-1">Location</p>
                <p className="text-lg text-black font-medium">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel-light bg-white/70 p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-black/70">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all shadow-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-black/70">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all shadow-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-black/70">Subject</label>
              <input 
                type="text" 
                id="subject" 
                required
                className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all shadow-sm"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-black/70">Message</label>
              <textarea 
                id="message" 
                rows={5}
                required
                className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all resize-none shadow-sm"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={formState !== "idle"}
              className="mt-2 group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-black px-8 font-medium text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:bg-black/90 shadow-md"
            >
              {formState === "idle" && (
                <>
                  <span className="mr-2">Send Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
              {formState === "submitting" && <span className="animate-pulse">Sending...</span>}
              {formState === "success" && <span>Message Sent!</span>}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
