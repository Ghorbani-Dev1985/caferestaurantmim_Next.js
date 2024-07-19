import { WpHttp } from "./HttpServices";

export function GetMedia(id: number) {
    return WpHttp.get(`/media?parent=${id}&per_page=80`).then(({ data }) => data);
  }