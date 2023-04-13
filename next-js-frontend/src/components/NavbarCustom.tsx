import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbPhoneCall } from "react-icons/Tb";
import { GrFacebook, GrInstagram, GrYoutube, GrLinkedin } from "react-icons/Gr";

export const NavbarCustom = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between items-center w-full h-full px-4 2x1:px-16">
        <Link href={"/"} className="flex align-middle">
          <Image
            src={require("../img/logo.jpg")}
            alt="logo"
            width={80}
            height={80}
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="p-3 text-xs font-thin">WELCOME TO LYNX</p>
        </Link>
        <div className="flex p-5">
          <TbPhoneCall className="mx-2 h-6" />
          <p className="text-xs font-thin p-1">(976) 99112233</p>
          <GrFacebook className="mx-2 h-6" />
          <GrInstagram className="mx-2 h-6" />
          <GrYoutube className="mx-2 h-6" />
          <GrLinkedin className="mx-2 h-6" />
        </div>
      </div>
    </div>
  );
};
