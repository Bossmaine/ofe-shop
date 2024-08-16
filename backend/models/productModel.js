import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    brand: { type: String, required: true},
    rating: { type: Number, default: 0, required: true},
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema)

export default Product;