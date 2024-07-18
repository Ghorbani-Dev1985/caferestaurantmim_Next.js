import { useQuery } from "@tanstack/react-query";
import { GetPage } from "src/services/PageService";

export const useGetPage = (id: number) =>
    useQuery({
      queryKey: ["getPage"],
      queryFn: () => GetPage(id),
      retry: false,
      refetchOnWindowFocus: true,
    });