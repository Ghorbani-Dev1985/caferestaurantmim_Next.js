import { WcHttp } from "./HttpServices";


export function GetProducts() {
    return WcHttp.get('/products?per_page=80').then(({ data }) => data);
  }
  export function GetProductsByCategory(id : number) {
    return WcHttp.get(`/products?category=${id}&per_page=80&order=asc`).then(({data}) => data);
  }

  export function GetOneProductById(id : number) {
    return WcHttp.get(`/products?include=${id}?order=asc`).then(({ data }) => data);
  }

