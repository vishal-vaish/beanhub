"use client";

import {House, Menu, User} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, {useEffect, useMemo, useState} from "react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {clsx} from "clsx";


type Props = {
  defaultOpen: boolean;
}

const Sidebar = (props:Props) => {
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setActiveTab(pathname.replace(/^\//, ''))
    },[pathname])

  const openState = useMemo(
    () => (props.defaultOpen ? {open: true} : {}),
    [props.defaultOpen]
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-lg h-full">
        <div className="p-4 text-center text-gray-800 font-semibold mt-5">
          <h1 className="text-2xl">
            Beanhub
          </h1>
          <h1 className="text-base font-semibold text-gray-800">
            Dashboard
          </h1>
        </div>
        <ul className="mt-4">
          <NavItem
            icon={<House size={20} />}
            title="Home"
            active={activeTab === "home"}
            path="/home"
          />
          <NavItem
            icon={<User size={20} />}
            title="User"
            active={activeTab === "user"}
            path="/user"
          />
        </ul>
      </nav>
    </div>
    // <Sheet
    //   modal={true}
    //   {...openState}
    // >
    //   <SheetTrigger
    //     asChild
    //     className="absolute left-4 top-4 z-[100] md:!hidden"
    //   >
    //     <Button
    //       variant="outline"
    //       size={"icon"}
    //     >
    //       <Menu/>
    //     </Button>
    //   </SheetTrigger>
    //   <SheetContent
    //     showX={!props.defaultOpen}
    //     side={"left"}
    //     className={clsx(
    //       'bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-6',
    //       {
    //         'hidden md:inline-block z-0 w-[300px]': props.defaultOpen,
    //         'inline-block md:hidden z-[100] w-full': !props.defaultOpen,
    //       }
    //     )}
    //   >
    //
    //   </SheetContent>
    // </Sheet>
  );
};

export default Sidebar;
