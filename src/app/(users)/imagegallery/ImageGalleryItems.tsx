"use client";
import { Spinner } from "@nextui-org/react";
import React, { Suspense } from "react";
import { useGetMedia } from "src/hooks/useMedia";
import { useState } from "react";
import ImageGalleryView from "src/common/ImageGallery/ImageGalleryView";
import { ImagesListType } from "src/types/imageGallery";
import Image from "next/image";



const ImageGalleryItems = () => {
    const {data : imageGallery } = useGetMedia(16173)
    console.log(imageGallery && imageGallery)
    const [clickedImg, setClickedImg] = useState("");
    let currentIndex;
    const [imgTitle, setImgTitle] = useState("")
    const handleClick = (id: number, src: string , imgTitle : string) => {
        setClickedImg(src);
        currentIndex = id;
        setImgTitle(imgTitle)
    };
      return (
        <Suspense fallback={<Spinner size="md" color="primary" className="flex-center"/>}>
            
             <ImageGalleryView clickedImg={clickedImg} setClickedImg={setClickedImg} currentIndex={currentIndex}>
                    {
                    imageGallery && (
                        imageGallery.map(({id , guid , title , alt_text} : ImagesListType) => {
                            const src = guid.rendered;
                            const imgTitle = title.rendered
                          return(
                            <React.Fragment key={id}>
                            <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">
                              <Image
                              width="220"
                              height="220"
                              alt={alt_text}
                              placeholder='blur'
                              blurDataURL={src}
                              src={src}
                              className="object-fill size-[220px] rounded-lg"
                              />
                              <div onClick={() => handleClick(id , src , imgTitle)}
                          className="absolute max-w-[220px] bottom-0 left-0 right-0 top-0 h-full w-full z-20 rounded-lg overflow-hidden bg-primary bg-fixed opacity-0 transition-all duration-500 ease-linear hover:opacity-40"></div>
                              </div>
                            </React.Fragment>
                          )
                        })
                    )
                    }
                </ImageGalleryView>
            
        </Suspense>
      );
    };
    
    export default ImageGalleryItems;