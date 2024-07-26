import { WpHttp } from "./HttpServices";

export function GetMedia(id: number) {
  return WpHttp.get(`/media?parent=${id}&per_page=80`).then(({ data }) => data);
}

export function GetSliderMedia() {
    return WpHttp.get('/media?parent=16286&per_page=80').then(({ data }) => data);
  }
  
  export function GetAboutUsMedia() {
    return WpHttp.get('/media?parent=861&per_page=80').then(({ data }) => data);
  } 
  
  export function GetImageGalleryMedia() {
    return WpHttp.get('/media?parent=16173&per_page=80').then(({ data }) => data);
  }