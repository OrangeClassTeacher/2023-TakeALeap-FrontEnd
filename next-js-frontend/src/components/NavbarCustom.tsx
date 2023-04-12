import React from "react";
import Image from "next/image"
import Link from "next/link"
import { TbPhoneCall } from 'react-icons/Tb'
import {GrFacebook , GrInstagram, GrYoutube, GrLinkedin} from 'react-icons/Gr'

export const NavbarCustom = () => {
  return <div className="">
          <div className='flex justify-between items-center w-full h-full px-4 2x1:px-16 py-1'>
        <Link href={"/"} className="flex align-middle">
          <Image 
          src={require('../img/logo.jpg')} 
          alt="logo" 
          width={100} 
          height={100} 
          className='w-10 h-10 rounded-full bg-white' 
          />
          <p className="flex align-middle px-2 py-2">WELCOME TO LYNX</p>
        </Link>
        <div className="flex py-5 px-5">
        <TbPhoneCall className="mx-2 h-6"/>
        <p>(976) 99112233</p>
        <GrFacebook className="mx-2 h-6"/>
        <GrInstagram className="mx-2 h-6"/>
        <GrYoutube className="mx-2 h-6"/>
        <GrLinkedin className="mx-2 h-6"/>
        </div>
      </div>
      <div>
        
      </div>
  </div>;
};
;