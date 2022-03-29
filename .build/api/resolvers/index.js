"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("./mutation/auth"));
var Product_1 = __importDefault(require("./mutation/Product"));
var auth_2 = __importDefault(require("./query/auth"));
var Product_2 = require("./query/Product");
var user_1 = require("./query/user");
var resolvers = {
    Query: __assign(__assign({ hello: function () { return 'hello world '; }, getAllUser: user_1.getAllUser }, Product_2.productquery), auth_2.default),
    Mutation: __assign(__assign({}, auth_1.default), Product_1.default),
};
exports.default = resolvers;
