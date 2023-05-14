import React from "react";
import { Meta } from "../InterfaceEnumsMeta/Meta";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};
