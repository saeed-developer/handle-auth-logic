import { requestToken } from "./requestToken";

interface RequestServer {
  url: string;
  method: string;
  header?: string;
  body?: string;
  key?: string;
  access?: string;
  refresh?: string;
}

export const GetToken = ({
  url,
  method,
  header,
  body,
  key,
  access,
  refresh,
}: RequestServer) => {
  return requestToken({
    url: url,
    method: method,
    header: header,
    body: body,
    tokenKeyName: key,
    access: access,
    refresh: refresh,
  });
};
