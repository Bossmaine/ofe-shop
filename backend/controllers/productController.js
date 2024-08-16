import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const getSingleProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if(product) {
        return res.json(product)
    } else{
        res.status(404);
        throw new Error('Product not found');
    }
});

export { getAllProducts, getSingleProduct }
