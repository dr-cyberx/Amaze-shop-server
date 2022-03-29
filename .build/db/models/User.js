"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['BUYER', 'SELLER'],
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    isPhoneVerified: {
        type: Boolean,
        required: false,
        default: false,
    },
    isEmailVerified: {
        type: Boolean,
        required: false,
        default: false,
    },
    otp: {
        type: String,
        required: false,
    },
    address: [
        {
            houseNumber: {
                type: String,
            },
            city: {
                type: String,
            },
            street: {
                type: String,
            },
        },
    ],
}, { timestamps: true });
var User = mongoose_1.model('User', userSchema);
exports.default = User;
