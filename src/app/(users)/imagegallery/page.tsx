import { Metadata } from 'next';
import ImageGalleryView from 'src/common/ImageGallery/ImageGalleryView';

// import React, { useState } from 'react';
// import ImageGalleryUi from '@/UI/ImageGallery'
// import data from "@/Data/data.json";
// import Image from "next/image";
// import useTitle from '@/Hooks/useTitle';
export const metadata : Metadata = {
  title: "گالری تصاویر | کافه و رستوران میم",
  description: "کافه و رستـوران میم میم یکی از کافه و رستوران رشت شما را به صرف غذاهای خاص دعوت می کند. ما در میم بر لذت بردن از مزه ها در فضایی که لحظه های به یاد ماندنی می سازد تاکید داریم و از این رو نام میم را که لذت میل کردن، نوشیدن و زندگی [&hellip;]"
 }
const ImageGallery = () => {
    // const [clickedImg, setClickedImg] = useState("");
    // const [currentIndex, setCurrentIndex] = useState<number>();
    // const handleClick = (id : number , href : string) :void => {
    //   setCurrentIndex(id);
    //   setClickedImg(href);
    // };
    return ( 
      <>
        {/* <ImageGalleryUi clickedImg={clickedImg} setClickedImg={setClickedImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
        {data.images.map(({ id, href }) => (
          <React.Fragment key={id}>
             <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">
               <Image
               width="220"
               height="220"
               alt="ghorbani-dev.ir"
               placeholder='blur'
               blurDataURL={href}
               src={href}
               className="object-fill size-[220px] rounded-lg"
               />
               <div onClick={() => handleClick(id , href)}
           className="absolute max-w-[220px] bottom-0 left-0 right-0 top-0 h-full w-full z-20 rounded-lg overflow-hidden bg-primary bg-fixed opacity-0 transition-all duration-500 ease-linear hover:opacity-40"></div>
               </div>
             </React.Fragment>
           ))}
           </ImageGalleryUi>  */}
          <ImageGalleryView />
           </>
     );
}
 
export default ImageGallery;