import { WcHttp } from "./HttpServices";


export function GetCategories() {
    return WcHttp.get("/products/categories?per_page=50").then(({ data }) => data);
  }
  export function GetCategoryById(id : number) {
    return WcHttp.get(`/products/categories/${id}`).then(({ data }) => data);
  }