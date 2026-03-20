import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maroki Yazılım | ERP, Logo Entegrasyonu ve Özel Yazılım Çözümleri",
  description:
    "Maroki Yazılım, Logo Yazılım iş ortağı olarak ERP çözümleri, Logo entegrasyonu ve özel yazılım geliştirme hizmetleri sunar. İşinizi dijitalleştirin.",
  verification: {
    google: "nyoJzXapdv6kHhi1fW8zfVYasF535N4kk-ZMdJuinGo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}