import Link from "next/link";
import { BiMobileAlt } from "react-icons/bi";
import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";

const AddressItems = () => {
    return (
      <>
        <Link
          href="tel:09124366107"
          className="flex-center text-base md:text-xl gap-1 text-inherit"
        >
          <BiMobileAlt className="size-6 text-primary-500" />
          میلاد نیک سرشت 09124366107 ( مدیریت )
        </Link>
        <div className="flex-between gap-x-20 md:gap-x-36">
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
        <p className="flex-center gap-x-1 text-xl">
          <HiOutlineLocationMarker className="size-6 text-primary-500" />
          <span>رشت ،خیابان لاکانی نبش بن بست شاد</span>
        </p>
      </>
    );
  }
  export default AddressItems;