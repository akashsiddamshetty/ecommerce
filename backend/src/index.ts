import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./db";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());

connectDB();
app.use("/api", productRoutes);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
