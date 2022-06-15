import mongoose, { model, Schema } from 'mongoose';

const OrderSchema: mongoose.Schema<
  any,
  mongoose.Model<any, any, any, any>,
  any,
  any
> = new Schema(
  {
    CustomerId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    CartId: {
      type: mongoose.Types.ObjectId,
      requried: true,
      ref: 'Cart',
    },
    Address: {
      houseNumber: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      landmark: {
        type: String,
        required: true,
      },
    },
    totalPrice: {
      type: String,
      required: true,
    },
    isPaid: {
      type: String,
      enum: ['0', '1'],
      default: '0',
    },
    status: {
      type: String,
      enum: ['1', '2', '3'],
      required: true,
      default: '1',
    },
  },
  { timestamps: true },
);

const Order: mongoose.Model<any, {}, {}, {}> = model('Order', OrderSchema);

export default Order;
