import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const dbURL = process.env.DATABASE_URL;
const dbConnection = () => {
  mongoose
    .connect(dbURL)
    .then(() => {
      console.log(`Database connected successfully`);
    })
    .catch((err) => {
      console.log("mongoose error", err);
    });
};

export default dbConnection;
