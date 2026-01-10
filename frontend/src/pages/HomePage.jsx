import React, { useState, useEffect, useRef } from "react";
import Aurora from "../components/Aurora";
import FeatureCard from "../components/FeatureCard";
import PageTransition from "../components/PageTransition";
import { Cpu, Code, Eye, Rocket, Terminal, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Helper component for scroll-triggered reveal
const RevealOnScroll = ({ children, delay = "0ms" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current); // Only animate once
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: delay }}
      className={`transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[#050505] overflow-x-hidden">
        {/* --- BACKGROUND --- */}
        <div className="fixed inset-0 z-0">
          <Aurora
            colorStops={["#38035e", "#1a0b33", "#050505"]}
            blend={0.6}
            amplitude={1.1}
            speed={1.8}
          />
        </div>

        <div className="relative z-10">
          {/* --- HERO SECTION (Standard Load) --- */}
          <section className="min-h-[95vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-10">
            <RevealOnScroll delay="100ms">
              <div className="mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] uppercase tracking-[0.4em] text-purple-400 font-bold backdrop-blur-sm">
                Learn • Create • Explore
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay="300ms">
              <h1 className="text-[44px] sm:text-6xl md:text-8xl font-black tracking-tighter sm:tracking-tighter leading-[1.1] sm:leading-none mb-8 italic uppercase text-white">
                FULL STACK <br />
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
                  DEVELOPMENT CLUB
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay="500ms">
              <p className="max-w-xl text-gray-400 text-sm md:text-base mb-12 leading-relaxed font-medium">
                We speak Full Stack fluently. Join a community of passionate developers building the digital future one line of code at a time.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay="700ms">
              <div className="flex flex-col md:flex-row gap-6">
                <Link to="/team" className="px-10 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all uppercase text-[10px] font-bold tracking-widest text-white flex items-center gap-2 group">
                  Our Team <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/events" className="px-14 py-4 rounded-full bg-purple-600 shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:bg-purple-500 transition-all uppercase text-[10px] font-bold tracking-widest text-white">
                  Events
                </Link>
              </div>
            </RevealOnScroll>
          </section>

          {/* --- ABOUT US (Reveals on Scroll) --- */}
          <section className="py-32 px-6 md:px-24">
            <RevealOnScroll>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black mb-4 italic uppercase tracking-tighter text-white">ABOUT US</h2>
                <div className="h-1.5 w-12 bg-purple-500 mx-auto rounded-full shadow-[0_0_15px_#a855f7]" />
              </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <RevealOnScroll delay="100ms"><FeatureCard title="Our Purpose" icon={Cpu} desc="University club dedicated to building complete digital solutions." /></RevealOnScroll>
              <RevealOnScroll delay="200ms"><FeatureCard title="Learning Focus" icon={Code} desc="Hands-on with Frontend & Backend technologies." /></RevealOnScroll>
              <RevealOnScroll delay="300ms"><FeatureCard title="Our Vision" icon={Eye} desc="A collaborative space for aspiring developers." /></RevealOnScroll>
            </div>
          </section>

          {/* --- WHAT WE DO (Reveals on Scroll) --- */}
          <section className="py-32 px-6 md:px-24 border-t border-white/5 bg-white/[0.01]">
            <div className="max-w-6xl mx-auto">
              <RevealOnScroll>
                <div className="flex items-center gap-4 mb-20">
                  <div className="h-10 w-1.5 bg-purple-600 rounded-full" />
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest italic text-white">What We Do</h2>
                </div>
              </RevealOnScroll>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RevealOnScroll delay="100ms"><FeatureCard title="Hackathons" icon={Rocket} desc="Intense coding, fast innovation." isSmall /></RevealOnScroll>
                <RevealOnScroll delay="200ms"><FeatureCard title="Workshops" icon={Terminal} desc="Learn, Practice, Master." isSmall /></RevealOnScroll>
                <RevealOnScroll delay="300ms"><FeatureCard title="Projects" icon={Globe} desc="From ideas to deployment." isSmall /></RevealOnScroll>
              </div>
            </div>
          </section>

          {/* --- CTA SECTION (Reveals on Scroll) --- */}
          <section className="relative z-10 py-40 px-6 md:px-24">
            <RevealOnScroll>
              <div className="max-w-6xl mx-auto bg-gradient-to-br from-purple-900/30 via-black to-black border border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full group-hover:bg-purple-600/30 transition-colors" />
                
                <div className="relative z-10 max-w-md text-center md:text-left">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none italic uppercase text-white">Ready to Build the Future?</h2>
                  <Link to="/contact" className="inline-block px-10 py-5 bg-purple-600 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-purple-500 transition-all shadow-[0_10px_40px_rgba(147,51,234,0.4)] text-white">
                    Contact Us
                  </Link>
                </div>
                <div className="relative z-10 w-full md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team Work" className="rounded-3xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </RevealOnScroll>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;