"use client";

import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Trash2, PlusCircle } from "lucide-react";
import Image from "next/image";

// TypeScript interface for frontend
export interface Product {
  _id?: string;
  title: string;
  description?: string;
  price: number;
  image?: string;
}

export default function MyProductsPage() {
  const { isSignedIn } = useUser();
  const [products, setProducts] = useState<Product[]>([]);

  // Form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState("");

  // Fetch products on mount
  useEffect(() => {
    if (!isSignedIn) return;

    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      if (!res.ok) return;
      const data: Product[] = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, [isSignedIn]);

  if (!isSignedIn) return <RedirectToSignIn />;

  // Add product
  const addProduct = async () => {
    if (!title.trim()) return;

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, price, image }),
    });

    if (!res.ok) {
      console.error(await res.text());
      return;
    }

    const data: Product = await res.json();
    setProducts((prev) => [...prev, data]);

    // Reset form
    setTitle("");
    setDescription("");
    setPrice(0);
    setImage("");
  };

  // Delete product
  const deleteProduct = async (id: string) => {
    const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
    if (!res.ok) {
      console.error("Failed to delete product");
      return;
    }
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">My Products</h1>

      {/* Form */}
      <div className="flex flex-col gap-3 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="rounded-xl border px-4 py-2"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="rounded-xl border px-4 py-2"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Price"
          className="rounded-xl border px-4 py-2"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="rounded-xl border px-4 py-2"
        />
        <button
          onClick={addProduct}
          className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 hover:opacity-90"
        >
          <PlusCircle className="size-5" /> Add Product
        </button>
      </div>

      {/* Products List */}
      <ul className="space-y-3">
        {products.map((p) => (
          <li
            key={p._id}
            className="flex justify-between items-center border rounded-xl px-4 py-3 shadow-sm"
          >
            <div>
              <p className="font-semibold">{p.title}</p>
              {p.description && <p className="text-sm text-gray-500">{p.description}</p>}
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  width={64}
                  height={64}
                  className="h-16 mt-1 rounded object-cover"
                  unoptimized 
                />
              )}
              
            </div>
            <button
              onClick={() => deleteProduct(p._id!)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="size-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


