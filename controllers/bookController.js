import Book from "../models/book.js";

// Create a book
export const createBook = async (req, res) => {
  try {
    const { bookId, title, author, genre, rating } = req.body;
    const book = new Book({ bookId, title, author, genre, rating, reviews: [] });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({ bookId: req.params.id });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const { title, author, genre, rating } = req.body;
    const book = await Book.findOneAndUpdate(
      { bookId: req.params.id },
      { title, author, genre, rating },
      { new: true }
    );
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({ bookId: req.params.id });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
