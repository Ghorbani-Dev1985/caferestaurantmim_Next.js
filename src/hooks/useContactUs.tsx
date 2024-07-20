import { useMutation } from "@tanstack/react-query";
import { AddNewContactUs } from "src/services/ContactUsService";

export const useAddContactUs = () => useMutation({ mutationFn: AddNewContactUs });
