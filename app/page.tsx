"use client";

import { Toaster } from "sonner";
import ProductHighlights from "./components/ProductHighlights";
import Hero from "./components/hero";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b0b0b] dark:text-slate-100">
      <Toaster richColors position="top-right" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <ProductHighlights />
        
      </main>
      
    </div>
  );
}

