// console.log("ouwghlsjn");
import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      //<----------Add validation for required------->
      required: [true, "Book title is required"],
      unique: true,
      trim: true,
    },
    author: { type: String, required: true },
    genre: { type: String },
    publishedYear: { type: Number, min: 1000 },
    price: { type: Number, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  { collection: "books" }
);
export default mongoose.model("Book", bookSchema);
