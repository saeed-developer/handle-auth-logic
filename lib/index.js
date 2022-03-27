"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestToken_1 = require("./requestToken");
exports.GetToken = ({ url, method, header, body, key }) => {
    return requestToken_1.requestToken({
        url: url,
        method: method,
        header: header,
        body: body,
        tokenKeyName: key,
    });
};
