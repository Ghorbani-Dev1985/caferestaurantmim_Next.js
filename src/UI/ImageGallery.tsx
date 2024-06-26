import React, { ReactNode } from "react";
import LightBoxModal from "@/UI/LightBoxModal";
import Title from "@/UI/Title";
import data from "@/Data/data.json";

type ImageGalleryType = {
  children: ReactNode,
  clickedImg: string,
  setClickedImg: React.Dispatch<React.SetStateAction<string>>,
  currentIndex: number | undefined,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | undefined>>,
}

const ImageGallery = ({
  children,
  clickedImg,
  setClickedImg,
  currentIndex,
  setCurrentIndex,
}:ImageGalleryType) => {
  const handelRotationRight = () : void => {
    const totalLength = data.images.length;
    if (currentIndex! + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.images[0].href;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex! + 1;
    const newUrl = data.images.filter((item) => {
      return data.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].href;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () : void => {
    const totalLength = data.images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.images[totalLength - 1].href;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex! - 1;
    const newUrl = data.images.filter((item) => {
      return data.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].href;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <Title text="گالری تصاویر" />
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {children}
      </div>
      {clickedImg && (
        <LightBoxModal
          clickedImg={clickedImg}
          handelRotationLeft={handelRotationLeft}
          setClickedImg={setClickedImg}
          handelRotationRight={handelRotationRight}
        />
      )}
    </>
  );
};

export default ImageGallery;
