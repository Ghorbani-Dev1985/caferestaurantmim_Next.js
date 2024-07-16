import { WcHttp } from "./HttpServices";


export function GetCategories() {
    return WcHttp.get("/products/categories").then(({ data }) => data);
  }
  export function GetCategoryById(id : number) {
    return WcHttp.get(`/products/categories/${id}`).then(({ data }) => data);
  }