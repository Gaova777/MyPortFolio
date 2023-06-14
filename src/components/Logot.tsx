import Image from "next/image";
import React from "react";
import logo from '../../public/logo.png'

function Logo() {
  return (
    <>
    <Image src={logo} alt="" width={50} height={50}/>
    </>
  );
}

export default Logo;