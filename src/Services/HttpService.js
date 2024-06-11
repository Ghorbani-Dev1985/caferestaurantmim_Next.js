import axios from "axios";

export const BASE_URL = "https://cafemimapi.liara.run/api"

const Api = axios.create({
    baseURL: BASE_URL,
})

Api.interceptors.request.use(
    (config) => {
        const getToken = JSON.parse(typeof window !== "undefined" ? window.localStorage.getItem("user") : false);
          config.headers.Authorization = `Bearer ${getToken?.accessToken}`;
        

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
)

Api.interceptors.response.use(
    res => res,
)

const Http = {
    get: Api.get,
    post: Api.post,
    delete: Api.delete,
    put: Api.put,
    patch: Api.patch,
}

export default Http;