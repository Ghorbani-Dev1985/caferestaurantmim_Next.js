"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import TopHeader from "./TopHeader";
import Link from "next/link";
import Image from "next/image";
import { useGetMenu } from "src/hooks/useMenu";
import { MenuListType } from "src/types/menu";
import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { BiCircle } from "react-icons/bi";
import MobileNav from "./MobileNav";

const Header = () => {
  const { data: mainMenu } = useGetMenu();
  return (
    <header>
      <TopHeader />
      <Navbar  classNames={{
          base: "container rounded-lg top-5 p-4 md:2.5 border-none",
          wrapper: " lg:max-w-[1280px] px-0",
        }}>
        <NavbarBrand>
        <MobileNav />
          <Image
            width={116}
            height={55}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/logo/logo.webp"
            src="/Logo/logo2.webp"
            className="object-fill"
          />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {mainMenu?.map(({ id, title, url , object_id, parent }: MenuListType) => {
            const subMenuItems = mainMenu.filter(
              (menu: MenuListType) => menu.parent === id
            );
            const mainMenuUrl = url.split("ir/")
            return (
              parent === 0 && (
                <React.Fragment key={id}>
                  <NavbarItem className="relative group flex-center">
                    <Link color="foreground" href={`${subMenuItems.length > 0 ? `/menuItems/${object_id}` : `/${mainMenuUrl[1]}`}`} className="hover:text-primary transition-colors">
                      {title.rendered}
                    </Link>
                    {subMenuItems.length > 0 && (
                      <div className="absolute flex flex-col invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white space-y-5 min-w-60 right-0 top-full p-3 rounded-xl shadow-lg border-b-5 border-b-primary xl:pt-4 transition-all z-50">
                        {subMenuItems.map(
                          ({ id, title, object_id }: MenuListType) => {
                            return (
                              <React.Fragment key={id}>
                                <Link
                                  color="foreground"
                                  className="bg-primary-50/70 hover:bg-primary-500 hover:text-white p-2 rounded-lg transition-colors"
                                  href={`/menuItems/${object_id}`}
                                >
                                  {title.rendered}
                                </Link>
                              </React.Fragment>
                            );
                          }
                        )}
                      </div>
                    )}
                    {subMenuItems.length > 0 && (
                      <HiChevronDown className="size-5 hover:text-primary transition-colors" />
                    )}
                  </NavbarItem>
                </React.Fragment>
              )
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
          <Link
              href="/menus"
              className="flex justify-normal items-center gap-1 bg-primary hover:bg-primary-300 text-white cursor-pointer px-9 py-1.5 rounded-full transition-colors"
            >
              <BiCircle /> منوها
            </Link>
        </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
