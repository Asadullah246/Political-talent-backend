
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// import multer from "multer";
// import multerS3 from 'multer-s3';
const app = express();
// use middleware
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;

// database adding
import dbConnection from "./db/db.js";

// routes

import paymentRoute from "./routes/payment/payment.route.js";
// user route
import course from "./routes/courses/courses.route.js";
import userRoute from "./routes/user/user.route.js";
import websiteInfo from "./routes/websiteInfo/testimonial.route.js";





// connect to database
dbConnection();

// use payment route
app.use("/api/v1/payment", paymentRoute);
// use user route
app.use("/api/v1/user", userRoute);
// use course route

app.use("/api/v1/course", course);
app.use("/api/v1/websiteInfo", websiteInfo);

// file upload
// const upload = multer({
//   storage: multerS3({
//     s3: s3Client,
//     acl: "public-read",
//     bucket: bucket2,
//     metadata: function (req, file, cb) {
//       // console.log("key",process.env.AWS_KEY2, "pass", process.env.AWS_PASSWORD2,"bucket",process.env.AWS_BUCKET2,"region",process.env.AWS_REGION2 );
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       const originalName = file.originalname;
//       const fileExtension = originalName.split(".").pop(); // Get the file extension
//       const fileName = originalName.split(".").shift(); // Get the file name
//       const randomString = Math.random().toString(36).substring(7); // Generate a random string
//       const currentDate = new Date().toISOString().split("T")[0];

//       // Create a unique filename using the original name, current date, and a random string
//       const uniqueFileName = `${fileName}-${currentDate}-${randomString}.${fileExtension}`;

//       cb(null, uniqueFileName);
//     },
//   }),
// });

// routes

app.get("/", (req, res, next) => {
  console.log("connected");
  res.send("server running");
});

// upload files
// app.post("/upload", upload.single("file"), (req, res) => {
//   res.send("Successfully uploaded " + req.file.originalname);
// });

// get the files
app.get("/list", async (req, res) => {
  try {
    const params = {
      Bucket: bucket2,
    };

    const response = await s3Client.send(new ListObjectsV2Command(params));
    const keys = response.Contents.map((item) => item.Key);
    console.log("keys", keys);
    res.json(keys);
  } catch (error) {
    console.error("Error listing objects:", error);
    res.status(500).json({ error: "An error occurred while listing objects" });
  }
});

// get by url
app.get("/list", async (req, res) => {
  try {
    const params = {
      Bucket: bucket2,
    };

    const listResponse = await s3Client.send(new ListObjectsV2Command(params));
    const objects = listResponse.Contents;

    // Generate URLs for each object
    const objectUrls = objects.map((object) => {
      const objectKey = object.Key;
      const objectUrl = `${baseURLAWS}/${objectKey}`; // Replace with your S3 bucket endpoint
      return objectUrl;
    });

    console.log("url", objectUrls);
    res.json(objectUrls);
  } catch (error) {
    console.error("Error listing objects:", error);
    res.status(500).json({ error: "An error occurred while listing objects" });
  }
});

// Route to get an object by its key (file path)

app.get("/getObject/:objectKey", async (req, res) => {
  const objectKey = req.params.objectKey;

  try {
    const params = {
      Bucket: bucket2, // Replace with your S3 bucket name
      Key: objectKey,
    };

    const getObjectResponse = await s3Client.send(new GetObjectCommand(params));
    const objectStream = getObjectResponse.Body;

    // Set the appropriate content type based on your file's MIME type
    res.setHeader("Content-Type", "application/octet-stream"); // Example content type

    // Pipe the object stream to the response
    objectStream.pipe(res);
  } catch (error) {
    console.error("Error getting object:", error);
    res
      .status(500)
      .json({ error: "An error occurred while getting the object" });
  }
});

// delete file
app.delete("/deleteObject/:objectKey", async (req, res) => {
  const objectKey = req.params.objectKey;
  // const objectKey = "1694776607065";

  try {
    const params = {
      Bucket: bucket2, // Replace with your S3 bucket name
      Key: objectKey,
    };

    await s3Client.send(new DeleteObjectCommand(params));

    res.json({ message: "Object deleted successfully" });
  } catch (error) {
    console.error("Error deleting object:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the object" });
  }
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});
app.listen(port, () => {
  console.log(` server running on port: ${port}`);
});
