import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/product";

// GET /api/products/:id
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const product = await Product.findById(params.id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("GET /api/products/:id error:", err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    console.error("GET /api/products/:id unknown error:", err);
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}

// DELETE /api/products/:id
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const deleted = await Product.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("DELETE /api/products error:", err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    console.error("DELETE /api/products unknown error:", err);
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}

