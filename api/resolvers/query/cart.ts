import { GetCartByUserID } from '../../../controllers/cart';
import { GetAllUser } from '../../../controllers/user';
import { IGetAllData } from '../../../types/authType';
import { Type_Create_Update_Product } from '../../../types/ProductType';

export const hello = () => 'hello';

export const getCartByUserID = async (
  _parent: any,
  args: any,
  { token }: any,
): Promise<any> => {
  const res: any = await GetCartByUserID(
    token,
  );
  return res;
};
