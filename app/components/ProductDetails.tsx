"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import Spinner from "./Spinner";

type Product = {
  _id: string;
  title: string;
  description?: string;
  price: number;
  image?: string;
};

type ProductDetailsProps = {
  productId: string;
};

export default function ProductDetails({ productId }: ProductDetailsProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${productId}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data: Product = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const addToCart = async () => {
    setIsAdding(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsAdding(false);
    alert(`Added product ${productId} to cart!`);
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
      {/* LEFT - IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full aspect-square rounded-3xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden relative group"
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="object-contain w-full h-full"
            unoptimized
          />
        ) : (
          <p>No image available</p>
        )}
      </motion.div>

      {/* RIGHT - DETAILS */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl font-semibold">${product.price}</p>
        <p className="text-gray-600 dark:text-gray-300">{product.description}</p>

        <button
          onClick={addToCart}
          disabled={isAdding}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-2xl hover:opacity-90 transition disabled:opacity-60"
        >
          {isAdding ? <Spinner className="size-4" /> : <Heart size={18} />}
          Add to Cart
        </button>
      </div>
    </div>
  );
}





