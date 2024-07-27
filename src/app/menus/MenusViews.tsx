import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "src/common/Breadcrumb";

const MenusViews = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item title="منو‌ها" />
      </Breadcrumb>
      <section className="container">
        <div className="w-full max-w-4xl flex-col md:flex-row flex-between gap-8 mx-auto">
        <Link href="/menuItems/743">
          <Image
            width={385}
            height={385}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/menus/restaurantMenu.webp"
            src="/images/menus/restaurantMenu.webp"
            className="object-fill rounded-lg hover:scale-90 hover:opacity-80 transition-all ease-linear duration-250"
          />
        </Link>
        <Link href="/menuItems/793">
          <Image
            width={385}
            height={385}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/menus/coffeeMenu.webp"
            src="/images/menus/coffeeMenu.webp"
            className="object-fill rounded-lg hover:scale-90 hover:opacity-80 transition-all ease-linear duration-250"
          />
        </Link>
      </div>
      </section>
      
    </>
  );
};

export default MenusViews;
