import Quote from "../models/quote.model.js";

export const addQuote = async (req, res) => {
  try {
    const { quote, fullName } = req.body;
    if (!quote || !fullName) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const newQuote = await Quote.create({
      fullName,
      quote,
    });

    return res.status(201).json({
      success: true,
      message: "Quote Added Successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    if (quotes.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Not quotes added yet.",
      });
    }

    return res.status(200).json({
      success: true,
      quotes
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
