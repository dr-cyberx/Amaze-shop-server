import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    profileImage: {
      type: Number,
      required: false,
      default: 9,
    },
    userName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
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
        landmark: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true },
);

const User = model('User', userSchema);

export default User;
