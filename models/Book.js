// console.log("ouwghlsjn");
import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true }, // String is shorthand for {type: String}
  author: { type: String, required: true },
  genre: { type: String },
  publishedYear: [{ type: Number, min: 1000 }],
  price: { type: Number, min: 0 },
  inStock: { type: Boolean, default: true },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
export default mongoose.model("Book", bookSchema);
