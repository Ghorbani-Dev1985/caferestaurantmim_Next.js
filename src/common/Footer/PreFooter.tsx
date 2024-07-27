import Image from "next/image";
import Link from "next/link";
import { BiAlarmExclamation, BiFoodMenu } from "react-icons/bi";

const PreFooter = () => {
  return (
    <>
      <div className="bg-paternBg flex-center mt-16">
        <Image
          width={300}
          height={69}
          alt="ghorbani-dev.ir"
          src="/images/footer/topPreFooter.webp"
          className="object-fill rounded-none"
        />
      </div>
      <div className="bg-primary p-12">
        <div className="container flex flex-col items-center gap-y-8 font-bold">
          <h3 className="font-extrabold text-sm md:text-2xl">
            ساعات فعالیت کافه رستوران میم
          </h3>
          <p className="flex-center gap-1 text-xs md:text-lg">
            <BiAlarmExclamation className="size-4 md:size-5" />
            <span> نهار و شام ساعت 12:00 الی 24:00</span>
          </p>
          <Link
            href="/menus"
            className="flex justify-normal items-center gap-1 bg-transparent text-xs md:text-lg hover:bg-secondary/10 border border-secondary rounded-lg cursor-pointer px-4 md:px-9 py-2 transition-colors"
          >
            <BiFoodMenu className="size-4 md:size-5"/> منو کافه رستوران میم
          </Link>
          <p className="mb-10 text-center">
            جهت مشاهده منو کافه ، رستوران میتوانید از لینک بالا استفاده نمایید
          </p>
        </div>
      </div>
    </>
  );
};

export default PreFooter;
