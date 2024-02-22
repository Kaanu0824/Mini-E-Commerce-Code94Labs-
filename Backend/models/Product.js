//ini Mongo
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    sku: { type: String, required: true , unique: true},
    quantity: { type: Number, required: true },
    productName: { type: String, required: true },
    productDescription: { type: String, required: true },
    favorites: { type: Boolean, default: false },
    imageUrl: { type: String },
});

const product = mongoose.model('product', productSchema);

module.exports = product;