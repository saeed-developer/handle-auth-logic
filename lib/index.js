"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const localStorage_1 = require("./localStorage");
const interceptor_1 = require("./interceptor");
const requestToken_1 = require("./requestToken");
exports.GetToken = ({ url, method, header, body, key, access, refresh, }) => {
    return requestToken_1.requestToken({
        url: url,
        method: method,
        header: header,
        body: body,
        tokenKeyName: key,
        access: access,
        refresh: refresh,
    });
};
exports.AuthLogic = (options) => {
    var _a, _b;
    const tokenKeyName = (_a = options["tokenKeyName"]) !== null && _a !== void 0 ? _a : "token";
    const refreshToken = localStorage_1.getItem(tokenKeyName);
    const refreshKey = (_b = options.refresh) !== null && _b !== void 0 ? _b : "refresh";
    options.body = { [refreshKey]: refreshToken[refreshKey] };
    return interceptor_1.interceptor({
        reqeustToken: () => __awaiter(void 0, void 0, void 0, function* () { return exports.GetToken(options); }),
        axios: options["axios"],
        errorCode: options["errorCode"],
    });
};
