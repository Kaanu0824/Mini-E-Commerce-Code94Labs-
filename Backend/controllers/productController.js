const Product = require('../models/Product');

// Get all products
const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


// Search Product SKU & Name

// const searchProducts = async (req, res) => {
//   const searchTerm = req.query.q; // Assuming the search term is provided as a query parameter

//   try {
//     const products = await Product.find({
//       productName: { $regex: new RegExp(searchTerm, 'i') }, // Case-insensitive search for product name
//     });

//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };


const searchProductsById = async (req, res) => {
  const sku = req.query.sku;

  try {
    const products = await Product.find({
      sku: { $regex: new RegExp(sku, 'i') },
    });

    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


//Get Product

const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { sku, quantity, productName, productDescription, favorites, imageUrl } = req.body;

  try {
    const newProduct = new Product({
      sku,
      quantity,
      productName,
      productDescription,
      favorites,
      imageUrl,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Update a product by ID
const updateProductById = async (req, res) => {
  const productId = req.params.id;
  const { sku, quantity, productName, productDescription, favorites, imageUrl, searchProductsById } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        quantity,
        productName,
        productDescription,
        favorites,
        imageUrl,
        searchProductsById,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};




module.exports = {
  getAllProducts,
  getProductById,
  searchProductsById,
  //searchProducts,
  createProduct,
  updateProductById,
  deleteProductById,
};