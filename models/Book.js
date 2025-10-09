// console.log("ouwghlsjn");
import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  genre: String,
  publishedYear: [{ body: String, min:1000 }],
  price: { type: Number, mime:0 },
  inStock{type:Boolean,default:true}
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
