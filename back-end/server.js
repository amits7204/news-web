const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRouter");

dotenv.config();
const app = express();

// const students = require("./models/students");
const cors = require("cors");

app.use(cors());
app.use(express.json());
// console.log("STUDENT ROUTES: ", studentsRoutes);
app.use("/users", userRouter);

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log("the database is connected: ", err);
  }
);

app.listen(8080, () => {
  console.log("server is up and running");
});
