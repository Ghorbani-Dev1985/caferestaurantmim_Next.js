import Link from "next/link"
import ImageGalleryView from "src/common/ImageGallery/ImageGalleryView"
import SectionTitle from "src/common/SectionTitle"


const ImageGallery = () => {
    return (
        <section className="container flex-center flex-col">
        <div className="flex-center flex-col gap-y-4 mb-8"><SectionTitle title=" گالری تصاویر"/>  </div>
        <ImageGalleryView slice={10}/>
        <div className="flex-center flex-col my-8"><Link href="/imagegallery"><SectionTitle title="  مشاهده کامل "/> </Link></div>
        </section>
    )
}

export default ImageGallery