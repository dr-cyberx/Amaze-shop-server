export const newUser: string = `

  type address{
    houseNumber: String
    city: String
    street: String
    landmark: String
  }

  input inputAddress{
    houseNumber: String
    city: String
    street: String
    landmark: String
  }

  input userInput{
    userName: String
    email: String
    isPhoneVerified: Boolean
    isEmailVerified: Boolean
    password: String
    profileImage: Int
    phoneNumber: String
    address: [inputAddress]
    role:String
}

  type newUser{
    id: ID! 
    userName: String
    email: String
    profileImage: Int
    isPhoneVerified: Boolean
    isEmailVerified: Boolean
    password: String
    phoneNumber: String
    address: [address]!
    role:String
  }
 `;

export const getAllUserResponse: string = `
 type getAllUserResponse{
   data: [newUser]!
   error: Boolean
   status: Int!
   message: String!
 }

 type userDetail{
  data: newUser
  error: Boolean
  status: Int!
  message: String!
 }

 type useraddresses{
  data: [address]!
  error: Boolean
  status: Int!
  message: String!
 }
`;

export const userRole: string = `
 enum userRole{
   BUYER,
   SELLER
 }
`;
