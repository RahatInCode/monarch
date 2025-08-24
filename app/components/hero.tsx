"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Spinner from "./Spinner";

export default function Hero() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/images/hero-01.jpg", "/images/hero-02.jpg", "/images/hero-03.jpg"];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]); // ✅ added dependency

  const onShopNow = async () => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setIsSubmitting(false);
    toast.success("Browsing Best Sellers", { description: "Redirecting to Products" });
    router.push("/products"); // ✅ Next.js navigation
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center py-12 sm:py-16 lg:py-24">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-wider leading-[1.05]">
          UNLEASH YOUR
          <span className="block">MOVEMENT.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-prose">
          Performance-driven shoes engineered for speed, comfort, and style. Built for streets and stadiums.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={onShopNow}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? <Spinner className="size-4" /> : <ArrowRight className="size-4" />}
            Shop Now
          </button>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300/80 dark:border-white/15 px-5 py-3 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Explore Collection <ChevronRight className="size-4" />
          </a>
        </div>
        <div className="pt-4 text-sm text-slate-500 dark:text-slate-400">
          Trusted by <span className="font-semibold text-slate-700 dark:text-slate-200">10k+</span> athletes worldwide
        </div>
      </motion.div>

      {/* RIGHT SIDE - SLIDER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative"
      >
        <div className="aspect-[4/3] md:aspect-[5/4] w-full rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 p-4 flex items-center justify-center overflow-hidden shadow-sm relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={images[currentIndex]}
                alt="Hero shoe"
                width={600}
                height={600}
                className="w-[85%] md:w-[75%] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.2)]"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Glowing blob effect */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute -right-10 -bottom-10 h-72 w-72 rounded-full blur-3xl bg-red-500/30 dark:bg-red-400/20"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}


