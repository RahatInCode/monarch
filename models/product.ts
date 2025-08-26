import  { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;


