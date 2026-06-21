import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then((conn) => {
      console.log("MongoDB Connected");
    })
    .catch((error) => {
      console.error("Database Connection Failed:", error.message);
      process.exit(1);
    });
};

export default connectDB;