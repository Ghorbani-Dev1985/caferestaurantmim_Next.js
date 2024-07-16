import axios from "axios";
axios.defaults.headers["Content-Type"] = "application/json";

const WpApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WP_BASE_URL,
  auth: {
    username: `${process.env.NEXT_PUBLIC_WP_USER_NAME}`,
    password: `${process.env.NEXT_PUBLIC_WP_PASSWORD}`,
  },
});

const WcApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WC_BASE_URL,
  auth: {
    username: `${process.env.NEXT_PUBLIC_WC_USER_NAME}`,
    password: `${process.env.NEXT_PUBLIC_WC_PASSWORD}`,
  },
});

WpApi.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

WpApi.interceptors.response.use(
  (res) => res,
 
);

WcApi.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

WcApi.interceptors.response.use(
  (res) => res,
 
);

const WpHttp = {
  get: WpApi.get,
  post: WpApi.post,
  delete: WpApi.delete,
  put: WpApi.put,
  patch: WpApi.patch,
};

const WcHttp = {
  get: WcApi.get,
  post: WcApi.post,
  delete: WcApi.delete,
  put: WcApi.put,
  patch: WcApi.patch,
};

export {WpHttp, WcHttp};
