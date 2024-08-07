"use client";
import { Spinner } from "@nextui-org/react";
import Breadcrumb from "src/common/Breadcrumb";
import MenuItemCard from "src/common/MenuItemCard";
import { useGetCategoryById } from "src/hooks/useCategories";
import { useGetProductsByCategory } from "src/hooks/useProducts";
import { ProductsListType } from "src/types/products";

const RestaurantProducts = ({ id }: { id: number }) => {
  const { data: products, isPending } = useGetProductsByCategory(id);
  const { data: category } = useGetCategoryById(id);
  if (isPending) return <Spinner size="md" color="primary" />;
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item title={category?.name} />
      </Breadcrumb>
      <section className="container relative mt-6">
        <div className="flex flex-col gap-y-2 my-12">
          <h2 className=" font-extrabold text-2xl">{category?.name}</h2>
          <p className="flex gap-x-1">
            <span className="block w-28 h-1 rounded-full bg-primary"></span>
            <span className="block size-1 rounded-full bg-primary"></span>
            <span className="block size-1 rounded-full bg-primary"></span>
            <span className="block size-1 rounded-full bg-primary"></span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 lg:gap-x-5 gap-y-2">
          {products?.map((product: ProductsListType) => {
            return <MenuItemCard key={product.id} product={product} />;
          })}
        </div>
      </section>
    </>
  );
};

export default RestaurantProducts;
