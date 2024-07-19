import { ImageGalleryUi } from '@/UI/ImageGallery';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ImagesListType {
    id: number,
    guid: {
        rendered: string,
    },
    title: {
        rendered: string,
    },
    alt_text: string,
    media_details: {
        width: number,
        height: number
    }
}

export interface ImageGalleryViewType {
    children : ReactNode,
    clickedImg: string,
    setClickedImg: Dispatch<SetStateAction<string>>,
    currentIndex: number,
    setCurrentIndex: Dispatch<SetStateAction<number>>,
  }

export interface ImageGalleryLightBoxType {
    clickedImg: string,
    setClickedImg: Dispatch<SetStateAction<string>>,
    handelRotationRight: () => void,
    handelRotationLeft: () => void,
}