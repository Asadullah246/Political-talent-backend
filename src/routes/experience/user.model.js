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
    skills: {
      type: String,
      required: false,
    },

    experiences: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: true,
    },
    currentDesignation: {
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

const user = model("Experiences", userSchema);

export { user };

