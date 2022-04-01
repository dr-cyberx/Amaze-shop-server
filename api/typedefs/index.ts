import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import {
  Login,
  signUp,
  authResponse,
  verifyContacts,
  verifyResponse,
  sendOtpToContacts,
} from './auth/index';
import { Cart, createCart, getCartByUserID } from './cart';
import {
  createProduct,
  createProductInput,
  createProductResponse,
  getAllProductResponse,
  getAllProducts,
  updateProduct,
} from './Product';
import getAllUser from './user/query';
import { getAllUserResponse, newUser, userRole } from './user/types';

const TypeDefs: DocumentNode = gql`
  type Query {
    hello: String!
    ${getAllUser}
    ${getAllProducts}
    ${getCartByUserID}
    ${sendOtpToContacts}
  }

  ${newUser}
  ${getAllUserResponse}
  ${getAllProductResponse}
  ${userRole}
  ${authResponse}
  ${createProductInput}
  ${createProductResponse}
  ${verifyResponse}
  ${Cart}

  type Mutation{
    ${Login}
    ${signUp}
    ${verifyContacts}
    ${createProduct}
    ${updateProduct}
    ${createCart}
  }
`;

export default TypeDefs;
