import { getItem } from "./localStorage";
import { interceptor } from "./interceptor";
import { requestToken } from "./requestToken";
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
export const GetToken = ({
  url,
  method,
  header,
  body,
  key,
  access,
  refresh,
}: HandleToken) => {
  return requestToken({
    url: url,
    method: method,
    headers: header,
    body: body,
    tokenKeyName: key,
    access: access,
    refresh: refresh,
  });
};
export const AuthLogic = (options: AuthenticationLogic) => {
  const tokenKeyName = options["tokenKeyName"] ?? "token";
  const refreshToken = getItem(tokenKeyName);
  const refreshKey = options.refresh ?? "refresh";
  options.body = { [refreshKey]: refreshToken[refreshKey] };
  return interceptor({
    reqeustToken: async () => GetToken(options),
    axios: options["axios"],
    errorCode: options["errorCode"],
  });
};
