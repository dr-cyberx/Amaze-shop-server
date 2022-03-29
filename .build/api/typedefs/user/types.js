"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = "  type newUser{\n   id: ID!\n   userName: String\n   email: String\n   isPhoneVerified: Boolean\n   isEmailVerified: Boolean\n   password: String\n   phoneNumber: String\n   role:String\n }";
exports.getAllUserResponse = "\n type getAllUserResponse{\n   data: [newUser]!\n   error: Boolean\n   status: Int!\n   message: String!\n }\n";
exports.userRole = "\n enum userRole{\n   BUYER,\n   SELLER\n }\n";
