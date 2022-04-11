import { GetCartByUserID } from '../../../controllers/cart';

export const hello = () => 'hello';

export const getCartByUserID = async (
  _parent: any,
  args: any,
  { token }: any,
): Promise<any> => {
  const res: any = await GetCartByUserID(token);
  return res;
};
