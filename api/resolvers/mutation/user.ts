import { ChangePassword } from '../../../controllers/auth';
import { UpdateUser } from '../../../controllers/user';
import { IGetAllData } from '../../../types/authType';
import { Type_Create_Update_Product } from '../../../types/ProductType';

export const updateUser = async (
  _parent: any,
  args: any,
  { token }: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  const res: IGetAllData | Type_Create_Update_Product = await UpdateUser(
    token,
    args,
  );
  return res;
};

export const changePassword = async (
  _parent: any,
  args: any,
  { token }: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  const res: IGetAllData | Type_Create_Update_Product = await ChangePassword(
    token,
    args,
  );
  return res;
};

export const hi = 'hiiii';
