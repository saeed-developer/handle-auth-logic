export interface Interceptor {
    reqeustToken: any;
    axios?: any;
    errorCode?: number;
}
export declare const interceptor: ({ reqeustToken, axios, errorCode, }: Interceptor) => void;
