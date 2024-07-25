"use client";



import Image from "next/image";

import { Spinner, Tooltip } from "@nextui-org/react";
import { useGetCategories } from "src/hooks/useCategories";
import { CategoryListType } from "src/types/categories";
import React from "react";
import Link from "next/link";
import SectionTitle from "src/common/SectionTitle";


const QuickAccess = () => {
 
  const {data , isPending} = useGetCategories()
  const categories = data?.filter((cat: CategoryListType) => cat.parent !== 0)
  return isPending ? (
    <Spinner size="md" color="primary" className="flex-center mt-12" />
  ) : (
   <section className="container grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-y-9 my-28">
    <div className="col-span-full flex flex-col items-center gap-y-4"><SectionTitle title="دسترسی سریع"/>
    </div>
      {
        categories?.map(({id, image , name} : CategoryListType) => {
          return(
            <React.Fragment key={id}>
              <Link href={`/menuItems/${id}`}>
              <Tooltip color="primary" showArrow={true} content={name} placement="top" >
              <Image
            width={170}
            height={170}
            priority
            alt={image.alt}
            placeholder="blur"
            blurDataURL={image.src}
            src={image.src}
            className="hover:scale-90 hover:opacity-80 transition-all ease-linear duration-250"
          /></Tooltip>
              </Link>
            </React.Fragment>
          )
        })
      }
   </section>
  );
};

export default QuickAccess;
