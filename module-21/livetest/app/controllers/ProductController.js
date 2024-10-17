const express = require("express");
const productModel = require("./productModel"); // assuming this is the file where schema is defined
const router = express.Router();

// Create Product
router.post("/product", async (req, res) => {
  try {
    const newProduct = new productModel({
      title: req.body.title,
      short_des: req.body.short_des,
      price: req.body.price,
      discount: req.body.discount,
      image: req.body.image,
      stock: req.body.stock,
      star: req.body.star,
      remark: req.body.remark,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

// Read a single product by ID
router.get("/product/:id", async (req, res) => {
    try {
      const product = await productModel.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;
  
// Delete a product by ID
router.delete("/product/:id", async (req, res) => {
    try {
      const product = await productModel.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      await productModel.findByIdAndDelete(req.params.id);
      res.json({ message: "Product deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;
  

// Update a product by ID
router.put("/product/:id", async (req, res) => {
    try {
      const updatedProduct = await productModel.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          short_des: req.body.short_des,
          price: req.body.price,
          discount: req.body.discount,
          image: req.body.image,
          stock: req.body.stock,
          star: req.body.star,
          remark: req.body.remark,
        },
        { new: true } // returns the updated document
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.json(updatedProduct);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;
  