import { useMutation, useQuery } from "@tanstack/react-query";
import {AddNewReservation} from "src/services/ReservationService"


export const useAddReservation = () => useMutation({ mutationFn: AddNewReservation });



