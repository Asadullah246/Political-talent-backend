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
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    facebook: {
      type: String,
      required: false,
    },
    twitter: {
      type: String,
      required: false,
    },
    instagram: {
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
