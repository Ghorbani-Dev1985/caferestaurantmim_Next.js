import Link from "next/link";
import { HiPhone} from "react-icons/hi";
import { BiLogoInstagram, BiMobileAlt } from "react-icons/bi";

const TopHeader = () => {
    return (
        <section className="bg-secondary p-2 md:p-5">
        <div className="container flex-between">
          <div className="flex-center gap-1 md:gap-6 text-white text-sm md:text-xl">
            <Link
              href="tel:01332265593"
              className="flex-center gap-1 text-white"
            >

              <HiPhone className="size-3 md:size-5 text-primary-500 rotate-[265deg]" />
              32265593
            </Link>
            <Link
              href="tel:01332231879"
              className="flex-center gap-1 text-white"
            >

              <HiPhone className="size-3 md:size-5 text-primary-500 rotate-[265deg]" />{" "}
              32231879 
            </Link>
            <Link
              href="tel:09124366107"
              className="flex-center gap-1 text-white"
            >

              <BiMobileAlt className="size-3 md:size-5 text-primary-500" /> 0912436610
            </Link>
          </div>
          <Link href="https://www.instagram.com/cafe_rest">
            <BiLogoInstagram className="size-4 md:size-7 text-primary-500" />
          </Link>
        </div>
      </section>
    );
};

export default TopHeader;