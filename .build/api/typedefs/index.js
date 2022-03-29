"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var index_1 = require("./auth/index");
var Product_1 = require("./Product");
var query_1 = __importDefault(require("./user/query"));
var types_1 = require("./user/types");
var TypeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    hello: String!\n    ", "\n    ", "\n    ", "\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  type Mutation{\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n"], ["\n  type Query {\n    hello: String!\n    ", "\n    ", "\n    ", "\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  type Mutation{\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n"])), query_1.default, Product_1.getAllProducts, index_1.sendOtpToContacts, types_1.newUser, types_1.getAllUserResponse, Product_1.getAllProductResponse, types_1.userRole, index_1.authResponse, Product_1.createProductInput, Product_1.createProductResponse, index_1.verifyResponse, index_1.Login, index_1.signUp, index_1.verifyContacts, Product_1.createProduct, Product_1.updateProduct);
exports.default = TypeDefs;
var templateObject_1;
