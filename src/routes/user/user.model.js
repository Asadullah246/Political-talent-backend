import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    skill_rating: {
      type: Number,
      required: false,
    },
    skill: [
      {
        name: {
          type: String,
          required: false,
        },
        title: {
          type:String,
          required: false,
        },
        description: {
          type:String,
          required: false,
        }
      },
    ],

    courses: [
      {
        course_id: {
          type: String,
          required: false,
        },
      },
    ],

    experiences: {
      type: String,
      required: false,
    },
    phone_number: {
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
    image_url: {
      type: String,
      required: false,
    },

  },
  { timestamps: true }
);

const user = model("User", userSchema);

export { user };

