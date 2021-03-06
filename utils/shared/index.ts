/* eslint-disable new-cap */
import mongoose from 'mongoose';
import User from '../../db/models/User';
import { TypeProduct } from '../../types/ProductType';
import { SingleuserType } from '../../types/userType';

export const addToDB = async (modelName: any, args: any): Promise<any> => {
  const res: any = await new modelName(args).save();
  return res;
};

export const updateArrayFieldDB = async (
  modelName: any,
  userId: any,
  fieldToPush: any,
  value: any,
) => {
  const res = await modelName.findOneAndUpdate(
    { userId },
    { $push: { [fieldToPush]: value } },
    { new: true },
  );

  return res;
};

export const delFromDB = async (
  modelName: typeof User,
  Id: mongoose.Types.ObjectId,
): Promise<any> => {
  const res: any = await modelName.findByIdAndRemove(Id);
  return res?._doc;
};

export const UpdateToDB = async (
  modelName: any,
  Id: string | any,
  fields: any,
  shouldNew: boolean = true,
): Promise<any> => {
  const res: any = await modelName.findByIdAndUpdate(
    Id,
    { ...fields },
    {
      new: shouldNew,
    },
  );
  return res?._doc;
};

export const findFromDB = async (
  modelName: typeof User,
  filter: 'All' | 'One',
  otherCreds?: any,
): Promise<any> => {
  if (filter === 'All') {
    const res: Promise<SingleuserType[]> | any[] | null = await modelName.find(
      {},
    );
    return res;
  }
  if (otherCreds.email) {
    const res: any = await modelName.findOne({
      email: otherCreds.email,
    });
    return res;
  }
  if (otherCreds.userId) {
    const res: any = await modelName.findOne({
      userId: otherCreds.userId,
    });
    return res;
  }
  if (otherCreds.id) {
    const res: Promise<SingleuserType> | any[] = await modelName.findById({
      _id: otherCreds.id,
    });
    return res;
  }
  if (otherCreds.userName) {
    const res: Promise<SingleuserType> | any[] = await modelName.findOne({
      userName: otherCreds.userName,
    });
    return res;
  }
  return [];
};
