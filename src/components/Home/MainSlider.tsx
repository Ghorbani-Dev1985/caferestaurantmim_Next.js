"use client";
import { Suspense, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../public/styles/mainPageSlider.css";
import Image from "next/image";
import { useGetSliderMedia } from "src/hooks/useMedia";
import { Spinner } from "@nextui-org/react";
import { ImagesListType } from "src/types/imageGallery";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const MainSlider = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { data: sliders, isPending } = useGetSliderMedia();
  if(isPending) return <Spinner size="md" color="primary" className="flex-center" />
  return (
    <section className="w-full">
    <Swiper
      loop={true}
      centeredSlides={true}
      modules={[Navigation, Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        type: "progressbar",
      }}
      navigation={{
        prevEl: "#SwiperPrevBtnID",
        nextEl: "#SwiperNextBtnID",
        disabledClass: ".swiper-button-disabled",
      }}
      allowSlidePrev
      allowSlideNext
      onReachBeginning={() => {
        setIsStart(true);
      }}
      onReachEnd={() => {
        setIsEnd(true);
      }}
      className="homeSlider relative z-10"
    >
      {sliders?.map(({ id, guid }: ImagesListType) => (
        <SwiperSlide key={id}>
          <Image
            width={1920}
            height={700}
            priority
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL={guid.rendered}
            src={guid.rendered}
          />
        </SwiperSlide>
      ))}
      <button
        type="button"
        disabled={isStart}
        id="SwiperPrevBtnID"
        className="size-6 md:size-10 flex-center bg-white disabled:bg-slate-400 disabled:opacity-50 z-20 text-4xl rounded-full absolute top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <HiOutlineChevronRight className="size-3 md:size-6" />
      </button>
      <button
        type="button"
        disabled={isEnd}
        id="SwiperNextBtnID"
        className="size-6 md:size-10 flex-center bg-white disabled:bg-slate-400 disabled:opacity-50 z-20 text-4xl rounded-full absolute top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 left-5 md:left-8"
      >
        <HiOutlineChevronLeft className="size-3 md:size-6" />
      </button>
    </Swiper>
      </section>
  );
};

export default MainSlider;
