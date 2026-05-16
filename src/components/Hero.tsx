"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Code, Layout, Smartphone, Box, Database, PenTool, Server, Globe } from "lucide-react";
import Link from "next/link";

const floatingItems = [
  { id: 1, icon: Code, img: "/logo/react.png", top: "20%", left: "15%", delay: 0 },
  { id: 2, icon: Layout, img: "/logo/css.webp", top: "15%", left: "80%", delay: 0.1 },
  { id: 3, icon: Smartphone, img: "/logo/html.avif", top: "45%", left: "10%", delay: 0.2 },
  { id: 4, icon: Box, img: "/logo/js.webp", top: "60%", left: "85%", delay: 0.3 },
  { id: 5, icon: Database, img: "/logo/laravel.png", top: "70%", left: "18%", delay: 0.4 },
  { id: 6, icon: PenTool, img: "/logo/anty-gravity.png", top: "80%", left: "75%", delay: 0.5 },
  { id: 7, icon: Server, img: "/logo/mysql.png", top: "35%", left: "88%", delay: 0.6 },
  { id: 8, icon: Globe, img: "/logo/vd-code.png", top: "85%", left: "25%", delay: 0.7 },
];

function GridBackground() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        WebkitMaskImage: "linear-gradient(to bottom, white 40%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, white 40%, transparent 100%)",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-200"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="-1"
          >
            <path d="M.5 64V.5H64" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-grid)" />
        <svg x="50%" y="-1" className="overflow-visible fill-slate-100">
          <path d="M-128.5 64h64v64h-64z M64.5 0h64v64h-64z M-192.5 192h64v64h-64z M192.5 128h64v64h-64z M-64.5 256h64v64h-64z M128.5 320h64v64h-64z M-256.5 128h64v64h-64z M256.5 64h64v64h-64z" />
        </svg>
      </svg>
    </div>
  );
}

export default function Hero() {
  const [isLogoPhase, setIsLogoPhase] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLogoPhase((prev) => !prev);
    }, 4000); // Toggle every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="beranda" className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden">
      <GridBackground />
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -z-10" />

      {/* Floating Animated Icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden">
        {floatingItems.map((item) => (
          <div
            key={item.id}
            className="absolute z-0 -translate-x-1/2 -translate-y-1/2"
            style={{ top: item.top, left: item.left }}
          >
            <AnimatePresence mode="wait">
              {!isLogoPhase ? (
                <motion.div
                  key="outline"
                  initial={{ scale: 0, opacity: 0, rotate: -45 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.4, delay: !isLogoPhase ? item.delay : 0 }}
                  className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700"
                >
                  <item.icon size={24} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="logo"
                  initial={{ scale: 0, opacity: 0, rotate: -15 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0, opacity: 0, rotate: 15 }}
                  transition={{ duration: 0.5, delay: isLogoPhase ? item.delay : 0, type: "spring" }}
                  className="flex items-center justify-center drop-shadow-md"
                >
                  <img src={item.img} alt="logo" className="w-16 h-16 object-contain" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-medium mb-8"
          >
            <Sparkles size={16} />
            <span>Elevate Your Digital Presence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight"
          >
            Bangun Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Impian Anda</span> Bersama Elevra.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Kami menyediakan template website premium dan jasa pembuatan website custom (Portfolio, Company Profile, CRUD, dan Bisnis) yang dirancang untuk kesuksesan Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#harga"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-full transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-1"
            >
              Lihat Pilihan Harga
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#layanan"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-primary-200 hover:bg-primary-50 rounded-full transition-all"
            >
              Pelajari Layanan Kami
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
