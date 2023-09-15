import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
// use middleware
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;
import multer from "multer"
import multerS3 from "multer-s3"
import AWS from "aws-sdk"
import { S3Client,ListObjectsV2Command  } from '@aws-sdk/client-s3'

AWS.config.update({
  region: process.env.AWS_REGION2,
  credentials: {
    accessKeyId: process.env.AWS_KEY2,
    secretAccessKey: process.env.AWS_PASSWORD2
  }
});
const s3Client = new S3Client({
  region: process.env.AWS_REGION2,
  credentials: {
    accessKeyId: process.env.AWS_KEY2,
    secretAccessKey: process.env.AWS_PASSWORD2,
  },
});

import dbConnection from "./db/db.js";
dbConnection();

const bucket2 = process.env.AWS_BUCKET2;

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: bucket2,
    metadata: function (req, file, cb) {
      console.log("key",process.env.AWS_KEY2, "pass", process.env.AWS_PASSWORD2,"bucket",process.env.AWS_BUCKET2,"region",process.env.AWS_REGION2 );
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})


app.get("/", (req, res, next) => {
  console.log("connected");
  res.send("server running");
});


app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Successfully uploaded ' + req.file.originalname);
  // Handle the uploaded file here
});

// get the files 

// app.get("/list", async (req, res) => {
//   try {
//     const params = {
//       Bucket: bucket2, // Replace with your S3 bucket name
//     };

//     const response = await s3Client.send(new ListObjectsV2Command(params));
//     const keys = response.Contents.map((item) => item.Key);
// console.log("keys", keys);
//     res.json(keys);
//   } catch (error) {
//     console.error("Error listing objects:", error);
//     res.status(500).json({ error: "An error occurred while listing objects" });
//   }
// });

// get by url


app.get("/list", async (req, res) => {
  try {
    const params = {
      Bucket: bucket2, // Replace with your S3 bucket name
    };

    const listResponse = await s3Client.send(new ListObjectsV2Command(params));
    const objects = listResponse.Contents;

    // Generate URLs for each object
    const objectUrls = objects.map((object) => {
      const objectKey = object.Key;
      const objectUrl = `https://your-s3-bucket-endpoint/${objectKey}`; // Replace with your S3 bucket endpoint
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
    res.status(500).json({ error: "An error occurred while getting the object" });
  }
});



// app.get("/download/:filename", async (req, res) => {
//   const filename = req.params.filename
//   let x = await s3.getObject({ Bucket: BUCKET, Key: filename }).promise();
//   res.send(x.Body)
// })

// app.delete("/delete/:filename", async (req, res) => {
//   const filename = req.params.filename
//   await s3.deleteObject({ Bucket: BUCKET, Key: filename }).promise();
//   res.send("File Deleted Successfully")

// })

// end of aws file mgmt temporary

app.all("*", (req, res, next) => {
  res.status(404).json({
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});
app.listen(port, () => {
  console.log(` server running on port: ${port}`);
});
