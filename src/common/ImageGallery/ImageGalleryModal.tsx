import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../../public/styles/imageGallerySwiper.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useGetImageGalleryMedia } from "src/hooks/useMedia";
import Image from "next/image";
import { ImagesListType } from "src/types/imageGallery";
const ImageGalleryModal = ({ title }: { title: string }) => {
  const { data: images } = useGetImageGalleryMedia();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  return (
    <>
      <Button
        onPress={() => onOpen()}
        className="absolute max-w-[220px] bottom-0 left-0 right-0 top-0 h-full w-full z-20 rounded-lg overflow-hidden bg-primary text-white text-xl font-bold bg-fixed opacity-0 transition-all duration-500 ease-linear"
      >
        {title}
      </Button>
      <Modal
        size="full"
        isOpen={isOpen}
        onClose={onClose}
        classNames={{ base: "bg-transparent backdrop-blur-md text-white" }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>گالری تصاویر</ModalHeader>
              <ModalBody>
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="imageGallery"
                >
                  {images &&
                    images.map(
                      ({
                        id,
                        guid,
                        title,
                        alt_text,
                      }: ImagesListType) => {
                        return (
                          <React.Fragment key={id}>
                            <SwiperSlide className="flex flex-col">
                              <Image
                                width={200}
                                height={375}
                                alt={alt_text}
                                placeholder="blur"
                                blurDataURL={guid.rendered}
                                src={guid.rendered}
                              />
                              <p className="text-xl my-4 bg-primary px-6 py-1 rounded-lg">
                                {title.rendered}
                              </p>
                            </SwiperSlide>
                          </React.Fragment>
                        );
                      }
                    )}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="imageGalleryThumbs"
                >
                  {images &&
                    images.map(
                      ({
                        id,
                        guid,
                        alt_text,
                      }: ImagesListType) => {
                        return (
                          <React.Fragment key={id}>
                            <SwiperSlide>
                              <Image
                                width={220}
                                height={220}
                                alt={alt_text}
                                placeholder="blur"
                                blurDataURL={guid.rendered}
                                src={guid.rendered}
                                className="object-fill"
                              />
                            </SwiperSlide>
                          </React.Fragment>
                        );
                      }
                    )}
                </Swiper>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageGalleryModal;
