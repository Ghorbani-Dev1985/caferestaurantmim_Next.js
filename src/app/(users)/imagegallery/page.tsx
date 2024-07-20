import { Metadata } from 'next';
import ImageGalleryView from 'src/common/ImageGallery/ImageGalleryView';
export const metadata : Metadata = {
  title: "گالری تصاویر | کافه و رستوران میم",
  description: "کافه و رستـوران میم میم یکی از کافه و رستوران رشت شما را به صرف غذاهای خاص دعوت می کند. ما در میم بر لذت بردن از مزه ها در فضایی که لحظه های به یاد ماندنی می سازد تاکید داریم و از این رو نام میم را که لذت میل کردن، نوشیدن و زندگی [&hellip;]"
 }
const ImageGallery = () => {
    return <ImageGalleryView />
}
 
export default ImageGallery;