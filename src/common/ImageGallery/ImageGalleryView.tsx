"use client";
import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image"
import React from "react";
import { useGetMedia } from "src/hooks/useMedia"
import { ImagesListType } from "src/types/imageGallery"
import ImageGalleryModal from "./ImageGalleryModal";
import Breadcrumb from "../Breadcrumb";

const ImageGalleryView = () => {
    const {data : images} = useGetMedia(16173)
    const {onOpen} = useDisclosure();
    return(
        <>
         <Breadcrumb>
        <Breadcrumb.Item title="گالری تصاویر"/>
       </Breadcrumb>
       <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
       {
        images && (
            images.map(({id , guid , title , alt_text} : ImagesListType) => {
                return(
               <React.Fragment key={id}>
             <div className="flex-center relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">
               <Image
               width={220}
               height={220}
               alt={alt_text}
               placeholder='blur'
               blurDataURL={guid.rendered}
               src={guid.rendered}
               className="object-fill size-[220px] rounded-lg"
               />
               <ImageGalleryModal title={title.rendered}/>
               </div>
             </React.Fragment>
                )
            })
        )
       }
        </section>
        </>
    )
}

export default ImageGalleryView;