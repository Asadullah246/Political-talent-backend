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
    description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Job = model("WebsiteInfo", jobSchema);

export { Job };
