import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    websiteName: {
      type: String,
      required: false,
    },
    logoImage: {
      type: String,
      required: false,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Job = model("websiteInfo", jobSchema);

export { Job };
