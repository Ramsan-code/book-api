// console.log("eigjrsnkf");
import Book from "../models/Book.js";

//<----------Add a new book to the database----------->

//<----------Get all books from the database------------>
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//<---------------Get a single book by ID----------->

//<---------------Update a book information--------->

//<---------------Delete a book from the database----->
