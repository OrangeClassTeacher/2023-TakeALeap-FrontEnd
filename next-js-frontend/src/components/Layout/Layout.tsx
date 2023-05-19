import React from "react";
import { Meta } from "../InterfaceEnumsMeta/Meta";

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};
