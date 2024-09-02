import React from "react";
import Sidebar from "@/components/global/Sidebar/index";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar/>
      <div className="flex-1 overflow-x-hidden overflow-y-auto md:pl-[250px]">
        {children}
      </div>
    </main>
  );
};

export default layout;
