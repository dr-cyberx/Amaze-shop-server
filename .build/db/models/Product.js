"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var ProductSchema = new mongoose_1.Schema({
    productName: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productPrice: {
        type: String,
        required: true,
    },
    productSeller: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'User',
    },
    productBrand: {
        type: String,
        required: true,
    },
    productRating: {
        type: Number,
        required: true,
        default: 0,
    },
}, { timestamps: true });
var Product = mongoose_1.model('Product', ProductSchema);
exports.default = Product;
