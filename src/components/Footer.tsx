"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer id="kontak" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-md shadow-primary-500/30 overflow-hidden">
                <img src="/LogoElevraForNavbar.png" alt="Elevra Logo" className="object-contain w-full h-full p-1.5" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">Elevra.</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Mitra digital terpercaya untuk mewujudkan website impian Anda. Dari template siap pakai hingga pengembangan custom.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/elevra_digitalera?igsh=aWEwcmpmem0wanps&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="https://www.tiktok.com/@elevra_digitalera?_r=1&_t=ZS-96P9RhBBnrs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <TikTokIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/radhiyya-alea-akbar-144363384" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Layanan</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary-500 transition-colors">Portfolio Website</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors">Company Profile</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors">CRUD Application</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors">Business Website</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Perusahaan</h4>
            <ul className="space-y-4">
              <li><Link href="#tentang" className="hover:text-primary-500 transition-colors">Tentang Kami</Link></li>
              <li><Link href="#harga" className="hover:text-primary-500 transition-colors">Harga</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <InstagramIcon className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span>@elevra_digitalera</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span>+62 857 3880 4915</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span>elevradigitalera@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Elevra. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
