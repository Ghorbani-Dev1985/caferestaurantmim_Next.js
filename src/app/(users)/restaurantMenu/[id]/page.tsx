import { Metadata } from "next";
import RestaurantProducts from "src/components/RestaurantProducts/RestaurantProducts";
export const metadata: Metadata = {
  title: "منو رستوران میم | کافه و رستوران میم",
  description:
    "پیش غذا سوپ قارچ و مرغ 80,000 تومان فیله مرغ،قارچ،پیاز،سیر،خامه،شیر،نشاسته،جعفری،لیموترش نان سیر 150,000 تومان خمیر پیتزا،پنیر میکس،سس سیر،تخمه آفتابگردان،جعفری ساطوری،سس آیولی فرنچ فرایز 95,000 تومان سیب زمینی مزه دار شده،سس فرانسوی مخصوص وایت فرایز 180,000 تومان سیب زمینی مزه دار شده،سس قارچ،سس دیپ پنیر،پودر پنیر پارمسان مزرعه سیب زمینی 190,000 تومان سیب زمینی سرخ شده،ژامبون [&hellip;]",
};
const page = async ({ params: { id } }: { params: { id: number } }) => {
  return <RestaurantProducts id={id} />;
};

export default page;
