import Cart from '../db/models/cart';
import Product from '../db/models/Product';
import isValidUser from '../utils/isValid';
import { addToDB, findFromDB } from '../utils/shared';
import { amazeResponse } from '../utils/shared/responses';

export const CreateCart = async (args: any, token: any): Promise<any> => {
  try {
    const { isValid, userId } = await isValidUser(null, token);
    if (isValid) {
      const data = await addToDB(Cart, {
        userId,
        products: [args.productId],
      });
      if (data.products) {
        const res: any = await Promise.all(
          data.products.map((product: any) =>
            findFromDB(Product, 'One', { id: product }),
          ),
        );
        console.log('res?.data ', res);
        console.log(
          'res --> ',
          amazeResponse(
            'Cart created successfully!',
            {
              userId,
              products: res,
            },
            false,
            200,
          ),
        );
        return amazeResponse(
          'Cart created successfully!',
          {
            userId,
            products: res,
          },
          false,
          200,
        );
      }

      return amazeResponse('Cart created successfully!', data, false, 200);
    }
    return amazeResponse('InValid User', null, true, 401);
  } catch (error) {
    return amazeResponse(`something went wrong! ${error}`, null, true, 404);
  }
};

export const hi = 'hi';
