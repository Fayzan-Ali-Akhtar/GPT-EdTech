import express from "express";
import {
  AdminRoute,
  CourseCommentRoute,
  CourseLessonRoute,
  CourseQuizRoute,
  CourseRatingRoute,
  CourseRoute,
  EnrollmentRoute,
  StudentRoute,
} from "./Constant";
const app = express();
const port = process.env.PORT || 5001;
const connectDB = require("./DB/Connect");
require("dotenv").config();
const cors = require("cors");

// Importing Routes
const studentRouter = require("./routes/studentRoute");
const enrollmentRouter = require("./routes/enrollmentRoute");
const adminRouter = require("./routes/adminRoute");
const courseRouter = require("./routes/courseRoute");
const lessonRouter = require("./routes/lessonRoute");
const ratingRouter = require("./routes/ratingRoute");
const commentRouter = require("./routes/commentRoute");
const questionRouter = require("./routes/questionRoute");

app.use(cors());

app.use(express.json());

// Health‑check endpoint
app.get("/", (_req, res) => {
  res.status(200).json({ message: "API is running..." });
});

// For Student Routes
app.use(StudentRoute, studentRouter);

// Use the enrollment route
app.use(EnrollmentRoute, enrollmentRouter);

app.use(AdminRoute, adminRouter);

app.use(CourseRoute, courseRouter);

app.use(CourseLessonRoute, lessonRouter);

app.use(CourseRatingRoute, ratingRouter);

app.use(CourseCommentRoute, commentRouter);

app.use(CourseQuizRoute, questionRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
