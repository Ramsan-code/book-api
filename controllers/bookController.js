// console.log("eigjrsnkf");
import Book from "../models/Book.js";

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
export const getBooksById = async (req, res) => {
  try {
    const bookID = req.params.id;
    const book = await Book.findById(bookID);
    res.json(book);
  } catch (error) {}
};

//<-------------Add a new book to the database -------->
export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {}
};
//<---------------Update a book information--------->

//<---------------Delete a book from the database----->
