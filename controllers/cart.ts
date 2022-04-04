import Cart from '../db/models/cart';
import Product from '../db/models/Product';
import { IGetAllData } from '../types/authType';
import { Type_Create_Update_Product } from '../types/ProductType';
import isValidUser from '../utils/isValid';
import { addToDB, findFromDB, updateArrayFieldDB } from '../utils/shared';
import { amazeResponse } from '../utils/shared/responses';

// export const CreateCart = async (args: any, token: any): Promise<any> => {
//   try {
//     const { isValid, userId } = await isValidUser(null, token);
//     if (isValid) {
//       const data = await addToDB(Cart, {
//         userId,
//         products: [args.productId],
//       });
//       if (data.products) {
//         const res: any = await Promise.all(
//           data.products.map((product: any) => findFromDB(Product, 'One', { id: product })),
//         );
//         return amazeResponse(
//           'Cart created successfully!',
//           {
//             userId,
//             products: res,
//           },
//           false,
//           200,
//         );
//       }

//       return amazeResponse('Cart created successfully!', data, false, 200);
//     }

//     return amazeResponse('InValid User', null, true, 401);
//   } catch (error) {
//     return amazeResponse(`something went wrong! ${error}`, null, true, 404);
//   }
// };

export const AddItemToCart = async (
  args: any,
  token: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const { isValid, userId } = await isValidUser(null, token);
    if (isValid) {
      const isAlreadyExist = await findFromDB(Cart, 'One', { userId });
      if (!isAlreadyExist) {
        const addNewCart = await addToDB(Cart, {
          userId,
          products: [args.productId],
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
      const updateExistingCart = await updateArrayFieldDB(
        Cart,
        userId,
        'products',
        args.productId,
      );
      if (updateExistingCart.products) {
        const { products } = await Cart.findOne({ userId }).populate(
          'products',
        );

        return amazeResponse(
          'Cart created successfully!',
          {
            id: updateExistingCart.id,
            userId,
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

export const RemoveItemFromCart = async (
  args: any,
  token: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const { isValid, userId } = await isValidUser(null, token);
    return amazeResponse('InValid User', null, true, 401);
  } catch (error) {
    return amazeResponse(`something went wrong! ${error}`, null, true, 404);
  }
};

export const hi = 'hi';
