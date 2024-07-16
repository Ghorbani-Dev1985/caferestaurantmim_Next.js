"use client";
import {
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import TopHeader from "./TopHeader";
import Link from "next/link";
import Image from "next/image";
import { GetMainMenu } from "src/services/MenuService";
import { useGetMenu } from "src/hooks/useMenu";
import { MenuListType } from "src/types/menu";
import React from "react";
import { HiChevronDown } from "react-icons/hi";

const Header = () => {
  const { data: mainMenu, isPending } = useGetMenu();
  const subMenu = mainMenu?.filter((menu: MenuListType) => menu.parent !== 0);
  console.log(subMenu);
  return (
    <header>
      <TopHeader />
      <Navbar>
        <NavbarBrand>
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
          {mainMenu?.map(({ id, title, object_id, parent }: MenuListType) => {
            const subMenuItems = mainMenu.filter(
              (menu: MenuListType) => menu.parent === id
            );
            return (
              parent === 0 && (
                <React.Fragment key={id}>
                  <NavbarItem className="relative group flex-center">
                    <Link color="foreground" href={`/menuItems/${object_id}`}>
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
                      <HiChevronDown className="size-5" />
                    )}
                  </NavbarItem>
                </React.Fragment>
              )
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
