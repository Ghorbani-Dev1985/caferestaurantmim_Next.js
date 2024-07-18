import { useQuery } from "@tanstack/react-query";
import { GetMedia } from "src/services/MediaService";

export const useGetMedia = (id: number) =>
    useQuery({
      queryKey: ["getMedia"],
      queryFn: () => GetMedia(id),
      retry: false,
      refetchOnWindowFocus: true,
    });