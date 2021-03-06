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
import { Cart, updateCart, getCartByUserID } from './cart';
import {
  createProduct,
  createProductInput,
  createProductResponse,
  getAllProductResponse,
  getAllProducts,
  updateProduct,
} from './Product';
import { getAllUser, updateUser } from './user/query';
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
    ${updateUser}
    ${verifyContacts}
    ${createProduct}
    ${updateProduct}
    ${updateCart}
  }
`;

export default TypeDefs;
