import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Quote API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});