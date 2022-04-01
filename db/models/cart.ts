import mongoose, { Schema, model } from 'mongoose';

const CartSchema: mongoose.Schema<
  any,
  mongoose.Model<any, any, any, any>,
  any,
  any
> = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    products: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true },
);

const Cart: mongoose.Model<any, {}, {}, {}> = model('Cart', CartSchema);

export default Cart;
