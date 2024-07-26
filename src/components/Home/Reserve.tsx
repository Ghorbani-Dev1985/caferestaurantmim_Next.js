import Link from "next/link";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

const Reserve = () => {
  return (
    <section className="container">
      <div className="flex-col md:flex-row flex-between h-40 md:h-32 bg-gradient-to-l from-primary-400 to-primary-500 text-white rounded-3xl my-9 px-4 py-5 md:py-2">
        <p className="font-extrabold text-base text-center md:text-lg animate-bounce pt-7 md:pt-0">
          می تونی میزنو تو کافه رستوران میم همین حالا رزور کنی
        </p>
        <Link
          href="/reservation"
          className="flex-center gap-x-1.5 bg-white hover:text-white border hover:border-white hover:bg-transparent text-lg font-bold text-primary px-5 py-2 rounded-lg transition-colors"
        >
          <HiOutlineArrowLongLeft className="size-5" />
          <span> رزرو میز</span>
        </Link>
      </div>
    </section>
  );
};

export default Reserve;
