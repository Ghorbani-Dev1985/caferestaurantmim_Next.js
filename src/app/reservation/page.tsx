import { Metadata } from "next";
import Reservation from "./Reservation";

export const metadata : Metadata = {
     title: " رزرو میز | کافه رستوران میم",
     description: "کافه و رستـوران میم میم یکی از کافه و رستوران رشت شما را به صرف غذاهای خاص دعوت می کند. ما در میم بر لذت بردن از مزه ها در فضایی که لحظه های به یاد ماندنی می سازد تاکید داریم و از این رو نام میم را که لذت میل کردن، نوشیدن و زندگی [&hellip;]"
    }
const ReservationPage = () => {
    return <Reservation />
}
 
export default ReservationPage;