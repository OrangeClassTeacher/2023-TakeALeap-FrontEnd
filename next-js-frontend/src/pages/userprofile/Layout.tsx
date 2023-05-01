import React, { ReactNode } from "react";
import Useredit from "./Useredit";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Useredit />
      <div className="bg-primary flex-1 p-4 text-white">{children}</div>
    </div>
  );
};

export default Layout;
