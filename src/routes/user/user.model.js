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
    skill_rating: {
      type: Number,
      required: false,
    },
    // skill: [
    //   {
    //     name: {
    //       type: String,
    //       required: false,
    //     },
    //     title: {
    //       type:String,
    //       required: false,
    //     },
    //     description: {
    //       type:String,
    //       required: false,
    //     }
    //   },
    // ],

    courses: [
      {
        course_id: {
          type: Schema.ObjectId,
          required: false,
        },
      },
    ],

    experiences: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,

    },
    talent: {
      type: Number,
      required: false,

    },
    accounttype: {
      type: String ,
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
    country: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: false,
    },
    tittle:{
      type: String,
      required: false,
    }

  },
  { timestamps: true }
);

const user = model("User", userSchema);

export { user };

