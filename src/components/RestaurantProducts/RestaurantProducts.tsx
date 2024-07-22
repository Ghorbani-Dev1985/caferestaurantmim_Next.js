"use client";
import Breadcrumb from "src/common/Breadcrumb";
import Loading from "src/common/Loading";
import MenuItemCard from "src/common/MenuItemCard";
import { useGetCategoryById } from "src/hooks/useCategories";
import { useGetProductsByCategory } from "src/hooks/useProducts";
import { ProductsListType } from "src/types/products";

const RestaurantProducts = ({ id }: { id: number }) => {
  const { data: products, isPending } = useGetProductsByCategory(id);
  const { data: category } = useGetCategoryById(id);
  return (
    <section className="relative min-h-screen mt-6">
      {isPending ? (
        <div className="flex-center min-h-screen">
          <Loading />
        </div>
      ) : (
        <>
          <Breadcrumb>
           <Breadcrumb.Item title={category?.name}/>
          </Breadcrumb>
          <div id={category?.slug} className="flex flex-col gap-y-2 my-12">
            <h2 className=" font-extrabold text-2xl">{category?.name}</h2>
            <p className="flex gap-x-1">
              <span className="block w-28 h-1 rounded-full bg-primary"></span>
              <span className="block size-1 rounded-full bg-primary"></span>
              <span className="block size-1 rounded-full bg-primary"></span>
              <span className="block size-1 rounded-full bg-primary"></span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products?.map((product: ProductsListType) => {
              return <MenuItemCard key={product.id} product={product} />;
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default RestaurantProducts;
