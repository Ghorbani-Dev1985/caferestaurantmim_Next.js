import { useState } from "react";
import Drawer from "../Drawer";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const MobileNav = () => {
    // Drawer state
    const [open, setOpen] = useState<boolean>(false);
  
    return (
      <>
        <button className="block lg:hidden" onClick={() => setOpen(true)}>
          <HiMiniBars3BottomRight className="size-7 text-primary"/>
        </button>
        <Drawer open={open} onClose={() => setOpen(false)}>
            d
         {/* <MobileLinks closeDrawer={() => setOpen(false)} /> */}
        </Drawer>
      </>
    );
  };
  
  export default MobileNav;
  