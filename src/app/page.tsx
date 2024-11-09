'use client'
import HeroSection  from "@/Components/HeroSection";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/Components/ui/Spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection />
    </main>
  );
}
