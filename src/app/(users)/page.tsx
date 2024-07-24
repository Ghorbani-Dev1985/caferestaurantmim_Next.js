import { Metadata } from "next";
import Slider from "src/components/Home/Slider";
export const metadata : Metadata = {
 title: "کافه و رستوران میم | Cafe Restaurant mim",
 description: "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم"
}


const HomePage = async () => {
  return (
      <main className="min-h-screen">
       <Slider />
      </main>
  );
};

export default HomePage;
