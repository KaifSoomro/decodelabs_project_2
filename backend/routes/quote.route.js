import express from "express";
import { addQuote, getAllQuotes } from "../controllers/quoteController.js";

const router = express.Router();

router.post("/post", addQuote);
router.get("/get-all-quotes", getAllQuotes);

export default router;