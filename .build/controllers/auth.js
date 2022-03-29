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
var jsonwebtoken_1 = require("jsonwebtoken");
var bcrypt_1 = require("bcrypt");
var User_1 = __importDefault(require("../db/models/User"));
var shared_1 = require("../utils/shared");
var responses_1 = require("../utils/shared/responses");
var isValid_1 = __importDefault(require("../utils/isValid"));
var sendOtp_1 = __importDefault(require("../utils/sendOtp"));
var sendOtpMail_1 = __importDefault(require("../utils/sendOtpMail"));
exports.SignUp = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var isUserExist, password, user, token, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, shared_1.findFromDB(User_1.default, 'One', {
                        email: args === null || args === void 0 ? void 0 : args.email,
                    })];
            case 1:
                isUserExist = _a.sent();
                if (!!(isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.email)) return [3 /*break*/, 4];
                return [4 /*yield*/, bcrypt_1.hash(args === null || args === void 0 ? void 0 : args.password, 12)];
            case 2:
                password = _a.sent();
                return [4 /*yield*/, shared_1.addToDB(User_1.default, __assign(__assign({}, args), { password: password }))];
            case 3:
                user = _a.sent();
                if (user.email) {
                    token = jsonwebtoken_1.sign(JSON.stringify({ userId: user.id, userEmail: user.email }), "" + process.env.JWT_SECRET);
                    return [2 /*return*/, responses_1.authResponse('Sign Up successfully', user, token, false, 200)];
                }
                return [2 /*return*/, responses_1.authResponse('Sign Up failed')];
            case 4: return [2 /*return*/, responses_1.authResponse('User already exist', null, '', true, 409)];
            case 5:
                error_1 = _a.sent();
                return [2 /*return*/, responses_1.authResponse('Something went wrong')];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.Login = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var isUserExist, comparePassword, token, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, shared_1.findFromDB(User_1.default, 'One', __assign({}, args))];
            case 1:
                isUserExist = _a.sent();
                if (!(isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.email)) return [3 /*break*/, 3];
                return [4 /*yield*/, bcrypt_1.compare(args === null || args === void 0 ? void 0 : args.password, isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.password)];
            case 2:
                comparePassword = _a.sent();
                if (comparePassword) {
                    token = jsonwebtoken_1.sign(JSON.stringify({
                        userId: isUserExist.id,
                        userEmail: isUserExist.email,
                    }), "" + process.env.JWT_SECRET);
                    return [2 /*return*/, responses_1.authResponse('Logged In successfully', isUserExist, token, false, 200)];
                }
                return [2 /*return*/, responses_1.authResponse('Invalid credentials!')];
            case 3: return [2 /*return*/, responses_1.authResponse('User not Found')];
            case 4:
                error_2 = _a.sent();
                return [2 /*return*/, responses_1.authResponse("failed to Logged in " + error_2)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.SendOtpNumber = function (args, token) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, isValid, userId, data, otp, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                return [4 /*yield*/, isValid_1.default(null, token)];
            case 1:
                _a = _b.sent(), isValid = _a.isValid, userId = _a.userId, data = _a.data;
                if (!isValid) return [3 /*break*/, 5];
                return [4 /*yield*/, sendOtp_1.default(data.phoneNumber)];
            case 2:
                otp = _b.sent();
                if (!otp) return [3 /*break*/, 4];
                return [4 /*yield*/, shared_1.UpdateToDB(User_1.default, userId, { otp: otp }, true)];
            case 3:
                _b.sent();
                return [2 /*return*/, responses_1.verifiedResponse('Otp sent successfully!', 200)];
            case 4: return [2 /*return*/, responses_1.verifiedResponse('Sending Otp failed !')];
            case 5: return [2 /*return*/, responses_1.verifiedResponse('Invalid User!')];
            case 6:
                error_3 = _b.sent();
                return [2 /*return*/, responses_1.verifiedResponse("Something went wrong! " + error_3)];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.VerifyOtpNumber = function (args, token) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, isValid, userId, foundUser, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                return [4 /*yield*/, isValid_1.default(null, token)];
            case 1:
                _a = _b.sent(), isValid = _a.isValid, userId = _a.userId;
                if (!isValid) return [3 /*break*/, 5];
                return [4 /*yield*/, shared_1.findFromDB(User_1.default, 'One', {
                        id: userId,
                    })];
            case 2:
                foundUser = _b.sent();
                if (!((foundUser === null || foundUser === void 0 ? void 0 : foundUser.otp) === args.otp)) return [3 /*break*/, 4];
                return [4 /*yield*/, shared_1.UpdateToDB(User_1.default, userId, { isPhoneVerified: true })];
            case 3:
                _b.sent();
                return [2 /*return*/, responses_1.verifiedResponse('Phone number verified Successfully!', 200, true)];
            case 4: return [2 /*return*/, responses_1.verifiedResponse('Phone enter correct otp!')];
            case 5: return [2 /*return*/, responses_1.verifiedResponse('Invalid user!')];
            case 6:
                error_4 = _b.sent();
                return [2 /*return*/, responses_1.verifiedResponse('Something went wrong!')];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.SendOtpEmail = function (args, token) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, isValid, userId, data, otp, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                return [4 /*yield*/, isValid_1.default(null, token)];
            case 1:
                _a = _b.sent(), isValid = _a.isValid, userId = _a.userId, data = _a.data;
                if (!isValid) return [3 /*break*/, 5];
                return [4 /*yield*/, sendOtpMail_1.default(data.email)];
            case 2:
                otp = _b.sent();
                if (!otp) return [3 /*break*/, 4];
                return [4 /*yield*/, shared_1.UpdateToDB(User_1.default, userId, { otp: otp }, true)];
            case 3:
                _b.sent();
                return [2 /*return*/, responses_1.verifiedResponse('Otp sent successfully!', 200)];
            case 4: return [2 /*return*/, responses_1.verifiedResponse('Sending Otp failed !')];
            case 5: return [2 /*return*/, responses_1.verifiedResponse('Invalid User!')];
            case 6:
                error_5 = _b.sent();
                return [2 /*return*/, responses_1.verifiedResponse("Something went wrong! " + error_5)];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.VerifyEmail = function (args, token) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, isValid, userId, foundUser, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                return [4 /*yield*/, isValid_1.default(null, token)];
            case 1:
                _a = _b.sent(), isValid = _a.isValid, userId = _a.userId;
                if (!isValid) return [3 /*break*/, 5];
                return [4 /*yield*/, shared_1.findFromDB(User_1.default, 'One', {
                        id: userId,
                    })];
            case 2:
                foundUser = _b.sent();
                if (!((foundUser === null || foundUser === void 0 ? void 0 : foundUser.otp) === args.otp)) return [3 /*break*/, 4];
                return [4 /*yield*/, shared_1.UpdateToDB(User_1.default, userId, { isEmailVerified: true })];
            case 3:
                _b.sent();
                return [2 /*return*/, responses_1.verifiedResponse('Email verified Successfully!', 200, true)];
            case 4: return [2 /*return*/, responses_1.verifiedResponse('Phone enter correct otp!')];
            case 5: return [2 /*return*/, responses_1.verifiedResponse('Invalid user!')];
            case 6:
                error_6 = _b.sent();
                return [2 /*return*/, responses_1.verifiedResponse('Something went wrong!')];
            case 7: return [2 /*return*/];
        }
    });
}); };
