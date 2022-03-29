"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setItem = ({ tokenKeyName = "token", tokenValue, refreshValue, }) => {
    if (Window) {
        const tokenObject = {
            access: tokenValue,
            refresh: refreshValue,
        };
        localStorage.setItem(tokenKeyName, JSON.stringify(tokenObject));
    }
    else {
        throw new Error("window is undefind");
    }
};
exports.getItem = (tokenKeyName = "token") => {
    if (Window) {
        const json = localStorage.getItem(tokenKeyName);
        return JSON.parse(json);
    }
    else {
        throw new Error("window is undefind");
    }
};
