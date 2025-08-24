"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductHighlights() {
  const products = useMemo(
    () => [
      { id: "1", name: "STRYDE AEROX", price: 129, img: "/images/shoe-01.jpg" },
      { id: "2", name: "STRYDE VANTA", price: 159, img: "/images/shoe-02.jpg" },
      { id: "3", name: "STRYDE RUSHEDGE", price: 139, img: "/images/shoe-03.jpg" },
      { id: "4", name: "STRYDE MONARCH", price: 179, img: "/images/shoe-04.jpg" },
      { id: "5", name: "STRYDE KIXEN", price: 119, img: "/images/shoe-05.jpg" },
      { id: "6", name: "STRYDE GRYND", price: 109, img: "/images/shoe-06.jpg" },
    ],
    []
  );

  return (
    <section id="products" className="py-8 sm:py-12 lg:py-16">
      <div className="flex items-end justify-between mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl tracking-[0.2em] font-extrabold uppercase">
          Best Sellers
        </h2>
        <Link href="/products" className="text-sm underline underline-offset-4 hover:opacity-80">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="group overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-sm transition"
          >
            <Link href={`/products/${p.id}`} className="block">
              <div className="aspect-square w-full bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={500}
                  height={500}
                  className="max-h-full max-w-full object-contain group-hover:scale-[1.05] transition"
                />
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <div className="font-bold tracking-wide uppercase text-sm sm:text-base">{p.name}</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    ${p.price}
                  </div>
                </div>
                <div className="text-xs font-medium inline-flex items-center gap-1 opacity-70 group-hover:opacity-100 transition">
                  Details <ChevronRight className="size-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

