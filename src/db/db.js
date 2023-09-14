import mongoose from "mongoose";
import dotenv from "dotenv";
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
