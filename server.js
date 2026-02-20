const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/mern-db";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    version: process.env.APP_VERSION || "dev"
  });
});

app.get("/", (req, res) => {
  res.send("MERN CI/CD App Running");
});

module.exports = app;
