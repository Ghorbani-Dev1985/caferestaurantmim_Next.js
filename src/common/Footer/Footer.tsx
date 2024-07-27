import Image from "next/image";
import AddressItems from "./AddressItems";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="bg-Footer min-h-96 relative">
        <div className="container flex flex-col items-center gap-y-10">
          <div className="absolute z-20 -top-[4.3rem]">
            <Image
              width={300}
              height={69}
              alt="ghorbani-dev.ir"
              src="/images/footer/topFooter.webp"
              className="object-fill rounded-none"
            />
          </div>

          <Image
            width={250}
            height={55}
            alt="ghorbani-dev.ir"
            src="/images/logo/logo.webp"
            className="object-fill rounded-none mt-6"
          />
          <div className="text-white space-y-10">
            <AddressItems />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
