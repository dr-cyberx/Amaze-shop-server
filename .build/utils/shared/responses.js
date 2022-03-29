"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authResponse = function (message, data, token, error, status) {
    if (message === void 0) { message = 'Something Went wrong'; }
    if (data === void 0) { data = null; }
    if (token === void 0) { token = ''; }
    if (error === void 0) { error = true; }
    if (status === void 0) { status = 400; }
    return ({
        data: data,
        token: token,
        error: error,
        status: status,
        message: message,
    });
};
exports.verifiedResponse = function (message, status, verified) {
    if (status === void 0) { status = 400; }
    if (verified === void 0) { verified = false; }
    return ({
        status: status,
        verified: verified,
        message: message,
    });
};
exports.amazeResponse = function (message, data, error, status) {
    if (message === void 0) { message = 'Something Went wrong'; }
    if (data === void 0) { data = null; }
    if (error === void 0) { error = true; }
    if (status === void 0) { status = 400; }
    return ({
        data: data,
        error: error,
        status: status,
        message: message,
    });
};
exports.hello = function () { return 'hwllo'; };
