import { Metadata } from "next";
import MainSlider from "src/components/Home/MainSlider";
import QuickAccess from "src/components/Home/quickAccess";
export const metadata : Metadata = {
 title: "کافه و رستوران میم | Cafe Restaurant mim",
 description: "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم"
}


const HomePage = async () => {
  return (
    <>
  <MainSlider />
  <QuickAccess />
    </>
  )
};

export default HomePage;
