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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = __importDefault(require("../db/models/Product"));
var isValid_1 = __importDefault(require("../utils/isValid"));
var shared_1 = require("../utils/shared");
var responses_1 = require("../utils/shared/responses");
exports.CreateProduct = function (args, token) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, isValid, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, isValid_1.default(shared_1.addToDB, token, Product_1.default, args.input)];
            case 1:
                _a = _b.sent(), isValid = _a.isValid, data = _a.data;
                if (isValid) {
                    return [2 /*return*/, responses_1.amazeResponse('Product created successfully!', data, false, 200)];
                }
                return [2 /*return*/, responses_1.amazeResponse('InValid User', null, true, 401)];
            case 2:
                error_1 = _b.sent();
                return [2 /*return*/, responses_1.amazeResponse("" + error_1, null, true, 404)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.UpdateProduct = function (args, token) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, isValid, userId, createProductResponse, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                return [4 /*yield*/, isValid_1.default(null, token)];
            case 1:
                _a = _b.sent(), isValid = _a.isValid, userId = _a.userId;
                if (!isValid) return [3 /*break*/, 3];
                return [4 /*yield*/, shared_1.UpdateToDB(Product_1.default, args.productId, __assign(__assign({}, args), { productSeller: userId }), true)];
            case 2:
                createProductResponse = _b.sent();
                return [2 /*return*/, responses_1.amazeResponse('Product updated successfully!', __assign(__assign({}, createProductResponse), { id: createProductResponse === null || createProductResponse === void 0 ? void 0 : createProductResponse._id }), false, 200)];
            case 3: return [2 /*return*/, responses_1.amazeResponse('InValid User', null, true, 401)];
            case 4:
                error_2 = _b.sent();
                return [2 /*return*/, responses_1.amazeResponse('something went wrong!', null, true, 401)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.GetAllProducts = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var isValid, res, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, isValid_1.default(null, token)];
            case 1:
                isValid = (_a.sent()).isValid;
                if (!isValid) return [3 /*break*/, 3];
                return [4 /*yield*/, shared_1.findFromDB(Product_1.default, 'All')];
            case 2:
                res = _a.sent();
                return [2 /*return*/, responses_1.amazeResponse('fetched all Products successfully', res, false, 200)];
            case 3: return [2 /*return*/, responses_1.amazeResponse('Invalid user!')];
            case 4:
                error_3 = _a.sent();
                return [2 /*return*/, responses_1.amazeResponse('something went wrong!')];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.GetProductById = function (args, token) { return __awaiter(void 0, void 0, void 0, function () {
    var isValid, res, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, isValid_1.default(null, token)];
            case 1:
                isValid = (_a.sent()).isValid;
                if (!isValid) return [3 /*break*/, 3];
                return [4 /*yield*/, shared_1.findFromDB(Product_1.default, 'One', { id: args.id })];
            case 2:
                res = _a.sent();
                return [2 /*return*/, responses_1.amazeResponse('fetched Product successfully', res, false, 200)];
            case 3: return [2 /*return*/, responses_1.amazeResponse('Invalid User!')];
            case 4:
                error_4 = _a.sent();
                return [2 /*return*/, responses_1.amazeResponse('something went wrong!')];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.hi = 'hllo';
