import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { ProductsListType } from "src/types/products";
import sanitizeHtml from "sanitize-html";

const MenuItemCard = ({ product }: { product: ProductsListType }) => {
  const {images , name , price , description} = product
  return (
    <>
      <div className="flex items-center gap-x-2 border-b border-slate-100 pb-4 md:border-none">
        <div>
          <Image
            width={171}
            height={171}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL={images[0].src}
            src={images[0].src}
            className="size-20 md:size-32 object-fill rounded-tl-[50px] rounded-tr-[50px] rounded-br-[150px] rounded-bl-[50px]"
          />
        </div>
        <div className="flex flex-col flex-1 font-extrabold ">
          <div className="flex items-center text-center flex-col gap-y-3 md:flex-row">
            <span className="flex flex-1 text-wrap text-base md:text-nowrap">
              {name}
            </span>
            <Divider className="hidden md:block mx-3 shrink" />
            <p className="flex-center gap-x-1 mb-4 md:mb-0 mr-1">
              <span className="text-lg">
                {Number(price).toLocaleString()}
              </span>
              <Image
                width={25}
                height={25}
                alt="ghorbani-dev.ir"
                src="/images/toman/toman.svg"
              />
            </p>
          </div>
          <div className="max-w-40 md:max-w-full flex justify-center md:justify-start overflow-hidden">
            <div
              className="flex flex-wrap justify-center font-normal text-wrap text-sm text-center md:text-right text-gray-400"
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
