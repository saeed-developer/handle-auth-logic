interface RequestToken {
    url: string;
    method: string;
    header: any;
    body: any;
    tokenKeyName: any;
    access: string;
    refresh: string;
}
export declare const requestToken: ({ url, method, header, body, tokenKeyName, access, refresh, }: RequestToken) => Promise<unknown>;
export {};
