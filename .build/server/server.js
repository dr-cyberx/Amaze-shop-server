"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var index_1 = __importDefault(require("../api/resolvers/index"));
var typedefs_1 = __importDefault(require("../api/typedefs"));
var initializeServer_1 = __importDefault(require("./initializeServer"));
var connectDb_1 = __importDefault(require("../db/connectDb"));
dotenv_1.default.config();
var app = express_1.default();
connectDb_1.default("" + process.env.MongoDB_URL)
    .then(function () {
    initializeServer_1.default(typedefs_1.default, index_1.default, app);
})
    .catch(function (err) {
    console.log('failed to connect DB ', err);
});
