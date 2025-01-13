import Product from '../model/product.model.js';
import mongoose from 'mongoose';
export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});
    } catch (error) {
        console.log("Error in fetching products",error.message);
        return res.status(500).json({success:false, message:"Server error"});
    }
}
export const createProduct = async(req,res)=>{
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message:"Please enter all fields"});
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success:true, message:"Product added successfully",data:newProduct});
    } catch (error) {
        console.log("Error in creating product",error.message); 
        return res.status(500).json({success:false, message:"Server error"});
    }
}
export const updateProduct = async(req,res)=>{
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid product id"});
    }   
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,message:"Product updated successfully",data:updatedProduct});
    } catch (error) {
        return res.status(404).json({success:false,message:"Product not found"});
    }
}

export const deleteProduct = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid product id"});
    } 
    try {
        
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Product deleted successfully"});
    } catch (error) {
        return res.status(500).json({success:false,message:"Server error"});
    }}