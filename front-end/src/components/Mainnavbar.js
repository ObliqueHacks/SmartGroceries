"use client";

import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import React from "react";

export default function Mainnavbar() {
  const [menu, updateMenu] = useState(true);
  const [close, updateClose] = useState(false);

  const handleMenuClick = () => {
    updateMenu(); // Hide menu icon
    updateClose(true); // Show close icon
  };

  const handleCloseClick = () => {
    updateMenu(true); // Show menu icon
    updateClose(false); // Hide close icon
  };
  return (
    <NavigationMenu className="list-none flex sticky top-0 z-50 opacity-85  items-center w-full bg-background-100 max-w-full justify-between px-8 ">
      <div className="flex flex-row items-center">
        <img className="w-20" src="/assets/logo.png"></img>
        <img className="w-0 md:w-52 h-10" src="/assets/logo2.png"></img>{" "}
      </div>
      <div className="hidden md:flex flex-grow justify-center space-x-4">
        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Shop
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </div>
      <div className="flex justify-center items-center space-x-2 ">
        <IoIosMenu
          onClick={handleMenuClick}
          className={`flex md:hidden hover:text-tertiary-normal hover:scale-105 transition-colors duration-600 ${
            menu ? "block" : "hidden"
          }`}
          size={25}
        ></IoIosMenu>
        <IoMdClose
          onClick={handleCloseClick}
          size={25}
          className={`md:hidden hover:text-tertiary-normal hover:scale-105 transition-colors duration-600 ${
            close ? "block" : "hidden"
          }`}
        ></IoMdClose>
        <span className="mb-4">
          <p className="font-normal pt-4 text-xs md:text-sm">
            <span className="text-slate-400">Account</span> <br></br>
            <a className="underline underline-offset-4 hover:text-third transition-colors duration-300 cursor-pointer">
              Login
            </a>{" "}
            or{" "}
            <a className="underline underline-offset-4 hover:text-third transition-colors ease-in duration-300 cursor-pointer">
              Create Account
            </a>
          </p>
        </span>
      </div>
    </NavigationMenu>

    // <header
    //   className="w-full bg-background-200 sticky top-0 z-50 font-semibold opacity-85"
    //   id="header"
    // >
    //   <nav className="flex justify-between w-[92%] mx-auto font-normal items-center">
    //     <div className="flex flex-row items-center">
    //       <img className="w-20" src="/assets/logo.png"></img>
    //       <img className="w-0 md:w-52 h-10" src="/assets/logo2.png"></img>
    //     </div>

    //     <div
    //       className={`absolute md:static md:min-h-fit md:w-auto justify-center pt-4 items-center bg-background-200 min-h-[60vh] left-0 top-[-500%]  w-full flex px-5`}
    //     >
    //       <ul className="flex md:flex-row flex-col pb-14 md:items-center md:gap-16 gap-6 text-md">
    //         <li>
    //           {" "}
    //           <Link
    //             href="/"
    //             className="relative after:absolute after:left-0 after:right-0 after:bottom-0 after:top-6 after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           {" "}
    //           <Link
    //             href="/about"
    //             className="relative after:absolute after:left-0 after:right-0 after:bottom-0 after:top-6 after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer"
    //           >
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           {" "}
    //           <a
    //             href="#"
    //             className="relative after:absolute after:left-0 after:right-0 after:bottom-0 after:top-6 after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer"
    //           >
    //             Shop
    //           </a>
    //         </li>
    //         <li>
    //           {" "}
    //           <a
    //             href="#"
    //             className="relative after:absolute after:left-0 after:right-0 after:bottom-0 after:top-6 after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //         {/* <li>
    //             {" "}
    //             <a
    //               className="relative after:absolute after:left-0 after:right-0 after:bottom-0 after:top-6 after:h-[2px] after:bg-tertiary-normal after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 "
    //               href="#"
    //             >
    //               CONTACT
    //             </a>
    //           </li> */}
    //       </ul>
    //     </div>
    //     <div className="flex flex-row gap-4 pb-14 items-center pt-4">
    //       <IoIosMenu
    //         onClick={handleMenuClick}
    //         className={`flex md:hidden hover:text-tertiary-normal hover:scale-105 transition-colors duration-600 ${
    //           menu ? "block" : "hidden"
    //         }`}
    //         size={25}
    //       ></IoIosMenu>
    //       <IoMdClose
    //         onClick={handleCloseClick}
    //         size={25}
    //         className={`md:hidden hover:text-tertiary-normal hover:scale-105 transition-colors duration-600 ${
    //           close ? "block" : "hidden"
    //         }`}
    //       ></IoMdClose>
    //       <p className="font-normal pt-4 text-xs md:text-sm md:pl-20">
    //         <span className="text-slate-400">Account</span> <br></br>
    //         <a className="underline underline-offset-4 hover:text-third transition-colors duration-300 cursor-pointer">
    //           Login
    //         </a>{" "}
    //         or{" "}
    //         <a className="underline underline-offset-4 hover:text-third transition-colors ease-in duration-300 cursor-pointer">
    //           Create Account
    //         </a>
    //       </p>
    //     </div>
    //   </nav>
    // </header>
  );
}
