import { useMutation, useQuery } from "@tanstack/react-query";
import { AddNewContactUs, GetContactUs } from "src/services/ContactUsService";

export const useGetContactUs = () =>
    useQuery({
      queryKey: ["getContactUs"],
      queryFn: GetContactUs,
      retry: false,
      refetchOnWindowFocus: true,
    });

export const useAddContactUs = () => useMutation({ mutationFn: AddNewContactUs });
