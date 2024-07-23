"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useClickOutside from "src/hooks/useClickOutside";

// types
type DrawerProps = {
  children: ReactNode;
  drawerOpen: boolean;
  onClose: () => void;
};

const Drawer = ({ children, drawerOpen, onClose }: DrawerProps) => {
  // state
  const [isClient, setIsClient] = useState(false);

  // To close the drawer when it is clicked outside the drawer
  const ref = useClickOutside(onClose);

  // hooks
  useEffect(() => {
    setIsClient(true);
  }, []);

  // deactive scroll when modal is open
  useEffect(() => {
    if (drawerOpen) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "visible";
  }, [drawerOpen]);

  if (typeof window === "object" && isClient) {
    return createPortal(
      <div
        className={`fixed inset-0 bg-primary-100/50 z-50 backdrop-blur-sm will-change-["opacity,backdrop"] lg:hidden ${
          drawerOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <aside
          ref={ref}
          className={`absolute bg-white top-0 h-full p-3 w-2/3 shadow-md will-change-transform smooth-transition overflow-y-auto ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
         <button onClick={onClose} className="w-full flex justify-end">
         <HiXMark className="size-7 text-rose-500"/>
         </button>
          <div>{children}</div>
        </aside>
      </div>,
      document.body
    );
  }
};

export default Drawer;
