import { ApolloError } from 'apollo-server-errors';
import User from '../db/models/User';
import { findFromDB, UpdateToDB } from '../utils/shared';
import { amazeResponse } from '../utils/shared/responses';
import { IGetAllData } from '../types/authType';
import isValidUser from '../utils/isValid';
import { Type_Create_Update_Product } from '../types/ProductType';

export const GetAllUser = async (
  token: String,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const res = await isValidUser(findFromDB, token, User, 'All');
    if ((await res).isValid) {
      return amazeResponse('fetched Successfully', res.data, false, 200);
    }
    return amazeResponse('InValid User');
  } catch (err) {
    return amazeResponse(`failed to fetch ${new ApolloError(err)}`);
  }
};

export const GetUserDetailsByID = async (
  token: String,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const { isValid, userId } = await isValidUser(null, token);
    if (isValid) {
      const userDetail: any = await findFromDB(User, 'One', { id: userId });
      return amazeResponse('fetched Successfully', userDetail, false, 200);
    }
    return amazeResponse('InValid User');
  } catch (err) {
    return amazeResponse(`failed to fetch ${new ApolloError(err)}`);
  }
};

export const UpdateUser = async (
  token: String,
  args: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const { isValid, userId } = await isValidUser(null, token);
    if (isValid) {
      const updatedUser: any = await UpdateToDB(
        User,
        userId,
        { ...args.input },
        true,
      );
      return amazeResponse(
        'User updated Successfully!',
        updatedUser,
        false,
        200,
      );
    }
    return amazeResponse('InValid User');
  } catch (err) {
    return amazeResponse(`failed to fetch ${new ApolloError(err)}`);
  }
};

export const hyy: string = 'hii';
