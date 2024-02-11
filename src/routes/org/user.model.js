import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    signingId: {
      type: String,
      required: true,
    },
    organization_Name: {
      type: String,
      required: false,
    },

    organization_Address: {
      type: String,
      required: false,
    },
    organization_Details: {
      type: String,
      required: true,
    },
    additional: {
      type: String,
      required: false,
    },
    status:{
      type:Number,
      required:true,
    }


  },
  { timestamps: true }
);

const user = model("Organizations", userSchema);

export { user };

