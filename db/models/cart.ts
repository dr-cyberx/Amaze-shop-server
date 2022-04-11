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
        productId: { type: mongoose.Types.ObjectId, ref: 'Product' },
        qty: { type: Number, required: true, default: 1 },
      },
    ],
  },
  { timestamps: true },
);

const Cart: mongoose.Model<any, {}, {}, {}> = model('Cart', CartSchema);

export default Cart;
