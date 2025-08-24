"use client";

import Link from "next/link";
import Image from "next/image";
import productsData from "@/data/products.json";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Zap, ArrowRight, Star } from "lucide-react";

// Define the Product type including category
type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

const products: Product[] = productsData as Product[];

export default function ProductsPage() {
  return (
    <div className="px-6 sm:px-10 py-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-gray-900 dark:text-white"
        >
          Explore Our Products
        </motion.h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white dark:bg-neutral-900 rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl border border-transparent hover:border-blue-400 transition-all duration-300"
            >
              {/* Wishlist Button */}
              <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm hover:bg-red-500 hover:text-white text-gray-700 transition transform hover:scale-110">
                <Heart className="w-5 h-5" />
              </button>

              {/* Product Image */}
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Content */}
              <div className="p-5 flex flex-col justify-between h-52">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 line-clamp-1">
                    {product.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="text-gray-500 dark:text-gray-400 text-xs ml-2">
                      4.0 (120)
                    </span>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Tag / Badge */}
                  <span className="mt-2 inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Price + Buttons */}
                <div className="mt-4 flex items-center justify-between">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-extrabold text-blue-600 dark:text-blue-400"
                  >
                    ${product.price}
                  </motion.span>

                  <div className="flex gap-2">
                    {/* Add to Cart */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </motion.button>

                    {/* Details */}
                    <Link
                      href={`/products/${product.id}`}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Flash Sale Promo Card */}
      <div className="mt-16 relative bg-gradient-to-r from-black to-gray-900 text-white rounded-3xl overflow-hidden flex flex-col md:flex-row items-center shadow-2xl">
        {/* Model Image */}
        <div className="relative w-full md:w-1/2 h-72 md:h-96">
          <Image
            src="/images/model-01.jpg"
            alt="Flash Sale"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Promo Text */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center items-start">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold flex items-center gap-3 animate-pulse"
          >
            <Zap className="w-8 h-8 text-yellow-400" />
            Flash Sale Coming Soon!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg text-gray-300"
          >
            Get ready for exclusive discounts on our hottest sneaker drops. Limited time. Limited stock.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Stay Tuned <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}




