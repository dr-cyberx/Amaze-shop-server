import Cart from '../db/models/cart';
import { IGetAllData } from '../types/authType';
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
        const { products } = await Cart.findOne({ userId }).populate(
          'products',
        );
        return amazeResponse(
          'Cart fetched successfully!',
          {
            id: isExist.id,
            userId,
            productCount: products.length,
            products,
          },
          false,
          200,
        );
      }
      return amazeResponse('Cart not found !', null, true, 404);
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
        const addNewCart = await addToDB(Cart, {
          userId,
          products: [{ productId: args.productId, qty: 1 }],
        });

        const { products } = await Cart.findOne({ userId }).populate(
          'products',
        );
        return amazeResponse(
          'Cart created successfully!',
          { id: addNewCart.id, userId, products },
          false,
          200,
        );
      }

      const productArray = isAlreadyExist?.products.find(
        (d: any) => d.productId == args.productId,
      );

      console.log('productArray ->', productArray);

      if (productArray) {
        const UpdatedCartRes = await Cart.update(
          { 'products.productId': productArray.productId },
          {
            $set: {
              'products.$.qty': productArray.qty + 1,
            },
          },
        );

        const returnResp: any = await findFromDB(Cart, 'One', { userId });
        console.log('returnResp => ', returnResp);
        return amazeResponse(
          'Added item to created successfully!',
          {
            id: returnResp.id,
            userId,
            productCount: returnResp.products.length,
            products: returnResp.products,
          },
          false,
          200,
        );
        // console.log('UpdatedCartRes --> ', UpdatedCartRes);
        // const newObj = { productId: args.productId, qty: productArray.length };

        // const updateExistingCart = await updateArrayFieldDB(
        //   Cart,
        //   userId,
        //   'products',
        //   newObj,
        // );
        // console.log('updateExistingCart => ', updateExistingCart);
        // if (updateExistingCart.products) {
        //   return amazeResponse(
        //     'Added item to created successfully!',
        //     {
        //       id: updateExistingCart.id,
        //       userId,
        //       productCount: updateExistingCart.products.length,
        //       products: updateExistingCart.products,
        //     },
        //     false,
        //     200,
        //   );
        // }
      }

      return amazeResponse('Cart not found !', null, true, 404);
    }
    return amazeResponse('InValid User', null, true, 401);
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
      const isExist = await Cart.find({
        products: {
          $in: [args.productId],
        },
      });
      if (isExist) {
        const res = await Cart.findOneAndUpdate(
          { userId },
          { $pull: { products: args.productId } },
          { new: true },
        );
        const { products } = await Cart.findOne({ userId }).populate(
          'products',
        );
        return amazeResponse(
          'Item Removed from Cart successfully!',
          {
            id: res.id,
            userId,
            productCount: products.length,
            products,
          },
          false,
          200,
        );
      }
      return amazeResponse('Product not exist in cart!', null, true, 401);
    }
    return amazeResponse('Invalid User!', null, true, 401);
  } catch (error) {
    return amazeResponse(`something went wrong! ${error}`, null, true, 404);
  }
};

export const hi = 'hi';
