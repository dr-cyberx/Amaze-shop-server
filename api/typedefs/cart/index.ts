export const updateCart: string = `
    addItemToCart(productId: ID!): cartResponse
    removeItemFromCart(productId: ID!): cartResponse
`;

export const getCartByUserID: string = `
    getCartByUserID: cartResponse
`;

export const Cart: string = `

    type cartResponse{
        data: cart
        error: Boolean!
        message: String!
        status: Int!
    }

    type cartProductResp{
        id: ID!
        qty: Int!
        productId: createProductResponse
        
    }

    type cart{
        id: ID!
        userId: ID!
        productCount: Int!
        products: [cartProductResp]!
    }

`;

const hi = 'hi';

export default hi;

// createCart(userId: ID!, productId: ID!): cartResponse
