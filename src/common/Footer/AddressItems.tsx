import Link from "next/link";
import { BiMobileAlt } from "react-icons/bi";
import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";

const AddressItems = () => {
    return (
      <div className="flex flex-col gap-y-4">
        <Link
          href="tel:09124366107"
          className="flex-center text-sm md:text-xl gap-1 text-inherit"
        >
          <BiMobileAlt className="size-6 text-primary-500" />
          میلاد نیک سرشت 09124366107 ( مدیریت )
        </Link>
        <div className="w-full flex-between">
          <Link
            href="tel:01332265593"
            className="flex-center text-xl gap-1 text-inherit"
          >
            <HiPhone className="size-5 text-primary-500 rotate-[265deg]" />
            32265593
          </Link>
          <Link
            href="tel:01332231879"
            className="flex-center text-xl gap-1 text-inherit"
          >
            <HiPhone className="size-5 text-primary-500 rotate-[265deg]" />
            32231879
          </Link>
        </div>
        <p className="flex-center gap-x-1 text-base md:text-xl">
          <HiOutlineLocationMarker className="size-6 text-primary-500" />
          <span>رشت ،خیابان لاکانی نبش بن بست شاد</span>
        </p>
      </div>
    );
  }
  export default AddressItems;