import { useQuery } from "@tanstack/react-query";
import { GetCategories } from "src/services/CategoryService";
export const useGetCategories = () =>
    useQuery({
      queryKey: ["getCategories"],
      queryFn: GetCategories,
      retry: false,
      refetchOnWindowFocus: true,
    });