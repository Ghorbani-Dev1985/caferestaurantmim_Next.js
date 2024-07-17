"use client";
import React, { useState } from "react";
import Drawer from "../Drawer";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MenuListType } from "src/types/menu";
import { useGetMenu } from "src/hooks/useMenu";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

const MobileNav = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { data: mainMenu } = useGetMenu();
  return (
    <>
      <button className="block md:hidden" onClick={() => setDrawerOpen(true)}>
        <HiMiniBars3BottomRight className="size-7 text-primary" />
      </button>
      <Drawer drawerOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
          {mainMenu?.map(
            ({ id, title, url, object_id, parent }: MenuListType) => {
              const subMenuItems = mainMenu.filter(
                (menu: MenuListType) => menu.parent === id
              );
              const mainMenuUrl = url.split("ir/");
              return (
                parent === 0 && (
                  <React.Fragment key={id}>
                    <Accordion variant="light">
                    <AccordionItem 
                      key={id}
                      aria-label={title.rendered}
                      title={title.rendered}
                      indicator={<HiChevronLeft className="size-5" />}
                      classNames={{
                        content: `${
                          subMenuItems.length > 0
                            ? "flex flex-col gap-y-3"
                            : "hidden"
                        }`,
                        indicator: `${
                          subMenuItems.length > 0 ? "rtl:rotate-0" : "hidden"
                        }`,
                      }}
                    >
                     
                      {subMenuItems.length > 0 &&
                        subMenuItems.map(
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
                    </AccordionItem>
                    </Accordion>
                    
                  </React.Fragment>
                )
              );
            }
          )}
      </Drawer>
    </>
  );
};

export default MobileNav;
