"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = __importDefault(require("../models/products"));
const router = (0, express_1.Router)();
// GET /api/products
router.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_1.default.find().sort({ productPosition: 1 });
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
router.post("/reorder", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { products } = req.body;
    try {
        for (let i = 0; i < products.length; i++) {
            yield products_1.default.updateOne({ _id: products[i]._id }, { productPosition: i });
        }
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
//# sourceMappingURL=productRoutes.js.map