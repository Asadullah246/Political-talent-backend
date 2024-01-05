import { Schema, model } from "mongoose";

const quizSchema = new Schema({
  id: { type: Number, required: false },
  text: { type: String, required: true },
  answer: { type: Boolean, required: true },
});

const jobSchema = new Schema(
  {
    id: {
      type: Number,
      required: false,
    },
    title: {
      type: String,
      required: [true, "Question is required "],
    },
    quiz: { type: [quizSchema], required: true },
  },
  { timestamps: true }
);

const Job = model("Quiz", jobSchema);

export { Job };
