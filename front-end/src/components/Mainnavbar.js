"use client";

import React from "react";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import { useCart } from "@/hooks/useCart";

import { GiShoppingBag } from "react-icons/gi";

import { Separator } from "@/components/ui/separator";
import CartItem from "./CartItem";
import { Badge } from "./ui/badge";

export default function Mainnavbar() {
  const { items, clearCart, totalAmount } = useCart();

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
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            className={navigationMenuTriggerStyle()}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/shop"
            className={navigationMenuTriggerStyle()}
          >
            Shop
          </NavigationMenuLink>
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
        <span className="mb-4 flex flex-row gap-4 items-center">
          <p className="font-normal pt-4 text-xs md:text-sm">
            <span className="text-slate-400">Login</span> <br></br>
            <Dialog className="">
              <DialogTrigger asChild>
                <a className="underline underline-offset-4 hover:text-third transition-colors duration-300 cursor-pointer">
                  Login
                </a>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] h-[370px]">
                <DialogHeader>
                  <DialogTitle className="flex flex-row items-center">
                    <img
                      src="/assets/logo.png"
                      className="w-[60px] h-[80px]"
                    ></img>
                    <span>Login</span>
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="email"
                      placeholder="Enter your email or username"
                      className="col-span-3 focus-visible:ring-transparent hover:border-third focus:border-third transition-colors ease-in duration-100 "
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter a password"
                      className="col-span-3 focus-visible:ring-transparent hover:border-third focus:border-third transition-colors ease-in duration-100"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-primary">
                    Login
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>{" "}
            or{" "}
            <Dialog className="">
              <DialogTrigger asChild>
                <a className="underline underline-offset-4 hover:text-third transition-colors ease-in duration-300 cursor-pointer">
                  Create Account
                </a>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] h-[370px]">
                <DialogHeader>
                  <DialogTitle className="flex flex-row items-center">
                    <img
                      src="/assets/logo.png"
                      className="w-[60px] h-[80px]"
                    ></img>
                    <span>Create Account</span>
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="example@hotmail.com"
                      className="col-span-3 focus-visible:ring-transparent border-2  hover:border-third focus:border-third transition-colors ease-in duration-100"
                      type="email"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      placeholder="Enter your display name"
                      className="col-span-3 focus-visible:ring-transparent hover:border-third focus:border-third transition-colors ease-in duration-100"
                      type="username"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter a password"
                      className="col-span-3 focus-visible:ring-transparent hover:border-third focus:border-third transition-colors ease-in duration-100"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-primary">
                    Create
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </p>
          <Sheet>
            <SheetTrigger asChild>
              <div className="relative">
                <Badge
                  size={5}
                  className="w-[10px] scale-[75%] text-[13px] bg-third flex items-center justify-center absolute bottom-0 left-0 transform -translate-x-[25%] translate-y-[55%] hover:bg-third"
                >
                  {items.length}
                </Badge>
                <GiShoppingBag
                  size={25}
                  className="hover:text-third transition-all ease-in duration-200 cursor-pointer"
                />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-3xl">Your Bag</SheetTitle>
              </SheetHeader>
              {items && items.length > 0 ? (
                <div className="overflow-y-auto max-h-[500px] w-[107%]">
                  <div className="grid grid-cols-[100px_auto] pt-10 items-center gap-y-10 pr-4">
                    {items.map((item) => (
                      <CartItem item={item} />
                    ))}
                  </div>
                  <Separator className="mt-10 mb-4 w-[95%]"></Separator>
                  <div className="grid grid-cols-[auto_80px] w-[95%]">
                    <div className="flex flex-col">
                      <p className="text-xs text-slate-400 underline hover:text-third transition-colors ease-in duration-100 cursor-pointer">
                        Estimated Prices, Taxes, Deposits, and fees
                      </p>
                      <br />
                      <p className="text-xs text-slate-400 underline hover:text-third transition-colors ease-in duration-100 cursor-pointer"></p>
                    </div>
                    <p
                      className="text-sm hover:text-third transition-colors ease-in duration-100 cursor-pointer"
                      onClick={() => clearCart()}
                    >
                      Empty Bag
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <p className="text-4xl font-semibold">Your bag is empty</p>
                  <p className="text-sm font-semibold">
                    Let's find something for you to enjoy
                  </p>
                </div>
              )}
              {items && (
                <SheetFooter>
                  <div className="w-full flex flex-col items-center mt-4 gap-4">
                    <p className=" text-slate-400 text-sm">
                      Subtotal (before tax){" "}
                      <span className="font-bold text-black text-lg">
                        ${totalAmount}
                      </span>
                    </p>
                    <Button className="w-[95%] bg-primary">Check Out</Button>
                  </div>
                </SheetFooter>
              )}
            </SheetContent>
          </Sheet>
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
