import { Router, Request, Response } from "express";
import Products from "../models/products";

const router = Router();

// GET /api/products
router.get("/products", async (req: Request, res: Response) => {
  try {
    const products = await Products.find().sort({ productPosition: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/reorder", async (req, res) => {
  const { products } = req.body;

  try {
    for (let i = 0; i < products.length; i++) {
      await Products.updateOne(
        { _id: products[i]._id },
        { productPosition: i }
      );
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
