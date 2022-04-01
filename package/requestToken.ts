import { setItem } from "./localStorage";
interface RequestToken {
  url: string;
  method: string;
  headers: any;
  body: any;
  tokenKeyName: any;
  access: string;
  refresh: string;
}
export const requestToken = ({
  url,
  method = "POST",
  headers = {
    "Content-Type": "application/json",
  },
  body = null,
  tokenKeyName,
  access = "access",
  refresh = "refresh",
}: RequestToken) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(
        (res) => {
          setItem({
            tokenKeyName: tokenKeyName,
            tokenValue: res[access],
            refreshValue: res[refresh],
          });
          resolve(res.access);
        },
        (err) => {
          reject(err.status);
        }
      );
  });
};
