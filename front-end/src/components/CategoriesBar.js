import React from "react";
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
import { GiFruitBowl } from "react-icons/gi";
import { GiBroccoli } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";
import { GiSalmon } from "react-icons/gi";
import { GiMilkCarton } from "react-icons/gi";
import { MdOutlineBakeryDining } from "react-icons/md";

export default function CategoriesBar() {
  return (
    <NavigationMenu className="list-none flex px-8">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-[70px] w-[100px] ">
            <span className="flex flex-col items-center">
              <GiFruitBowl size={25}></GiFruitBowl>
              <span className="font-light text-sm">Fruit</span>
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-3 w-[800px] gap-4 p-6 gap-x-16 ">
              <li className="">
                <NavigationMenuLink href="/shop/fruit/apple">
                  Apples
                </NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Avacadoes</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Bananas</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Berries</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Citrus</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Grapes</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Melons</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Pears</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-[70px] w-[130px]">
            <span className="flex flex-col items-center">
              <GiBroccoli size={25}></GiBroccoli>
              <span className="font-light text-sm">Vegetables</span>
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-3 w-[800px] gap-4 p-6 gap-x-16 text-sm">
              <li className="">
                <NavigationMenuLink>Asparagus</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Beans & Peas</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Brussels & Cabbage</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Carrots</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Cauliflower</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Celery</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Corn</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Cucumber</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Eggplant</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-[70px] w-[130px]">
            <span className="flex flex-col items-center">
              <GiChickenOven size={25}></GiChickenOven>
              <span className="font-light text-sm">Meat</span>
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-3 w-[800px] gap-4 p-6 gap-x-16 text-sm">
              <li className="">
                <NavigationMenuLink>Beef</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Lamb</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Meat Alternatives</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Pork</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Poultry</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Veal</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-[70px] w-[130px]">
            <span className="flex flex-col items-center">
              <GiSalmon size={25}></GiSalmon>
              <span className="font-light text-sm">Seafood</span>
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-3 w-[800px] gap-4 p-6 gap-x-16 text-sm">
              <li className="">
                <NavigationMenuLink>Crabs</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Fish Fillets</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Fish Whole</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Mussels & Clams</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Oysters</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Salmon</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Shrimp</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Speciality</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-[70px] w-[130px]">
            <span className="flex flex-col items-center">
              <GiMilkCarton size={25}></GiMilkCarton>
              <span className="font-light text-sm">Diary</span>
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-3 w-[800px] gap-4 p-6 gap-x-16 text-sm">
              <li className="">
                <NavigationMenuLink>Butter</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Cheese</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Condiments</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Eggs</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Hummus</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Milk</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Pasta</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Pudding</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Sour Cream</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Yogurt</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-[70px] w-[130px]">
            <span className="flex flex-col items-center">
              <MdOutlineBakeryDining size={25}></MdOutlineBakeryDining>
              <span className="font-light text-sm">Bakery</span>
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-3 w-[800px] gap-4 p-6 gap-x-16 text-sm">
              <li className="">
                <NavigationMenuLink>Baguttes</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Buns</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Broiche & Challah</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Flat Bread</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Muffins</NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink>Waffles</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
