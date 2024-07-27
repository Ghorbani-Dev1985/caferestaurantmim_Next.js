import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { ProductsListType } from "src/types/products";
import sanitizeHtml from "sanitize-html";

const MenuItemCard = ({ product }: { product: ProductsListType }) => {
  const {images , name , price , description} = product
  return (
    <>
      <div className="flex items-center gap-x-2 border-b border-slate-300 border-dashed pb-4 md:border-none">
        <div className="md:w-1/5">
          <Image
            width={171}
            height={171}
            alt={images[0].alt}
            placeholder="blur"
            blurDataURL={images[0].src}
            src={images[0].src}
            className="size-24 md:size-20 lg:size-32 object-fill rounded-tl-[50px] rounded-tr-[50px] rounded-br-[150px] rounded-bl-[50px]"
          />
        </div>
        <div className="flex flex-col flex-1 font-extrabold">
          <div className="flex-between text-center flex-col gap-y-2 md:flex-row">
            <p className="flex text-wrap text-base lg:text-nowrap">
              {name}
            </p>
            <div className="flex flex-1 mx-2"> <Divider className="border-slate-300 border-dashed" /></div>
            <div className="flex-center gap-x-1 mb-2 md:mb-0 mr-1">
              <p className="text-lg">
                {Number(price).toLocaleString()}
              </p>
              <Image
                width={25}
                height={25}
                alt="ghorbani-dev.ir"
                src="/images/toman/toman.svg"
                className="size-4 lg:size-6"
              />
            </div>
          </div>
          <div className="max-w-48 md:max-w-full flex justify-center md:justify-start overflow-hidden">
            <div
              className="flex flex-wrap justify-center font-normal child:text-wrap text-sm text-center md:text-right text-gray-400"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(description),
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItemCard;
