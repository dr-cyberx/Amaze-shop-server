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

export interface TypeProductInCart {
  qty: number;
  id: string;
  productId: string;
}
export interface TypeReturnProductInCart {
  id: string;
  userId: string;
  products: Array<TypeProductInCart>;
}
