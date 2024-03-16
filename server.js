import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectToMongoDb } from "./config/dbConfig.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to Database
connectToMongoDb();

// Run the server
app.listen(PORT, (error) => {
  error
    ? console.log("Error", error)
    : console.log("Good job!, Server is running at port", PORT);
});
