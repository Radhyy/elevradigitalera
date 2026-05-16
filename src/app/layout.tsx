import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Elevra | Modern Website Templates & Development",
  description: "Get the best website templates and custom web development services at Elevra.",
};

import FloatingSocials from "@/components/FloatingSocials";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} font-sans scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
        <FloatingSocials />
      </body>
    </html>
  );
}
