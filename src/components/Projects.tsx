"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
  { name: "86 Photo Studio Website", image: "/project/86PhotoStudioWebsite.png", desc: "Platform booking studio foto modern dengan fitur interaktif." },
  { name: "Apotek Lehan Farma", image: "/project/ApotekLehanFarmaWebsite.png", desc: "Katalog produk farmasi online untuk apotek terpercaya." },
  { name: "Assignment Management AI", image: "/project/AsigmentManagementAi.png", desc: "Sistem manajemen tugas berbasis AI untuk produktivitas." },
  { name: "Desa Sawotratap", image: "/project/DesaSawotratap.png", desc: "Portal informasi desa terpadu untuk layanan publik warga." },
  { name: "Desa Watu Pari Website", image: "/project/DesaWatuPariWebsite.png", desc: "Website profil desa wisata dengan pemesanan tiket." },
  { name: "Facility Helpdesk Admin", image: "/project/FacilityHeldeskAdmin.png", desc: "Dashboard admin untuk memantau tiket keluhan fasilitas." },
  { name: "Jatim Innovator Website", image: "/project/JatimInnovatorWebsite.png", desc: "Platform pameran inovasi digital startup di Jawa Timur." },
  { name: "Jeep Tour Company Profile", image: "/project/JeepTourCompanyProfile.png", desc: "Situs pemesanan paket wisata Jeep dengan galeri epik." },
  { name: "Picka Photobooth", image: "/project/LandinPagePickaPhotobooth.png", desc: "Landing page layanan photobooth event dengan custom frame." },
  { name: "Elevra Landing Page", image: "/project/LandingPageElevra.png", desc: "Desain agensi web Elevra dengan animasi dan UI modern." },
  { name: "Lehan Farma Redesign", image: "/project/LehanFarmaNew.png", desc: "Pembaruan visual untuk apotek digital yang intuitif." },
  { name: "LHI Fun Run Website", image: "/project/LhiFunRunWebsite.png", desc: "Halaman registrasi acara lari dengan pelacakan rute." },
  { name: "NDJ Jok Mobil", image: "/project/NdjJokMobilCompanyProfile.png", desc: "Katalog layanan modifikasi interior mobil premium." },
  { name: "Iman Portfolio", image: "/project/PorfolioIman.png", desc: "Portofolio pribadi dengan showcase proyek dan blog." },
  { name: "Portfolio Base", image: "/project/Portfolio.png", desc: "Template portofolio minimalis untuk kalangan kreatif." },
  { name: "Posyandu Bayi Website", image: "/project/PosyanduBayiWebsite.png", desc: "Sistem pencatatan digital memantau balita di posyandu." },
  { name: "Telkom Wave Website", image: "/project/TelkomWaveWebsite.png", desc: "Portal berita teknologi untuk komunitas perusahaan." },
  { name: "WorkSim Platform", image: "/project/Worksim.png", desc: "Simulasi lingkungan kerja virtual untuk pelatihan." },
  { name: "Z-Learn Platform", image: "/project/Z-Learn.png", desc: "LMS interaktif dengan modul pembelajaran gamifikasi." }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-32 relative bg-slate-50 overflow-hidden">
      {/* Dynamic Background Glow for Light Mode */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:items-center text-center justify-center mb-24 gap-4">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
            >
              Karya <span className="text-primary-500 inline-block">Terbaik</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg md:text-xl font-medium"
            >
              Bukan sekadar desain dasar. Kami menciptakan pengalaman visual kelas dunia yang interaktif, premium, dan inovatif.
            </motion.p>
          </div>
        </div>

        {/* 3 Column Grid with Hover Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-6 md:gap-x-10 max-w-7xl mx-auto">
          <AnimatePresence>
            {visibleProjects.map((project, index) => {
              // Static random data for the demo likes/comments/views
              const likes = (index * 7 + 13) % 85 + 10;
              const comments = (index * 3 + 5) % 25 + 2;
              const views = (index * 41 + 101) % 800 + 100;

              return (
                <motion.div
                  key={project.name}
                  initial={{ 
                    opacity: 0, 
                    y: index % 3 === 0 ? 40 : (index % 3 === 1 ? 60 : 40),
                    x: index % 3 === 0 ? -20 : (index % 3 === 2 ? 20 : 0)
                  }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  whileTap={{ scale: 0.97 }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: (index % 3) * 0.1,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="relative group w-full pt-4 pb-6 px-4 cursor-pointer active:scale-95 transition-transform duration-200"
                >
                  {/* The Liquid Glass Back Panel (Light Mode) */}
                  <div className="absolute z-0 
                                  left-8 right-2 top-16 bottom-0 
                                  group-hover:left-0 group-hover:right-0 group-hover:top-0 group-hover:-bottom-12
                                  bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-3xl
                                  transition-all duration-300 ease-out" />

                  {/* Front Image Card */}
                  <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100 group-hover:-translate-y-1 transition-transform duration-300 bg-slate-200">
                    <Image src={project.image} fill className="object-cover object-top" alt={project.name} />
                    
                    {/* Fullscreen Icon */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(project.image);
                      }}
                      className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-sm z-20"
                    >
                      <svg className="w-4 h-4 fill-slate-700" viewBox="0 0 100 100">
                         <path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z" />
                      </svg>
                    </button>
                  </div>

                  {/* Avatar, Title, and Stats container */}
                  <div className="relative z-20 mt-4 ml-6 group-hover:ml-2 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-200 shadow-sm">
                         <Image src="/LogoElevra.png" width={40} height={40} className="object-cover h-full w-full" alt="Elevra Logo" />
                      </div>
                      <div className="flex-1 min-w-0 pr-4">
                        <h3 className="font-bold text-slate-800 text-[15px] truncate">{project.name}</h3>
                        <p className="text-[13px] text-slate-500 truncate mt-0.5">{project.desc}</p>
                      </div>
                    </div>
                    
                    {/* Stats Buttons (Likes, Comments, Views) */}
                    <div className="flex gap-2 mt-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 absolute w-full pointer-events-none group-hover:pointer-events-auto">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 text-slate-600 text-xs font-bold cursor-pointer border border-slate-200 shadow-sm transition-colors">
                        <svg viewBox="-2 0 105 92" className="w-3 h-3 fill-slate-600"><path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z" /></svg>
                        <span>{likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 text-slate-600 text-xs font-bold cursor-pointer border border-slate-200 shadow-sm transition-colors">
                        <svg viewBox="-405.9 238 56.3 54.8" className="w-3 h-3 fill-slate-600"><path d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z" /></svg>
                        <span>{comments}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 text-slate-600 text-xs font-bold cursor-pointer border border-slate-200 shadow-sm transition-colors">
                        <svg viewBox="0 0 30.5 16.5" className="w-3 h-3 fill-slate-600"><path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z" /></svg>
                        <span>{views}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {!showAll && projects.length > 6 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-20 flex justify-center"
          >
            <button 
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
            >
              Lihat {projects.length - 6} Project Lainnya
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors z-[110]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} fill className="object-contain" alt="Fullscreen Project" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
