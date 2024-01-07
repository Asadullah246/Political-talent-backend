import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: Number,
      required: false, 
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    archived: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const Job = model("AskQuestions", jobSchema);

export { Job };
