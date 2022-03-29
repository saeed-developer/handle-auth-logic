interface Token {
    tokenKeyName: string;
    tokenValue: string;
    refreshValue: string;
}
export declare const setItem: ({ tokenKeyName, tokenValue, refreshValue, }: Token) => void;
export declare const getItem: (tokenKeyName?: string) => any;
export {};
