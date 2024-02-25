//ini Mongo
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    sku: { type: String, required: true , unique: true},
    quantity: { type: Number},
    productName: { type: String, required: true },
    productDescription: { type: String, required: true },
    favorites: { type: Boolean, default: false },
    imageUrl: { type: String },
    searchProductsById: {type:String}
});

const product = mongoose.model('product', productSchema);

module.exports = product;