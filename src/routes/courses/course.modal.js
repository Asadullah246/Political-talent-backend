import { Schema } from "mongoose";

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type:String,
        required: true,
    },
    imageThumb: {
        type:String,
        required: true,
    },
    price: {
        type:Number,
        required: true,
    },
    ratings:[
        {
            userId: {
              type: Schema.ObjectId,
              required: false,
              ref: "User",
            },
            rating: {
              type: Number,
              required: false,
            },
          },
    ],
    totalStudent:{
        type:Number,
        required: false,
    },
    purchaseStudent:[
        {
            type: Schema.ObjectId,
            ref: "User"
        }
    ],
    videosUrl: [
        {
            name:{
                type:String,
                required: true,
            },
            url:{
                type:String,
                required: true,
            },
            description:{
                type:String,
                required: true,
            },
            length:{
                type:String,
                required: false,
            },
        }
        
    ],
    ownerName: {
        type: String,
        required: true,
    },
    learning: [
        {
            description:{
                type:String,
                required: true,
            }
        }
    ]
},{
    timestamps: true,
});
export const course = mongoose.model("course", courseSchema);