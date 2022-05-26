import { Request, Response } from 'express';
import Product from '../db/models/Product';
import { IGetAllData } from '../types/authType';
import { Type_Create_Update_Product } from '../types/ProductType';
import isValidUser from '../utils/isValid';
import { addToDB, findFromDB, UpdateToDB } from '../utils/shared';
import { amazeResponse } from '../utils/shared/responses';

export const CreateProduct = async (
  args: any,
  token: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const { isValid, data } = await isValidUser(
      addToDB,
      token,
      Product,
      args.input,
    );
    if (isValid) {
      return amazeResponse('Product created successfully!', data, false, 200);
    }
    return amazeResponse('InValid User', null, true, 401);
  } catch (error) {
    return amazeResponse(`something went wrong! ${error}`, null, true, 404);
  }
};

export const UpdateProduct = async (
  args: any,
  token: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const { isValid, userId } = await isValidUser(null, token);
    if (isValid) {
      const createProductResponse = await UpdateToDB(
        Product,
        args.productId,
        {
          ...args,
          productSeller: userId,
        },
        true,
      );
      return amazeResponse(
        'Product updated successfully!',
        { ...createProductResponse, id: createProductResponse?._id },
        false,
        200,
      );
    }
    return amazeResponse('InValid User', null, true, 401);
  } catch (error) {
    return amazeResponse('something went wrong!', null, true, 401);
  }
};

export const GetAllProducts = async (
  token: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const { isValid } = await isValidUser(null, token);
    if (isValid) {
      const res: any = await findFromDB(Product, 'All');
      return amazeResponse(
        'fetched all Products successfully',
        res,
        false,
        200,
      );
    }
    return amazeResponse('Invalid user!');
  } catch (error) {
    return amazeResponse('something went wrong!');
  }
};

export const GetProductById = async (
  args: any,
  token: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const { isValid } = await isValidUser(null, token);
    if (isValid) {
      const res: any = await findFromDB(Product, 'One', { id: args.id });
      return amazeResponse('fetched Product successfully', res, false, 200);
    }
    return amazeResponse('Invalid User!');
  } catch (error) {
    return amazeResponse('something went wrong!');
  }
};

export const BulkImport = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const productCsv = req.body.csvFile;
  const bulkProductArray = [];
  let isError: boolean = true;

  productCsv.forEach((element: any) => {
    if (element.length > 2) {
      bulkProductArray.push({
        productName: element[0],
        productImage: element[1],
        productDescription: element[2],
        productPrice: element[3],
        productSeller: element[4],
        productBrand: element[5],
        productRating: element[6],
        tags: element[7],
      });
    }
  });

  Product.insertMany(bulkProductArray)
    .then((): void => {
      isError = false;
    })
    .catch((err: any): void => {
      console.log(err);
      isError = true;
    });

  const allProducts = await findFromDB(Product, 'All');
  if (isError) {
    res.json(amazeResponse('Bulk import failed', null, true, 400));
  } else {
    res.json(
      amazeResponse('Bulk import successfully', allProducts, false, 200),
    );
  }
};

export const productCsvExport = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const allProducts: any = await findFromDB(Product, 'All');
  if (Array.isArray(allProducts)) {
    const productArray: any[] = allProducts.map((d) => ({ ...d._doc }));
    res.status(200).json({ data: productArray });
  }
};

export const hi = 'hllo';
