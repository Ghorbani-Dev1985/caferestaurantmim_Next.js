"use client";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import Drawer from "../Drawer";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MenuListType } from "src/types/menu";
import { useGetMenu } from "src/hooks/useMenu";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { motion, useCycle } from "framer-motion";
import Image from "next/image";


type MenuItemWithSubMenuProps = {
  item: MenuListType;
  subMenuItems: any;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  toggleOpen: () => void;
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const MobileNav = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { data: mainMenu } = useGetMenu();
  const pathname = usePathname();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <button
        className="block lg:hidden"
        onClick={() => setDrawerOpen(true)}
      >
        <HiMiniBars3BottomRight className="size-7 text-primary" />
      </button>
      <Drawer
        drawerOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className="flex flex-col items-center my-3">
         <Image
            width={160}
            height={65}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/logo/logo.webp"
            src="/images/logo/logo.webp"
            className="object-fill"
          />
          <Divider className="my-2.5"/>
        </div>
        {mainMenu?.map((item: MenuListType) => {
          const isLastItem = item.id === mainMenu.length - 1; // Check if it's the last item
          const subMenuItems = mainMenu.filter(
            (menu: MenuListType) => menu.parent === item.id
          );
          const mainMenuUrl = item.url.split("ir/");
          return (
            item.parent === 0 && (
              <React.Fragment key={item.id}>
                <MenuItem>
                  <Link
                    href={`/${mainMenuUrl[1]}`}
                    onClick={() => {
                      toggleOpen();
                      setDrawerOpen(false);
                    }}
                    className="line-clamp-1"
                  >
                    {subMenuItems.length < 1 && item.title.rendered}
                  </Link>
                </MenuItem>
                {subMenuItems.length > 0 && (
                  <MenuItemWithSubMenu
                    item={item}
                    setDrawerOpen={setDrawerOpen}
                    toggleOpen={toggleOpen}
                    subMenuItems={subMenuItems}
                  />
                )}
                {!isLastItem && (
                  <Divider className="my-2.5"/>
                )}
              </React.Fragment>
            )
          );
        })}
      </Drawer>
    </>
  );
};

export default MobileNav;

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
  item,
  toggleOpen,
  subMenuItems,
  setDrawerOpen,
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className="flex w-full"
          onClick={() => setSubMenuOpen((prev) => !prev)}
        >
          <div className="flex flex-row justify-between w-full items-center">
            <span>{item.title.rendered}</span>
            <div
              className={`${
                subMenuOpen && "-rotate-90"
              } transition-all ease-in-out duration-500`}
            >
              <HiChevronLeft className="size-5 text-gray-400" />
            </div>
          </div>
        </button>
      </MenuItem>
      {subMenuOpen && (
        <div className="w-full mt-2 ml-2 flex flex-col space-y-2 border border-slate-100 p-2 rounded-lg">
          <>
            {subMenuItems.map(({ id, title, object_id }: MenuListType) => {
              return (
                <MenuItem key={id}>
                  <Link
                    href={`/menuItems/${object_id}`}
                    onClick={() => {
                      toggleOpen();
                      setSubMenuOpen(false);
                      setDrawerOpen(false);
                    }}
                    className="block bg-primary-50/70 px-1.5 py-1 rounded-lg line-clamp-1"
                  >
                    {title.rendered}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        </div>
      )}
    </>
  );
};

