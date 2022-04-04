import { AddItemToCart, RemoveItemFromCart } from '../../../controllers/cart';
import { IGetAllData } from '../../../types/authType';
import { Type_Create_Update_Product } from '../../../types/ProductType';
// import { IGetAllData } from '../../../types/authType';
// import { Type_Create_Update_Product } from '../../../types/ProductType';

const cartMutations = {
  addItemToCart: async (
    _parent: any,
    args: any,
    { token }: any,
  ): Promise<IGetAllData | Type_Create_Update_Product> => {
    const cart = await AddItemToCart(args, token);
    return cart;
  },
  removeItemFromCart: async (
    _parent: any,
    args: any,
    { token }: any,
  ): Promise<IGetAllData | Type_Create_Update_Product> => {
    const cart = await RemoveItemFromCart(args, token);
    return cart;
  },
};

export default cartMutations;
