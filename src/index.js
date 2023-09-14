import express from "express";
import cors from "cors";
import dotenv from "dotenv"
const app = express();
// use middleware
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;
import  dbConnection from "./db/db.js"

dbConnection() 

// const dbURL=process.env.DATABASE_URL
// console.log("du url ", dbURL );
// if (!dbURL) {
//     console.error("Mongo URL not set in env file");
//     return new Error("Mongo URL not set in env file");
//   }

// import route
import userRouter from "./routes/user/user.route.js";



// use custom url
app.use("/user", userRouter);

app.get("/", (req, res, next) =>{
    console.log("connected");
    res.send("server running")
    // res
    // .status(201)
    // .send({ status: true, massage: "This is political talent Api!" })
}

);

app.all("*", (req, res, next) => {
    res.status(404).json({
      message: `Can't find ${req.originalUrl} on this server!`,
    });
  });
  app.listen(port, () => {
    console.log(` server running on port: ${port}`);
  });


