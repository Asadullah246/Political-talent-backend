import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
    },

    photoURL: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    rating: {
      type: Number,
      required: false,
    },
    designation: {
      type: String,
      required: false,
    },
    number: {
      type: String,
      required: false,
    },
    admin: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const Job = model("User", jobSchema);

export { Job };
