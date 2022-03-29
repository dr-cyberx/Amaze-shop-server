"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = 'createProduct(input: createProductInput!) : createProductMutationResponse ';
exports.updateProduct = 'updateProduct(productId: String, input: createProductInput!) : createProductMutationResponse ';
exports.createProductInput = "input createProductInput{\n  productName: String!\n  productImage: String!\n  productBrand: String!\n  productDescription: String!\n  productPrice: String!\n  productSeller: String!\n  productRating: Float!\n}";
exports.createProductResponse = "\n\ntype createProductResponse{\n  id: ID!\n  productName: String!\n  productImage: String!\n  productDescription: String!\n  productBrand: String!\n  productPrice: String!\n  productSeller: String!\n  productRating: Float!\n}\n\ntype createProductMutationResponse{\n  data: createProductResponse\n  error: Boolean!\n  message: String!\n  status: Int!\n}\n\n";
exports.getAllProductResponse = "\ntype getAllProductResponse{\n  data: [createProductResponse]!\n  error: Boolean!\n  message: String!\n  status: Int!\n}\n\ntype singleProductResponse{\n  data: createProductResponse\n  error: Boolean!\n  message: String!\n  status: Int!\n}\n";
exports.getAllProducts = "\n  getallproducts: getAllProductResponse!\n  getProductById(id: ID!): singleProductResponse!\n";
exports.hello = 'hello';
