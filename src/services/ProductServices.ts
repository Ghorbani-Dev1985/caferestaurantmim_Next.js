import Http from "./HttpServices";

export function GetProducts() {
    return Http.get('/products').then(({ data }) => data);
  }
  export function GetProductsByCategory(id : number) {
    return Http.get(`/products?category=${id}`).then(({data}) => data);
  }

  export function GetOneProductById(id : number) {
    return Http.get(`/products?include=${id}`).then(({ data }) => data);
  }

