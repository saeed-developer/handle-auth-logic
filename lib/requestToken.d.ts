interface RequestToken {
    url: string;
    method: string;
    header: any;
    body: any;
    tokenKeyName: any;
}
export declare const requestToken: ({ url, method, header, body, tokenKeyName, }: RequestToken) => void;
export {};
