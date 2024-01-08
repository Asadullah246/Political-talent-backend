import { Schema, model } from "mongoose";

// const quizSchema = new Schema({
//   id: { type: Number, required: false },
//   text: { type: String, required: true },
//   answer: { type: Boolean, required: true },
// });

// const jobSchema = new Schema(
//   {
//     others:{type:String, required:false },

//     singleQuiz: [
//       {
//         id: {
//           type: Number,
//           required: false,
//         },
//         title: {
//           type: String,
//           required: true,
//           // required: [true, "Question is required "],
//         },


//         quiz: { type: [quizSchema], required: true },
//       },
//     ],
//     // quiz: { type: [quizSchema], required: true },
//   },
//   { timestamps: true }
// );

// const Job = model("Quiz", jobSchema);

// export { Job };


// const mongoose = require("mongoose");

const quizSchema = new Schema({
  id: { type: Number, required: true },
  text: { type: String, required: true },
  answer: { type: Boolean, required: true },
});

const singleQuizSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  quiz: { type: [quizSchema], required: true },
});

const yourDataSchema = new Schema({
  others: { type: String, required: false }, 
  singleQuiz: { type: [singleQuizSchema], required: true },
});

// const YourDataModel = mongoose.model("YourData", yourDataSchema);

// module.exports = YourDataModel;

const Job = model("Quiz", yourDataSchema);

export { Job };

