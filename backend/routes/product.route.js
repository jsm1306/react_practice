import express from "express";
const router = express.Router();
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
//to fetch available products
router.get("/",getProducts);

//to create a new product
router.post("/",createProduct)

//to update a product
router.put("/:id",updateProduct);

//to delete a product
router.delete("/:id",deleteProduct);
export default router;