import React, { useEffect, useState } from "react";
import logo from '../../public/logo.png'
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 800);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <Image src={logo} alt="" width={100} height={100}/>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;