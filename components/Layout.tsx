import React from "react";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="bg-orange-200 container max-w-xl mx-auto min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
