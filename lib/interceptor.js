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
exports.interceptor = ({ reqeustToken, axios, errorCode, }) => {
    if (!axios) {
        const { fetch: originalFetch } = window;
        window.fetch = (...args) => __awaiter(void 0, void 0, void 0, function* () {
            let [resource, config] = args;
            const response = yield originalFetch(resource, config);
            const code = errorCode !== null && errorCode !== void 0 ? errorCode : 401;
            if (response.status === code) {
                const request = yield reqeustToken();
                config["headers"]["token"] = request;
                yield originalFetch(resource, config);
            }
            return response;
        });
    }
    else {
        const code = errorCode !== null && errorCode !== void 0 ? errorCode : 401;
        axios.interceptors.response.use(function (response) {
            console.log("response", response);
            return response;
        }, function (error) {
            console.log("error", error);
            if (error.response.status === code) {
                console.log("in in in i");
                const handleUnathorized = () => __awaiter(this, void 0, void 0, function* () {
                    console.log("tr");
                    const request = yield reqeustToken();
                    const config = error.config;
                    config["headers"]["token"] = request;
                    yield axios.request(config);
                });
                handleUnathorized();
            }
            return Promise.reject(error);
        });
    }
};
