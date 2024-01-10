import { Schema, model } from "mongoose";


const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: { 
    type: String,
    required: true,
  },
}, { timestamps: true });

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
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Job = model("Blogs", jobSchema);

export { Job };
