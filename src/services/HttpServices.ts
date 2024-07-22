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

const GfApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GF_BASE_URL,
  headers: {'Access-Control-Allow-Origin': '*'},
  auth: {
    username: `${process.env.NEXT_PUBLIC_GF_USER_NAME}`,
    password: `${process.env.NEXT_PUBLIC_GF_PASSWORD}`,
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

GfApi.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

GfApi.interceptors.response.use(
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

const GfHttp = {
  get: GfApi.get,
  post: GfApi.post,
  delete: GfApi.delete,
  put: GfApi.put,
  patch: GfApi.patch,
};

export {WpHttp, WcHttp , GfHttp};
