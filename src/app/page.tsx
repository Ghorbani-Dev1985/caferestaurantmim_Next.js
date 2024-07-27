import { Metadata } from "next";
import MainSlider from "src/components/Home/MainSlider";
import QuickAccess from "src/components/Home/quickAccess";
import AboutUs from "src/components/Home/AboutUs";
import Reserve from "src/components/Home/Reserve";
import Posts from "src/components/Home/Posts";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/react";
import Resume from "src/components/Home/Resume";
import ImageGallery from "src/components/Home/ImageGallery";
import Cta from "src/components/Home/Cta";
export const metadata: Metadata = {
  title: "کافه و رستوران میم | Cafe Restaurant mim",
  description:
    "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم",
};

const HomePage = async () => {
  return (
    <Suspense fallback={<Spinner size="md" color="primary" />}>
      <MainSlider />
      <QuickAccess />
      <AboutUs />
      <Reserve />
      <Resume />
      <Cta />
      <ImageGallery />
      <Posts />
    </Suspense>
  );
};

export default HomePage;
