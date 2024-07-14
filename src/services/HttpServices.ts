import axios from "axios";

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: `${process.env.NEXT_PUBLIC_USER_NAME}`,
    password: `${process.env.NEXT_PUBLIC_PASSWORD}`,
  },
});

Api.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

Api.interceptors.response.use(
  (res) => res,
 
);

const Http = {
  get: Api.get,
  post: Api.post,
  delete: Api.delete,
  put: Api.put,
  patch: Api.patch,
};

export default Http;
