"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Çözümler", href: "/cozumler" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#3f4452]/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/mylogo.png"
            alt="Maroki Yazılım Logo"
            width={108}
            height={60}
            className="h-auto w-[90px] md:w-[108px]"
            priority
          />
          <span className="text-2xl font-bold text-white md:text-3xl">
            Maroki Yazılım
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium transition ${
                  isActive
                    ? "text-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/iletisim"
          className="hidden rounded-2xl bg-blue-500 px-6 py-3 text-base font-semibold text-white transition hover:scale-105 hover:bg-blue-600 md:inline-flex"
        >
          Demo Talep Et
        </Link>
      </div>
    </header>
  );
}