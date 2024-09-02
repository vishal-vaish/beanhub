"use client"

import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {House, Menu, User} from "lucide-react";
import React, {useEffect, useMemo, useState} from "react";
import {clsx} from "clsx";
import {usePathname, useRouter} from "next/navigation";

type NavItemProps = {
  icon: React.ReactNode;
  title: string;
  active: boolean;
  path: string;
};

type Props = {
  defaultOpen?: boolean;
}

const MenuOptions = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const openState = useMemo(
    () => (props.defaultOpen ? {open: true} : {}),
    [props.defaultOpen]
  );

  useEffect(() => {
    setActiveTab(pathname.replace(/^\//, ''))
  }, [pathname])

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  const NavItem = (props: NavItemProps) => (
    <li
      className={`flex items-center px-4 py-2 cursor-pointer ${
        props.active
          ? "bg-primary text-white"
          : "text-gray-700 hover:bg-gray-200"
      }`}
      onClick={() => {
        setActiveTab(props.path.replace(/^\//, ''));
        router.push(props.path);
      }}
    >
      <span className="mr-2">{props.icon}</span>
      <span>{props.title}</span>
    </li>
  );

  return (
    <Sheet
      modal={false}
      {...openState}
    >
      <SheetTrigger
        asChild
        className="absolute left-4 top-4 z-[100] md:!hidden"
      >
        <Button
          variant="outline"
          size={"icon"}
        >
          <Menu/>
        </Button>
      </SheetTrigger>
      <SheetContent
        showX={!props.defaultOpen}
        side={"left"}
        className={clsx(
          "bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-0",
          {
            "hidden md:inline-block z-0 w-[250px]": props.defaultOpen,
            "inline-block md:hidden z-[100] sm:max-w-[250px] w-full": !props.defaultOpen,
          }
        )}
      >
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
            icon={<House size={20}/>}
            title="Home"
            active={activeTab === "home"}
            path="/home"
          />
          <NavItem
            icon={<User size={20}/>}
            title="User"
            active={activeTab === "user"}
            path="/user"
          />
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default MenuOptions;
