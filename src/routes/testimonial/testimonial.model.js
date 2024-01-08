import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    logoImage: {
      type: String,
      required: false, 
    },
  },
  { timestamps: true }
);

const Job = model("Testimonial", jobSchema);


export { Job };
