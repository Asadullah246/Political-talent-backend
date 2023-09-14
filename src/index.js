import express from "express";
import cors from "cors";
import dotenv from "dotenv"
const app = express();
// use middleware
app.use(cors());
app.use(express.json());
dotenv.config(); 
const port = process.env.PORT || 5000;

// import route
// import jobRouter from "./app/modules/job/job.route";



// use custom url
// app.use("/job", jobRouter);

app.get("/", (req, res, next) =>
  res
    .status(201)
    .send({ status: true, massage: "This is political talent Api!" })
);

app.all("*", (req, res, next) => {
    res.status(404).json({
      message: `Can't find ${req.originalUrl} on this server!`,
    });
  });


