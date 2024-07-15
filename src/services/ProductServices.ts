import Http from "./HttpServices";

export function GetProducts() {
    return Http.get('/products?per_page=80').then(({ data }) => data);
  }
  export function GetProductsByCategory(id : number) {
    return Http.get(`/products?category=${id}&per_page=80`).then(({data}) => data);
  }

  export function GetOneProductById(id : number) {
    return Http.get(`/products?include=${id}`).then(({ data }) => data);
  }

