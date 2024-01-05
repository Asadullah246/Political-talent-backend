import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    id: {
      type: Number,
      required: false,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = model("Faq", jobSchema);

export { Job };
