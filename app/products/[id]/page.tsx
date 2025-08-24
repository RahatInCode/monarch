"use client";

import products from "@/data/products.json";
import Image from "next/image";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetails({ params }: { params: { id: string } }) {
  type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  };

  const product = (products as Product[]).find((p) => p.id === params.id);

  if (!product) {
    return <div className="p-8 text-center text-xl font-semibold">Product not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12"
    >
      {/* Product Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Product Details */}
      <div className="flex flex-col justify-start gap-4">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">{product.name}</h1>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-gray-300" />
          <span className="ml-2 text-gray-500">4.0 (120 reviews)</span>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mt-4">{product.description}</p>

        {/* Price */}
        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">${product.price}</p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            <ShoppingCart className="w-5 h-5" /> Add to Cart
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Heart className="w-5 h-5 text-red-500" /> Wishlist
          </motion.button>
        </div>

        {/* Tags / Category */}
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
            {product.category}
          </span>
          {/* You can add more tags like 'Limited Edition', 'New', etc. */}
        </div>
      </div>
    </motion.div>
  );
}

