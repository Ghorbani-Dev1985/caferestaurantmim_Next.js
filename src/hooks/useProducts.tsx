import { useQuery } from "@tanstack/react-query";
import {
  GetOneProductById,
  GetProducts,
  GetProductsByCategory,
} from "src/services/ProductServices";
export const useGetProducts = () =>
  useQuery({
    queryKey: ["getProducts"],
    queryFn: GetProducts,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetProductsByCategory = (id: number) =>
  useQuery({
    queryKey: ["getProductsByCategory", id],
    queryFn: () => GetProductsByCategory(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetProductById = (id: number) =>
  useQuery({
    queryKey: ["getProductById", id],
    queryFn: () => GetOneProductById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
