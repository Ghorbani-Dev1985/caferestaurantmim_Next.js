import { Metadata } from "next";
import MainSlider from "src/components/Home/MainSlider";
import QuickAccess from "src/components/Home/quickAccess";
import AboutUs from "src/components/Home/AboutUs";
import Reserve from "src/components/Home/Reserve";
import CTABtns from "src/common/Header/CTABtns";
export const metadata : Metadata = {
 title: "کافه و رستوران میم | Cafe Restaurant mim",
 description: "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم"
}


const HomePage = async () => {
  return (
    <>
  <MainSlider />
  <QuickAccess />
   <AboutUs />
   <Reserve />
   <section className="container flex-center flex-row-reverse gap-x-4 my-8"><CTABtns /></section>
    </>
  )
};

export default HomePage;
