// 


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import customerRoutes from "./routers.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/crm_database";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.use(customerRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on https://company-wisdom-e17ny4wr0-sreejithsree30s-projects.vercel.app/`);
});
