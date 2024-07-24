"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import Image from "next/image";
import { useGetMedia } from "src/hooks/useMedia";
import { Spinner } from "@nextui-org/react";
import { ImagesListType } from "src/types/imageGallery";

const Slider = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { data: sliders, isPending } = useGetMedia(16286);
  return (
    isPending ? (
        <Spinner size="md" color="primary" className="flex-center" />
      ) : ( <Swiper
        loop={true}
        modules={[Navigation, Autoplay, A11y]}
        autoplay={{
          delay: 3000,
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
        className="mySwiper mb-5 relative"
      >
        {
          sliders?.map(({ id, guid }: ImagesListType) => (
            <SwiperSlide key={id}>
              <Image
                width="1920"
                height="700"
                priority
                alt="ghorbani-dev.ir"
                placeholder="blur"
                blurDataURL={guid.rendered}
                src={guid.rendered}
                className="object-fill"
              />
            </SwiperSlide>
          ))
        }
        <button
          type="button"
          disabled={isStart}
          id="SwiperPrevBtnID"
          className="size-10 flex-center bg-white disabled:bg-slate-400 disabled:opacity-50 z-10 text-4xl rounded-full absolute top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 right-10"
        >
          <BiChevronRight />
        </button>
        <button
          type="button"
          disabled={isEnd}
          id="SwiperNextBtnID"
          className="size-10 flex-center bg-white disabled:bg-slate-400 disabled:opacity-50 z-10 text-4xl rounded-full absolute top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 left-10"
        >
          <BiChevronLeft />
        </button>
      </Swiper>)
  );
};

export default Slider;
