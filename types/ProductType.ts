export interface TypeProduct {
  id: string;
  productDescription: string;
  productImage: string;
  productName: string;
  productBrand: string;
  productPrice: string;
  productRating: string | number;
  productSeller: string;
}

export interface Type_Create_Update_Product {
  data: TypeProduct | TypeProduct[] | null;
  error: Boolean;
  message: string;
  status: number;
}
