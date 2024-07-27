import Link from "next/link";
import { ReactNode } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { HiMiniChevronDoubleLeft } from "react-icons/hi2";

const BreadcrumbNav = ({ href, title }: { href?: string; title: string }) => {
  return (
    <li>
      <div className="flex items-center">
        <HiMiniChevronDoubleLeft className="size-5 ml-2" />
        {
            href ? 
        <Link
          href={href}
          className="ms-1 text-sm font-medium text-gray-700 hover:text-primary md:ms-2 dark:text-gray-400 dark:hover:text-white"
        >
          {title}
        </Link> : <span>{title}</span>
        }
      </div>
    </li>
  );
};

const Breadcrumb = ({ children }: { children: ReactNode }) => {
  return (
    <section className="container">
    <nav
      className="w-full flex px-5 py-3 mb-8 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Breadcrumb"
      >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white"
            >
            <HiOutlineHome className="size-5" />
          </Link>
        </li>
        {children}
      </ol>
    </nav>
    </section>
  );
};

Breadcrumb.Item = BreadcrumbNav;

export default Breadcrumb;
