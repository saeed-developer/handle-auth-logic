interface HandleToken {
    url: string;
    method: string;
    header?: string;
    body?: any;
    key?: string;
    access?: string;
    refresh?: string;
}
interface AuthenticationLogic extends HandleToken {
    axios?: any;
    errorCode?: number;
}
export declare const GetToken: ({ url, method, header, body, key, access, refresh, }: HandleToken) => Promise<unknown>;
export declare const AuthLogic: (options: AuthenticationLogic) => void;
export {};
