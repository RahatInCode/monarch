"use client";

import { useParams } from "next/navigation";
import mockProducts from "@/data/products.json";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetails() {
  const { id } = useParams();
  const product = mockProducts.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link href="/products" className="mt-6 inline-block text-blue-500 underline">
          ← Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-2xl object-cover"
        />

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="mt-4 text-2xl text-gray-700">${product.price}</p>
          <p className="mt-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a placeholder
            description—you can extend your `mockProducts` with real details later.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

