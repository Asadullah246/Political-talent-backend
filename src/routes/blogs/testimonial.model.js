import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    logoImage: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Job = model("Blogs", jobSchema);

export { Job };
