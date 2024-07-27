import { WpHttp } from "./HttpServices";

export function GetPage(id: number) {
    return WpHttp.get(`/pages/${id}?_embed`).then(({ data }) => data);
  }