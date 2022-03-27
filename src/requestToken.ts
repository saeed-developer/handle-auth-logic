import { setItem } from "./localStorage";
interface RequestToken {
  url: string;
  method: string;
  header: any;
  body: any;
  tokenKeyName: any;
  access: string;
  refresh: string;
}
export const requestToken = ({
  url,
  method = "POST",
  header = {
    "Content-Type": "application/json",
  },
  body = null,
  tokenKeyName,
  access = "access",
  refresh = "refresh",
}: RequestToken) => {
  fetch(url, {
    method: method,
    headers: header,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(
      (res) => {
        console.log("response", res);
        setItem({
          tokenKeyName: tokenKeyName,
          tokenValue: res[access],
          refreshValue: res[refresh],
        });
        return Number(res.status);
      },
      (err) => {
        return Number(err.status);
      }
    );
};
