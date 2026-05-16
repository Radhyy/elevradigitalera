"use client";

import { motion } from "framer-motion";
import { Code, LayoutTemplate, Rocket, ShieldCheck, Database, Smartphone } from "lucide-react";

const services = [
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary-500" />,
    title: "Template Website Premium",
    desc: "Koleksi template website modern siap pakai dengan desain UI/UX terbaik. Mudah disesuaikan dengan identitas brand Anda."
  },
  {
    icon: <Code className="w-8 h-8 text-primary-500" />,
    title: "Jasa Pembuatan Website",
    desc: "Pengembangan website custom dari nol menggunakan teknologi terbaru (Next.js, React) untuk performa maksimal."
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary-500" />,
    title: "Optimasi Performa & SEO",
    desc: "Website Anda tidak hanya tampil menarik, tapi juga cepat diakses dan mudah ditemukan di mesin pencari."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary-500" />,
    title: "Maintenance & Keamanan",
    desc: "Layanan dukungan teknis dan pembaruan keamanan berkala agar website Anda selalu aman dan up-to-date."
  },
  {
    icon: <Database className="w-8 h-8 text-primary-500" />,
    title: "Manajemen Database",
    desc: "Perancangan dan optimalisasi struktur database untuk menjamin keamanan, kecepatan, dan skalabilitas data bisnis Anda."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary-500" />,
    title: "Aplikasi Mobile",
    desc: "Selain website, kami juga melayani pengembangan aplikasi mobile yang responsif untuk platform iOS dan Android."
  }
];

const duplicatedServices = [...services, ...services];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide uppercase"
          >
            Layanan Kami
          </motion.div>
          <div className="relative inline-block">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 relative z-10"
            >
              Solusi Lengkap untuk <span className="text-primary-500">Bisnis Digital</span> Anda
            </motion.h2>
            <motion.svg
              initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              width="56"
              height="56"
              viewBox="0 0 44 44"
              fill="none"
              className="absolute -top-10 -right-12 text-primary-500 z-0 hidden md:block"
            >
              <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
                <line x1="8" y1="22" x2="8" y2="8" transform="rotate(0 8 36)" />
                <line x1="8" y1="22" x2="8" y2="8" transform="rotate(22.5 8 36)" />
                <line x1="8" y1="22" x2="8" y2="8" transform="rotate(45 8 36)" />
                <line x1="8" y1="22" x2="8" y2="8" transform="rotate(67.5 8 36)" />
                <line x1="8" y1="22" x2="8" y2="8" transform="rotate(90 8 36)" />
              </g>
            </motion.svg>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full flex overflow-hidden group py-4"
      >
        {/* Gradients for smooth fade effect at edges */}
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, // Kecepatan scroll (semakin besar semakin lambat)
          }}
          className="flex gap-8 px-4 w-max"
        >
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="w-[350px] shrink-0 p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed whitespace-normal">{service.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
