import { AddressItems } from "@/UI/Footer";
import AddressMap from "@/UI/AddressMap";
import AboutUsItems from "./AboutUsItems";
export const metadata = {
  title: "درباره رستوران | کافه رستوران میم",
  description: "کافه و رستـوران میم میم یکی از کافه و رستوران رشت شما را به صرف غذاهای خاص دعوت می کند. ما در میم بر لذت بردن از مزه ها در فضایی که لحظه های به یاد ماندنی می سازد تاکید داریم و از این رو نام میم را که لذت میل کردن، نوشیدن و زندگی [&hellip;]"
 }
const AboutUs = () => {
  return (
    <section className="container relative mt-6">
      <AboutUsItems>
        <div className="max-w-lg space-y-8 mx-auto">
          <AddressItems />
        </div>
      </AboutUsItems>
      <div className="w-full my-12 rounded-lg overflow-hidden">
         <AddressMap style="h-72" />
      </div>
    </section>
  );
};

export default AboutUs;

