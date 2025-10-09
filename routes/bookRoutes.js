// console.log("gokfsl");
import express from "express";
import {
  getAllBooks,
  //   getBooksById,
  //   createBook,
  //   updateBook,
  //   deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();
router.get("/", getAllBooks);
// router.get("/:id", getBooksById);
// router.post("/:id", createBook);
// router.get("/", updateBook);
// router.get("/:id", deleteBook);

export default router;
