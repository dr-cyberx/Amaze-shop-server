import authMutations from './mutation/auth';
import cartMutations from './mutation/cart';
import ProductMutations from './mutation/Product';
import { changePassword, updateUser } from './mutation/user';
import otpQueries from './query/auth';
import { getCartByUserID } from './query/cart';
import { productquery } from './query/Product';
import { getAllUser, getUserDetailsByID } from './query/user';

const resolvers = {
  Query: {
    hello: () => 'hello world ',
    getAllUser,
    getUserDetailsByID,
    getCartByUserID,
    ...productquery,
    ...otpQueries,
  },
  Mutation: {
    ...authMutations,
    ...ProductMutations,
    ...cartMutations,
    updateUser,
    changePassword,
  },
};

export default resolvers;
