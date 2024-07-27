import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
      <section className="container flex flex-col items-center justify-center">
        <Image
          width="500"
          height="500"
          layout="intrinsic"
          placeholder="blur"
          blurDataURL="/images/notFound/notFound.svg"
          alt="ghorbani-dev.ir"
          src="/images/notFound/notFound.svg"
          className="object-fill rounded-none"
        />
        <h2 className="font-extrabold md:text-2xl my-6">
          چنین صفحه ای یافت نشد
        </h2>
        <Link legacyBehavior href="/" replace>
          <span className="bg-primary hover:bg-primary-500 text-white border border-white font-extrabold p-2.5 rounded-xl cursor-pointer transition-colors">
            بازگشت به صفحه اصلی
          </span>
        </Link>
      </section>
  );
};

export default NotFound;
