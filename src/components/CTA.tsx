"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Ornaments */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary-100 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[40px] overflow-hidden"
        >
          {/* Main Card */}
          <div className="relative bg-slate-900 px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-slate-800">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
              <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary-500/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-blue-500/20 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />
            </div>

            <div className="relative z-10 text-center md:text-left max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
              >
                Siap Mewujudkan <span className="text-primary-400">Website Impian</span> Anda?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-slate-400 text-lg md:text-xl font-medium"
              >
                Jangan biarkan ide hebat Anda tertunda. Konsultasikan sekarang dan dapatkan solusi digital kelas dunia yang dirancang khusus untuk bisnis Anda.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative z-10 shrink-0"
            >
              <Link
                href="https://wa.me/6285738804915"
                target="_blank"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-6 md:px-10 py-4 md:py-5 bg-white text-slate-900 font-bold text-base md:text-lg rounded-2xl hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-2xl hover:shadow-primary-500/30 hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
                <span>Mulai Konsultasi Gratis</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Trust Badge */}
              <p className="text-slate-500 text-sm mt-4 text-center md:text-right font-medium">
                Pengerjaan cepat & revisi sampai puas.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
