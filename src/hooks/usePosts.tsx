import { useQuery } from "@tanstack/react-query";
import { GetPostById, GetPosts } from "src/services/PostService";
export const useGetPosts = () =>
  useQuery({
    queryKey: ["getPosts"],
    queryFn: GetPosts,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const usePostById = (id : number) =>
  useQuery({
    queryKey: ["getPost", id],
    queryFn: () => GetPostById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
