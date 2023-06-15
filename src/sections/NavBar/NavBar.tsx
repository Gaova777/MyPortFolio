import Button from '@/components/Button'
import Logo from '@/components/Logot'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import {motion} from 'framer-motion';

function NavBar() {
  const sectionLinks = [
      {name: "About", link:"/#about"},
      {name: "Experience", link:"/#experience"},
      {name: "Work", link:"/#work"},
      {name: "Contact", link:"/#contact"},
  ];
const [responsiveNavVisible,setResponsiveNavVisible]=useState(false);
  const [navbarVisible, setNavbarVisible]=useState(false)
  useEffect(()=>{
      window.addEventListener("scroll",()=>{
        window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false)
      })
  },[])

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);


  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav":""}`}>
        <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            duration:0.3,
            ease:"easeInOut",
          }}
        className="brand">
          <Link href="https://Github.com/Gaova777" target='_blank'>
            <Logo />
          </Link>
        </motion.div>
        <motion.div 
        className="nav-responsive-toggle"
        initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            duration:0.3,
            ease:"easeInOut",
          }}
        >
          {responsiveNavVisible ? (
            <CgClose 
              onClick={(e)=>{
                e.stopPropagation();
                setResponsiveNavVisible(false)
              }}
              />
          ):(
              <GiHamburgerMenu
                onClick={(e)=>{
                  e.stopPropagation();
                  setResponsiveNavVisible(true)
                }}
                />
          )}

        </motion.div>
        <div className={`${responsiveNavVisible && "nav-responsive"} nav-items`}>
          <ul className="nav-items-list">
            {
              sectionLinks.map(({name,link},index)=>(
                <motion.li 
                  key={name} 
                  className='nav-items-list-item'
                  initial={{opacity:0, y:-25}}
                  animate={{opacity:1, y:0}}
                  transition={{
                    duration:0.3,
                    ease:"easeInOut",
                    delay: 0.3 + index * 0.1,
                  }}
                  >
                  <Link href={link} className='nav-items-list-link'>{name}</Link>
                </motion.li>
              ))
            }
          </ul>
          <motion.div 
            className="nav-items-button"
            initial={{opacity:0, y:-25}}
            animate={{opacity:1, y:0}}
            transition={{
              duration:0.3,
              ease:"easeInOut",
              delay: 0.6,
            }}
            >
            <Button text="Resume" link="https://gaova-portfolio.vercel.app/resume.pdf"/>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar