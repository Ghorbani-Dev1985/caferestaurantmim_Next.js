"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useClickOutside from "src/hooks/useClickOutside";

// types
type DrawerProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const Drawer = ({ children, open, onClose }: DrawerProps) => {
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
    if (open) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "visible";
  }, [open]);

  if (typeof window === "object" && isClient) {
    return createPortal(
      <div
        className={`smooth-transition fixed inset-0 z-50 backdrop-blur-sm will-change-["opacity,backdrop"] h-screen overflow-hidden lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <aside
          ref={ref}
          className={`smooth-transition absolute bg-white top-0 h-full p-3 w-2/3 bg-muted-100 shadow-md will-change-transform md:w-1/3 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
         <button onClick={onClose} className="w-full flex justify-end">
         <HiXMark className="size-8 text-rose-500"/>
         </button>
          <div>{children}</div>
        </aside>
      </div>,
      document.body
    );
  }
};

export default Drawer;
