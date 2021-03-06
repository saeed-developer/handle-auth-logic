export interface Interceptor {
  reqeustToken: any;
  axios?: any;
  errorCode?: number;
}
export const interceptor = ({
  reqeustToken,
  axios,
  errorCode,
}: Interceptor) => {
  if (!axios) {
    const { fetch: originalFetch } = window;
    window.fetch = async (...args) => {
      let [resource, config] = args;
      const response = await originalFetch(resource, config);
      const code: number = errorCode ?? 401;
      if (response.status === code) {
        const request = await reqeustToken();
        config["headers"]["token"] = request;
        await originalFetch(resource, config);
      }
      return response;
    };
  } else {
    const code: number = errorCode ?? 401;

    axios.interceptors.response.use(
      function (response: any): any {
        return response;
      },
      function (error : any) {
        if (error.response.status === code) {
          const handleUnathorized = async () => {
            const request = await reqeustToken();
            const config = error.config;
            config["headers"]["token"] = request;
            await axios.request(config);
          };
          handleUnathorized();
        }
        return Promise.reject(error);
      }
    );
  }
};
