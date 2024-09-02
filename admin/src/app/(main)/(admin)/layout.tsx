import Sidebar from "@/components/global/Sidebar123";
import React from "react";
import Navbar from "@/components/global/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen">
      <Navbar/>
      <div>
        {children}
      </div>
    </main>
  );
};

export default Layout;
