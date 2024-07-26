import { useQuery } from "@tanstack/react-query";
import { GetAboutUsMedia, GetImageGalleryMedia, GetSliderMedia } from "src/services/MediaService";

export const useGetSliderMedia = () =>
    useQuery({
      queryKey: ["getSliderMedia"],
      queryFn: GetSliderMedia,
      retry: false,
      refetchOnWindowFocus: true,
      staleTime: 0,
      refetchInterval: 0,
    });
    
    export const useGetAboutUsMedia = () =>
    useQuery({
      queryKey: ["getAboutUsMedia"],
      queryFn: GetAboutUsMedia,
      retry: false,
      refetchOnWindowFocus: true,
      staleTime: 0,
      refetchInterval: 0,
    }); 
     export const useGetImageGalleryMedia = () =>
    useQuery({
      queryKey: ["getImageGalleryMedia"],
      queryFn: GetImageGalleryMedia,
      retry: false,
      refetchOnWindowFocus: true,
      staleTime: 0,
      refetchInterval: 0,
    });