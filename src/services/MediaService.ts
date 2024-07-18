import { WpHttp } from "./HttpServices";

export function GetMedia(id: number) {
    return WpHttp.get(`/media?parent=${id}`).then(({ data }) => data);
  }