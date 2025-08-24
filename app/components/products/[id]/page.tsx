"use client";

import { useParams } from "next/navigation";
import ProductDetails from "../../ProductDetails";

export default function ProductPage() {
  const params = useParams(); 
  const id = Array.isArray(params.id) ? params.id[0] : params.id; // ✅ always string

  if (!id) return <div>Product not found</div>;

  return (
    <div className="px-4 py-8">
      <ProductDetails productId={id} />
    </div>
  );
}


