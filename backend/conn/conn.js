const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect("mongodb+srv://Task-Management-User:S7Yjrg9MeHppGyR@cluster0.g5jnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);  // Log the error instead of sending response
    // You can throw an error here if you want to handle it higher up in your code
    throw new Error("Database connection failed");
  }
};

conn();

