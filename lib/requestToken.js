"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localStorage_1 = require("./localStorage");
exports.requestToken = ({ url, method = "POST", header = {
    "Content-Type": "application/json",
}, body = null, tokenKeyName, }) => {
    fetch(url, {
        method: method,
        headers: header,
        body: JSON.stringify(body),
    })
        .then((res) => res.json())
        .then((res) => {
        console.log("response", res);
        const data = res;
        localStorage_1.setItem({
            tokenKeyName: tokenKeyName,
            tokenValue: data.token,
            refreshValue: data.refresh,
        });
        return Number(res.status);
    }, (err) => {
        return Number(err.status);
    });
};
