import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  bookId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviews: [
    {
      user: { type: String, required: true },  // userId or username
      comment: { type: String, required: true },
      rating: { type: Number, required: true, min: 1, max: 5 }
    }
  ]
}, { versionKey: false });

export default mongoose.model("Book", bookSchema);
