const mongoose = require('mongoose');
const SkincareSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least  2 characters"]
    },
    description: { 
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least  3 characters"]
    },
    price: { 
        type: Number
    },
    image: { 
        type: String,
        required: [true, "Image is required"],
        minlength: [3, "Image must be at least  3 characters"]
    },
    skinType: {
        type: String,
        required: [true, "Must choose a Skin Type!"],
        minlength: [3]
    },
    sensitive: { 
        type: Boolean,
        required: true
    },
    productLink: { 
        type: String,
        required: [true, "Product Link is required"],
        minlength: [3, "Product Link must be at least  3 characters"]
    }
}, { timestamps: true });
module.exports.Skincare = mongoose.model('Skincare', SkincareSchema);