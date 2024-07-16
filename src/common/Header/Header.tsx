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
import { GetMainMenu } from "src/services/MenuService";
import { useGetMenu } from "src/hooks/useMenu";
import { MenuListType } from "src/types/menu";
import React from "react";

const Header = () => {
  const { data: mainMenu, isPending } = useGetMenu();
  const parentMenus = mainMenu?.filter(
    (menu: MenuListType) => menu.parent === 0
  );

  console.log(mainMenu, parentMenus);
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
          {parentMenus?.map(({ id, title, object_id, parent }: MenuListType) => {
            return (
              <React.Fragment key={id}>
                <NavbarItem>
                  <Link color="foreground" href={`mimrestaurant/${object_id}`}>
                    {title.rendered}
                  </Link>
                </NavbarItem>
              </React.Fragment>
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
