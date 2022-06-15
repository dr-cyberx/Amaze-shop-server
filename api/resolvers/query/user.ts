import {
  GetAddress,
  GetAllUser,
  GetUserDetailsByID,
  UpdateUser,
} from '../../../controllers/user';
import { IGetAllData } from '../../../types/authType';
import { Type_Create_Update_Product } from '../../../types/ProductType';

export const hello = () => 'hello';

export const getAllUser = async (
  _parent: any,
  args: any,
  { token }: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  const res: IGetAllData | Type_Create_Update_Product = await GetAllUser(token);
  return res;
};

export const getUserDetailsByID = async (
  _parent: any,
  args: any,
  { token }: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  const res: IGetAllData | Type_Create_Update_Product =
    await GetUserDetailsByID(token);
  return res;
};

export const getAddress = async (
  _parent: any,
  args: any,
  { token }: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  const res: IGetAllData | Type_Create_Update_Product = await GetAddress(token);
  return res;
};
