import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import quoteRoute from "./routes/quote.route.js";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/quotes", quoteRoute);

app.get("/", (req, res) => {
  res.send("Quote API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});