import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useGetMedia } from "src/hooks/useMedia";
import Image from "next/image";
import { ImagesListType } from "src/types/imageGallery";
const ImageGalleryModal = () => {
     const {data : images} = useGetMedia(16173)
     console.log(images && images)
    const {isOpen , onClose , onOpen} = useDisclosure();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(
        <>
        <Button onPress={() => onOpen()} className="absolute max-w-[220px] bottom-0 left-0 right-0 top-0 h-full w-full z-20 rounded-lg overflow-hidden bg-primary text-white font-bold bg-fixed opacity-0 transition-all duration-500 ease-linear"></Button>
        <Modal size="full" isOpen={isOpen} onClose={onClose} classNames={{base: "bg-primary-200 text-white"}}>
             <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader>گالری تصاویر</ModalHeader>
                    <ModalBody>
                    <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
         {
        images && (
            images.map(({id , guid , title , alt_text , media_details} : ImagesListType) => {
                return(
               <React.Fragment key={id}>
                 <SwiperSlide>
               <Image
               width={media_details.width}
               height={media_details.height}
               alt={alt_text}
               placeholder='blur'
               blurDataURL={guid.rendered}
               src={guid.rendered}
               className="object-fill size-[220px] rounded-lg"
               />
               </SwiperSlide>
             </React.Fragment>
                )
            })
        )
       }
          
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
         {
        images && (
            images.map(({id , guid , title , alt_text , media_details} : ImagesListType) => {
                return(
               <React.Fragment key={id}>
                 <SwiperSlide>
               <Image
               width={media_details.width}
               height={media_details.height}
               alt={alt_text}
               placeholder='blur'
               blurDataURL={guid.rendered}
               src={guid.rendered}
               className="object-fill size-[220px] rounded-lg"
               />
               </SwiperSlide>
             </React.Fragment>
                )
            })
        )
       }
 
      </Swiper>
                    </ModalBody>
                    </>
                )}
             </ModalContent>
        </Modal>
                </>
    )
}

export default ImageGalleryModal;