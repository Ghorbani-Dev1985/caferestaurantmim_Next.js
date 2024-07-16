import { useQuery } from "@tanstack/react-query";
import { GetMainMenu } from "src/services/MenuService";

export const useGetMenu = () =>
    useQuery({
      queryKey: ["getMainMenu"],
      queryFn: GetMainMenu,
      retry: false,
      refetchOnWindowFocus: true,
    });