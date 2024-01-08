import { Schema, model } from "mongoose";

const quizSchema = new Schema({
  id: { type: Number, required: false },
  text: { type: String, required: true },
  answer: { type: Boolean, required: true },
});

const jobSchema = new Schema(
  {

    name: {
      type: String,
      required: false, 
      // required: [true, "Question is required "],
    },
    quiz: { type: [quizSchema], required: false },
  },
  { timestamps: true }
);

const Job = model("Teacher", jobSchema);

export { Job };
