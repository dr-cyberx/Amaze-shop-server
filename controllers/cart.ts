import mongoose from 'mongoose';
import {
  addQtyToProduct,
  appendNewCartProduct,
  populateCartProductId,
  subQtyToProduct,
} from '../DAO/CartOperations';
import Cart from '../db/models/cart';
import { IGetAllData } from '../types/authType';
import { TypeProductInCart, TypeReturnProductInCart } from '../types/cartType';
import { Type_Create_Update_Product } from '../types/ProductType';
import isValidUser from '../utils/isValid';
import { addToDB, findFromDB, updateArrayFieldDB } from '../utils/shared';
import { amazeResponse } from '../utils/shared/responses';

export const GetCartByUserID = async (
  token: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const { isValid, userId } = await isValidUser(null, token);
    if (isValid) {
      const isExist: any = await findFromDB(Cart, 'One', { userId });
      if (isExist) {
        return populateCartProductId(
          userId,
          'Fetched Product By Id successfully!',
        );
      }
      return amazeResponse('Cart is empty !', [], false, 200);
    }
    return amazeResponse('InValid User', null, true, 401);
  } catch (error) {
    return amazeResponse(`something went wrong! ${error}`, null, true, 404);
  }
};

export const AddItemToCart = async (
  args: any,
  token: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const { isValid, userId } = await isValidUser(null, token);
    if (isValid) {
      const isAlreadyExist: any = await findFromDB(Cart, 'One', { userId });
      if (!isAlreadyExist) {
        await addToDB(Cart, {
          userId,
          products: [{ productId: args.productId, qty: 1 }],
        });

        return populateCartProductId(
          userId,
          'Added item to created successfully!',
        );
      }

      const isProductExits: TypeProductInCart = isAlreadyExist?.products.find(
        (d: any) => d.productId == args.productId,
      );

      if (isProductExits) {
        await addQtyToProduct(isProductExits);
        return populateCartProductId(
          userId,
          'Added item to created successfully!',
        );
      }

      const appendNewProduct: TypeReturnProductInCart =
        await appendNewCartProduct(userId, args.productId);

      if (appendNewProduct.products) {
        return populateCartProductId(
          userId,
          'Added item to created successfully!',
        );
      }
      return amazeResponse('Product add failed !', null, true, 404);
    }
    return amazeResponse('Cart not found !', null, true, 404);
  } catch (error) {
    return amazeResponse(`something went wrong! ${error}`, null, true, 404);
  }
};

export const RemoveItemFromCart = async (
  args: any,
  token: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const { isValid, userId } = await isValidUser(null, token);
    if (isValid) {
      const { products } = await Cart.findOne({ userId });
      if (products) {
        const isExist = products.find(
          (product: any) => product.productId == args.productId,
        );
        if (isExist) {
          await subQtyToProduct(args.productId, isExist.qty);
          return populateCartProductId(
            userId,
            'Item removed from Cart successfully!',
          );
        }
        return amazeResponse('Product not exist in cart!', null, true, 401);
      }
      return amazeResponse('Product not exist in cart!', null, true, 401);
    }
    return amazeResponse('Invalid User!', null, true, 401);
  } catch (error) {
    return amazeResponse(`something went wrong! ${error}`, null, true, 404);
  }
};

export const hi = 'hi';
