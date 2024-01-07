import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },

    phone: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    subject: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    archived: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const Job = model("Contact", jobSchema);

export { Job };
