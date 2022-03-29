//set token to localstorage and get token from
interface Token {
  tokenKeyName: string;
  tokenValue: string;
  refreshValue: string;
}
interface TokenObject {
  access: string;
  refresh: string;
}
export const setItem = ({
  tokenKeyName = "token",
  tokenValue,
  refreshValue,
}: Token): void => {
  if (Window) {
    const tokenObject: TokenObject = {
      access: tokenValue,
      refresh: refreshValue,
    };
    localStorage.setItem(tokenKeyName, JSON.stringify(tokenObject));
  } else {
    throw new Error("window is undefind");
  }
};
export const getItem = (tokenKeyName: string = "token") => {
  if (Window) {
    const json: any = localStorage.getItem(tokenKeyName);
    return JSON.parse(json);
  } else {
    throw new Error("window is undefind");
  }
};
