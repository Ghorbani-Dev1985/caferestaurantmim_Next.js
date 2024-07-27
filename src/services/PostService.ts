import { WpHttp } from "./HttpServices";

export function GetPosts() {
  return WpHttp.get('/posts?per_page=80&order=asc&_embed').then(({data}) => data);
}
export function GetPostById(id: number) {
  return WpHttp.get(`/posts/${id}?_embed`).then(({ data }) => data);
}