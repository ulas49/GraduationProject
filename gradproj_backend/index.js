import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js"


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); 






app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers from Ulas!",
  });
});

app.use("/api/user", UserRoutes);

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Somethin g went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});


const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to Mongo DB"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

const startServer = async () => {
  try {
    connectDB();
    app.listen(3001, () => console.log("Server started on port 3001"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
