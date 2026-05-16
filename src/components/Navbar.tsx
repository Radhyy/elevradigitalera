"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#projects", label: "Karya" },
  { href: "#harga", label: "Harga" },
  { href: "#tentang", label: "Tentang Kami" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl ${font.className}`}>
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-slate-200/20 rounded-full px-6 h-16 flex items-center justify-between transition-all">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-md shadow-primary-500/30 group-hover:scale-105 transition-transform">
            <Image src="/LogoElevraForNavbar.png" alt="Elevra Logo" width={36} height={36} className="object-contain w-full h-full p-1.5" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">Elevra.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 bg-slate-50/50 p-1.5 rounded-full border border-slate-100/50">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-semibold text-slate-600 hover:text-primary-600 transition-colors group"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 bg-white rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 shadow-sm transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://wa.me/6285738804915"
            target="_blank"
            className="px-6 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-primary-500 rounded-full transition-colors shadow-md hover:shadow-primary-500/30"
          >
            Konsultasi Gratis
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-primary-500 transition-colors bg-white/50 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white/90 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-3xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-bold text-slate-700 p-4 hover:bg-primary-50 hover:text-primary-600 rounded-2xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="p-2 pt-4 border-t border-slate-100">
                <Link
                  href="#kontak"
                  className="flex w-full justify-center px-5 py-4 text-sm font-bold text-white bg-slate-900 hover:bg-primary-500 rounded-2xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
