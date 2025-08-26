import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/product";

// Connect to DB before anything
connectDB();

// GET /api/products
export async function GET() {
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // newest first
    return NextResponse.json(products);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("GET /api/products error:", err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}

// POST /api/products
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, price, image } = body;

    if (!title || !price) {
      return NextResponse.json(
        { error: "Title and price are required" },
        { status: 400 }
      );
    }

    const newProduct = await Product.create({
      title,
      description,
      price,
      image,
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("POST /api/products error:", err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}

// DELETE /api/products/:id
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
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
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}







