"use client"
import { ReactNode, Suspense } from "react";
import ImageMorphing from "src/common/ImageMorphing";
import { useGetMedia } from "src/hooks/useMedia";
import { useGetPage } from "src/hooks/usePage";
import sanitizeHtml from "sanitize-html";
import { Spinner } from "@nextui-org/react";

const AboutUsItems = ({ children } : {children : ReactNode}) => {
  const {data: pageDetails , isPending} = useGetPage(861)
  const {data : media } = useGetMedia(861)
  console.log(media)
    return (
      <Suspense fallback={<Spinner size="md" color="primary" className="flex-center"/>}>
      <div className="flex-col md:flex-row flex-between gap-5">
        <div className="w-full flex-center md:w-2/5">
          {
            media && media[0].source_url && <ImageMorphing href={media[0].source_url} />
          }
        </div>
        <div className="w-full md:w-3/5 flex flex-1 flex-col gap-8">
          <div dangerouslySetInnerHTML={{
                __html: sanitizeHtml(pageDetails?.content?.rendered),
              }}></div> 
         
          {children}
        </div>
      </div>
      </Suspense>
    );
  };
  
  export default AboutUsItems;