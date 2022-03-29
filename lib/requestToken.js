"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localStorage_1 = require("./localStorage");
exports.requestToken = ({ url, method = "POST", header = {
    "Content-Type": "application/json",
}, body = null, tokenKeyName, access = "access", refresh = "refresh", }) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: method,
            headers: header,
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((res) => {
            localStorage_1.setItem({
                tokenKeyName: tokenKeyName,
                tokenValue: res[access],
                refreshValue: res[refresh],
            });
            resolve(res.access);
        }, (err) => {
            reject(err.status);
        });
    });
};
