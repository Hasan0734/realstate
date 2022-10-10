import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user',
    //     required: true
    // },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);
