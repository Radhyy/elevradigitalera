"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["Portfolio", "Company Profile", "CRUD App", "Business Website"];

const plansData = {
  "Portfolio": [
    { name: "Starter", price: "Rp 150k", desc: "Cocok untuk mahasiswa / fresh graduate", features: ["Desain 1 Halaman", "Responsive", "Domain .my.id (1 Tahun)", "Revisi 1x"] },
    { name: "Pro", price: "Rp 250k", desc: "Cocok untuk profesional & freelancer", features: ["Desain up to 3 Halaman", "Custom Domain .com", "Basic SEO", "Animasi Modern", "Revisi 3x"], isPopular: true },
    { name: "Premium", price: "Rp 800k", desc: "Portfolio interaktif dengan fitur lengkap", features: ["Desain Unlimited Halaman", "Custom Domain & Hosting Premium", "Advanced SEO", "Custom Animations (Framer Motion)", "Support 1 Bulan", "Revisi Unlimited"] }
  ],
  "Company Profile": [
    { name: "Basic", price: "Rp 200k", desc: "Profil perusahaan sederhana", features: ["5 Halaman Utama", "Responsive Design", "Form Kontak", "Domain .com (1 Tahun)"] },
    { name: "Business", price: "Rp 500k", desc: "Pilihan terbaik untuk UKM", features: ["Up to 10 Halaman", "Desain Premium & Modern", "Integrasi WhatsApp", "Basic SEO", "Free Maintenance 1 Bulan"], isPopular: true },
    { name: "Corporate", price: "Rp 1.3Jt", desc: "Solusi lengkap untuk korporat besar", features: ["Halaman Unlimited", "Custom UI/UX Design", "Copywriting Services", "Advanced SEO & Analytics", "Free Maintenance 3 Bulan"] }
  ],
  "CRUD App": [
    { name: "Lite", price: "Rp 500k", desc: "Aplikasi CRUD sederhana", features: ["1 Role (Admin)", "Up to 5 Tabel Database", "Autentikasi Dasar", "Deployment"] },
    { name: "Standard", price: "Rp 1Jt", desc: "Aplikasi sistem informasi menengah", features: ["Multi-Role System", "Up to 15 Tabel Database", "Export PDF/Excel", "Dashboard Analitik Dasar", "API Integration"], isPopular: true },
    { name: "Enterprise", price: "Rp 2Jt", desc: "Aplikasi kompleks dengan fitur custom", features: ["Complex Role & Permission", "Database Unlimited", "Real-time Features", "Advanced Dashboard", "Mobile Responsive", "Dedicated Support"] }
  ],
  "Business Website": [
    { name: "Start", price: "Rp 300k", desc: "Website katalog produk", features: ["Katalog Produk", "Integrasi WhatsApp Order", "Desain Responsive", "Basic SEO"] },
    { name: "Growth", price: "Rp 1Jt", desc: "Website E-commerce dasar", features: ["Shopping Cart", "Payment Gateway Integration", "Manajemen Stok", "User Dashboard"], isPopular: true },
    { name: "Scale", price: "Rp 3Jt", desc: "Platform bisnis skala besar", features: ["Advanced E-commerce", "Custom Features", "Marketing Tools Integration", "High Performance Setup", "Priority Support"] }
  ]
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="harga" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Pilihan Harga & <span className="text-primary-500">Paket</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Pilih paket yang paling sesuai dengan kebutuhan digital Anda. Transparan dan tanpa biaya tersembunyi.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-semibold transition-all",
                activeTab === cat
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/25"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {plansData[activeTab as keyof typeof plansData].map((plan, index) => (
              <motion.div
                key={`${activeTab}-${plan.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col p-8 rounded-3xl bg-white border transition-all hover:shadow-xl",
                  plan.isPopular ? "border-primary-500 shadow-lg shadow-primary-500/10" : "border-slate-200 shadow-sm"
                )}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Paling Populer
                    </span>
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm h-10">{plan.desc}</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.price.includes("+") ? "" : <span className="text-slate-500 font-medium">/project</span>}
                </div>
                <ul className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={cn(
                    "w-full py-4 rounded-xl font-semibold transition-all",
                    plan.isPopular
                      ? "bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-primary-500/25"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  )}
                >
                  Pilih Paket
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
