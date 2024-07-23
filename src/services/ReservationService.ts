import { GfHttp } from "./HttpServices";
import { ReservationType } from "src/types/reservation";

export function AddNewReservation(data : ReservationType) {
    return GfHttp.post("/forms/3/submissions", data).then((data) => data);
  }