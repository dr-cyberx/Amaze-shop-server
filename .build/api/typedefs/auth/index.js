"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = "\nlogin(userName: String, email: String, phoneNumber: String, password: String) : authResponse!\n";
exports.signUp = "\nsignUp(userName: String, email: String, phoneNumber: String, password: String!, role: userRole) : authResponse!\n";
exports.authResponse = "\ntype authResponse{\n   data: newUser\n   error: Boolean\n   token: String\n   status: Int\n   message: String\n }\n";
exports.verifyResponse = "\ntype verifyResponse{\n  status: Int!\n  verified: Boolean!\n  message: String\n}\n";
exports.sendOtpToContacts = "\n sendOtpNumber(phoneNumber: String): verifyResponse\n sendOtpEmail(email: String): verifyResponse";
exports.verifyContacts = "\n verifyOtpNumber(otp: String): verifyResponse\n verifyEmail(otp: String): verifyResponse";
