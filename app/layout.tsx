import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";
import { SocialDock } from "@/components/SocialDock";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Damalla Yathin | Creative Developer",
  description: "Portfolio of Damalla Yathin - Creative Developer, UI/UX Designer, and AI Content Creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121212] text-[#FFFCF2] antialiased`}>
        <div className="noise-bg" />
        <Navbar />
        <CursorGlow />
        <SocialDock />
        {children}
      </body>
    </html>
  );
}
