import Link from "next/link";
import { BiCalendarCheck, BiCircle } from "react-icons/bi";

const CTABtns = () => {
    return(
        <>
        <Link
        href="/menus"
        className="flex justify-normal items-center gap-1 bg-primary hover:bg-primary-300 text-white cursor-pointer px-1.5 md:px-9 py-1.5 rounded-lg transition-colors"
        >
        <BiCircle className="hidden md:block" /> منوها
      </Link>
      <Link
        href="/reservation"
        className="relative flex justify-normal items-center gap-1 bg-primary-100 hover:bg-primary-600 text-primary hover:text-white cursor-pointer px-1.5 md:px-9 py-1.5 rounded-lg transition-colors"
      >
        <BiCalendarCheck className="size-3 md:size-4" />
        رزرو میز
        <span className="absolute flex size-3 -left-1 -top-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full size-3 bg-sky-500"></span>
        </span>
      </Link>
          </>
    )
}

export default CTABtns;