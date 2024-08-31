import mongoose from "mongoose";

const cafeSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    cafeName: {
      type: String,
      required: true,
    },
    closed: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      required: true,
    },
    items: {
      type: itemSchema,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const cafeModel = mongoose.model("cafe", cafeSchema);

export default cafeModel;
