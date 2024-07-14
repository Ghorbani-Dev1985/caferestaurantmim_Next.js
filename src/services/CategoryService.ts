import Http from "./HttpServices";

export function GetCategories() {
    return Http.get("products/categories").then(({ data }) => data.data);
  }
