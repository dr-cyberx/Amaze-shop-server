import { AddItemToCart } from '../../../controllers/cart';
// import { IGetAllData } from '../../../types/authType';
// import { Type_Create_Update_Product } from '../../../types/ProductType';

const cartMutations = {
//   createCart: async (
//     _parents: any,
//     args: any,
//     { token }: any,
//   ): Promise<any> => {
//     const cart = await CreateCart(args, token);
//     return cart;
//   },
  addItemToCart: async (_parent: any, args: any, { token }: any) => {
    const cart = await AddItemToCart(args, token);
    return cart;
  },
};

export default cartMutations;
