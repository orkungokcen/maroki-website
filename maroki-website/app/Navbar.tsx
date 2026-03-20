"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "h-20" : "h-24"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Image
            src="/mylogo.png"
            alt="Maroki Yazılım"
            width={60}
            height={60}
            priority
            className={`w-auto object-contain transition-all duration-300 hover:scale-105 ${
              scrolled ? "h-12" : "h-14"
            }`}
          />
          <span
            className={`font-bold text-white transition-all duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
            }`}
          >
            Maroki Yazılım
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <a href="#" className="relative group">
            Ana Sayfa
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#" className="relative group">
            Çözümler
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#" className="relative group">
            Ürünler
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#" className="relative group">
            Hakkımızda
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#" className="relative group">
            İletişim
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
        </div>

        <button className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:opacity-90">
          Demo Talep Et
        </button>
      </div>
    </nav>
  );
}