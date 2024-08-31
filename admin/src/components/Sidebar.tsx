"use client";

import { House, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type NavItemProps = {
  icon: React.ReactNode;
  title: string;
  active: boolean;
  path: string;
};

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setActiveTab(pathname.replace(/^\//, ''))
    },[pathname])

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
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-lg h-full">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800 text-center">
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
  );
};

export default Sidebar;
