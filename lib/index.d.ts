interface RequestServer {
    url: string;
    method: string;
    header?: string;
    body?: string;
    key?: string;
}
export declare const GetToken: ({ url, method, header, body, key }: RequestServer) => void;
export {};
