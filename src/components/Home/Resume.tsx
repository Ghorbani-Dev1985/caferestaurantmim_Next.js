import Image from "next/image";
const Resume = () => {
  return (
    <>
      <div className="bg-paternBg flex-center mt-16">
        <Image
          width={300}
          height={69}
          alt="ghorbani-dev.ir"
          placeholder="blur"
          blurDataURL="/images/resume/aboutUsPre.webp"
          src="/images/resume/aboutUsPre.webp"
          className="object-fill rounded-none"
        />
      </div>
      <section className="w-full bg-[#F3F3F3] mb-10">
      <div className="container relative z-10  pt-12 flex flex-col md:flex-row md:flex md:justify-between gap-12 p-10">
        <div className="flex flex-1 flex-col gap-8">
          <h2 className="font-bold text-2xl text-primary">
            درباره کافه رستوران میم
          </h2>
          <p className="text-primary-400">
            کافه رستوران میم افتخار دارد از سال 1399 همزمان با شروع فعالیت خود
            با نظارت کامل مدیریت و همراهی کادر مجرب در تهیه مواد اولیه و امور
            طبخ، همچنان کمیّت و کیفیت خاص خود را حفظ نماید.
          </p>
          <h3 className="font-bold">
            برخی از عواملی که کافه رستوران میم را شایسته انتخاب شما عزیزان کرده
            است:
          </h3>
          <ul className="child:list-disc mr-10">
            <li>
              استفاده از گوشت تازه گوساله در کشتارگاه‌های مورد تایید وزارت
              بهداشت
            </li>
            <li>
              استفاده از مرغ کشتار روز در بسته‌بندی‌های مورد تایید وزارت بهداشت
            </li>
            <li>
              استفاده از سبزیجات، فرنگی‌جات و سیفی‌جات به‌ صورت روزانه و ضدعفونی
              اصولی
            </li>
            <li>استفاده از ظروف آلومینیوم و P.P</li>
            <li>استفاده از روغن‌های مایع تایید شده</li>
            <li>طبخ سرخ‌کردنی‌ها فقط با روغن </li>
            <li>حضور پرسنل در کلاس‌های بهداشت محیط</li>
          </ul>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            width={256}
            height={485}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/resume/Chef1.webp"
            src="/images/resume/Chef1.webp"
            className="object-fill mb-8 md:mb-0"
            />
        </div>
        <div className="absolute flex-center bottom-0 right-0 left-0 z-20 mx-auto">
          <Image
            width={300}
            height={69}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/resume/aboutUsAfter.webp"
            src="/images/resume/aboutUsAfter.webp"
            className="object-fill rounded-none "
            />
        </div>
      </div>
            </section>
    </>
  );
};

export default Resume;
