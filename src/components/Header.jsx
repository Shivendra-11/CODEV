import React, { useState } from "react";
import {navigation} from "../constants";  // Correctly imported navigation from constants
import { useLocation } from "react-router-dom";  // Correctly imported useLocation hook
import brainwave from "../assets/brainwave-symbol-white.svg";  // Assuming brainwave is imported correctly
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";  
import {HamburgerMenu} from "./design/Header";
import {enablePageScroll,disablePageScroll} from "scroll-lock";  // Correctly imported enablePageScroll from scroll-lock
import { Link } from "react-router-dom";


const Header = () => {
  const location = useLocation();  // Use the location to get the current path
  const [openNavigation, setOpenNavigation] =useState(true);  
  // Set the initial state of the menu to closed  
  const toggleNavigation=()=>{
    if(openNavigation){
      setOpenNavigation(false);
      enablePageScroll();

    }
    else{
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };


  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          {/* <img src={brainwave} width={190} height={40} alt="Brainwave" /> */}
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                  item.url === location.pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
        
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          <Link to='/login'  >
     <button class="bg-transparent text-red-700 border-2 border-red-900  hover:text-white transition-colors flex items-center px-4 py-3 rounded">
        <i class="fas fa-user mr-2 text-red-700"></i>
      <span  className="text-white">Log in </span>
    </button>
    </Link>
        </a>
        <Link to='/signup' >
        <Button className="hidden lg:flex" >
          Sign up
        </Button>
        </Link>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
