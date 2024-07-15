import Http from "./HttpServices";

export function GetCategories() {
    return Http.get("/products/categories").then(({ data }) => data);
  }
  export function GetCategoryById(id : number) {
    return Http.get(`/products/categories/${id}`).then(({ data }) => data);
  }