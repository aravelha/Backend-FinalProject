import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  favoriteBooks: [{ type: String }], 
  reviews: [
    {
      bookId: { type: String, required: true },
      comment: { type: String, required: true },
      rating: { type: Number, required: true, min: 1, max: 5 }
    }
  ]
}, { versionKey: false }); 

const User = mongoose.model("User", userSchema);

export default User;
