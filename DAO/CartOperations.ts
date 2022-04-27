import Cart from '../db/models/cart';
import { updateArrayFieldDB } from '../utils/shared';
import { amazeResponse } from '../utils/shared/responses';

export const populateCartProductId = async (
  userId: string,
  message: string,
) => {
  const newCartProducts = await Cart.findOne({ userId })
    .populate({
      path: 'products.productId',
    })
    .exec();
  return amazeResponse(
    message,
    {
      id: newCartProducts.id,
      userId,
      productCount: newCartProducts.products.length,
      products: newCartProducts.products,
    },
    false,
    200,
  );
};

export const addQtyToProduct = async (isProductExists: any) => {
  await Cart.updateOne(
    { 'products.productId': isProductExists.productId },
    {
      $set: {
        'products.$.qty': isProductExists.qty + 1,
      },
    },
  );
};

export const subQtyToProduct = async (productId: any, qty: any) => {
  await Cart.updateOne(
    { 'products.productId': productId },
    {
      $set: {
        'products.$.qty': qty - 1,
      },
    },
  );
};

export const appendNewCartProduct = async (userId: string, productId) => {
  const appendedArrayFields = await updateArrayFieldDB(
    Cart,
    userId,
    'products',
    {
      qty: 1,
      productId,
    },
  );
  return appendedArrayFields;
};
