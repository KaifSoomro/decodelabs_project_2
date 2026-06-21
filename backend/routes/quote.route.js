import express from "express";

const router = express.Router();

router.post("/post", addQuote);
// router.get("/quotes", getAllQuotes);

export default router;