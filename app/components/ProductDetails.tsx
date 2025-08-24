"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import Spinner from "./Spinner";

// ---------- TYPES ----------
type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
};

type Product = {
  name: string;
  price: number;
  rating: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  reviews: Review[];
};

type ProductDetailsProps = {
  productId: string; // 👈 accept productId
};

// ---------- COMPONENT ----------
export default function ProductDetails({ productId }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("Red");

  // ⚡ For now, just mock data. Later you can fetch by productId
  const product: Product = {
    name: `AirZoom Runner #${productId}`, // 👈 use productId to differentiate
    price: 129.99,
    rating: 4.5,
    images: ["/images/product-01.jpg", "/images/product-02.jpg", "/images/product-03.jpg"],
    description:
      "Performance-driven running shoes designed for comfort, speed, and style. Perfect for streets and stadiums.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Black", "White"],
    reviews: [
      { id: 1, name: "John Doe", rating: 5, comment: "Amazing shoes! Very comfortable." },
      { id: 2, name: "Jane Smith", rating: 4, comment: "Great for running, good support." },
    ],
  };

  const addToCart = async () => {
    setIsAdding(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsAdding(false);
    alert(`Added product ${productId} to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
      {/* LEFT SIDE - IMAGE GALLERY */}
      <div className="flex flex-col md:sticky md:top-24 md:self-start gap-4">
        <motion.div
          key={selectedImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full aspect-square rounded-3xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden relative group"
        >
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            width={600}
            height={600}
            className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
        <div className="flex gap-3 justify-center md:justify-start">
          {product.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${
                idx === selectedImage
                  ? "border-black dark:border-white"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            >
              <Image src={img} alt={`Thumb ${idx}`} width={100} height={100} className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - DETAILS */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">${product.price}</span>
          <div className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={18}
                className={i < Math.floor(product.rating) ? "fill-current" : "stroke-current"}
              />
            ))}
            <span className="text-gray-500 dark:text-gray-400 ml-2">{product.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{product.description}</p>

        {/* Size Selector */}
        <div>
          <h3 className="font-medium mb-2">Size:</h3>
          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-xl border ${
                  selectedSize === size ? "border-black dark:border-white" : "border-gray-300 dark:border-gray-600"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div>
          <h3 className="font-medium mb-2">Color:</h3>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color ? "border-black dark:border-white" : "border-gray-300 dark:border-gray-600"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
              />
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={addToCart}
          disabled={isAdding}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-2xl hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isAdding ? <Spinner className="size-4" /> : <Heart size={18} />}
          Add to Cart
        </button>

        {/* Reviews */}
        <div className="pt-4">
          <h3 className="font-semibold mb-2">Reviews:</h3>
          <div className="space-y-3">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                <div className="flex items-center gap-2 text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={16} className={i < review.rating ? "fill-current" : "stroke-current"} />
                  ))}
                  <span className="ml-2 font-medium text-gray-700 dark:text-gray-300">{review.name}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}




