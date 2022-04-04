export const updateCart: string = `
    addItemToCart(productId: ID!): cartResponse
`;

export const getCartByUserID: string = `
    getCartByUserID(userId: ID!): cartResponse
`;

export const Cart: string = `

    type cartResponse{
        data: cart
        error: Boolean!
        message: String!
        status: Int!
    }

    type cart{
        id: ID!
        userId: ID!
        products: [createProductResponse]!
    }

`;

const hi = 'hi';

export default hi;

// createCart(userId: ID!, productId: ID!): cartResponse
