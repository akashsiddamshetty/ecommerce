import { Router, Request, Response } from 'express';
import Products from '../models/products';

const router = Router();

// GET /api/products
router.get('/products', async (req: Request, res: Response) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
