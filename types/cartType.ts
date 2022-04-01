import { commonResponse } from './authType';
import { TypeProduct } from './ProductType';

export interface TypeCart {
  id: string;
  userID: string;
  products: Array<TypeProduct>;
}

export interface TypeCartResponse extends commonResponse {
  data: TypeCart;
}
