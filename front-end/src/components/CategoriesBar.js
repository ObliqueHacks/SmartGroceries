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
              <li className="hover:underline">
                <Link href="/shop/fruit/apples">Apples</Link>
              </li>
              <li className="hover:underline ">
                <Link href="/shop/fruit/avacadoes">Avacadoes</Link>
              </li>
              <li className="hover:underline ">
                <Link href="/shop/fruit/bananas">Bananas</Link>
              </li>
              <li className="hover:underline ">
                <Link href="/shop/fruit/berries">Berries</Link>
              </li>
              <li className="hover:underline ">
                <Link href="/shop/fruit/citrus">Citrus</Link>
              </li>
              <li className="hover:underline ">
                <Link href="/shop/fruit/grapes">Grapes</Link>
              </li>
              <li className="hover:underline ">
                <Link href="/shop/fruit/melons">Melons</Link>
              </li>
              <li className="hover:underline ">
                <Link href="/shop/fruit/pears">Pears</Link>
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
              <li className="hover:underline">
                <Link href="/shop/vegetables/asparagus">Asparagus</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/vegetables/beans&peas">Beans & Peas</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/vegetables/brussels&cabbage">
                  Brussels & Cabbage
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/vegetables/carrots">Carrots</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/vegetables/cauliflower&broc">
                  Cauliflower
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/vegetables/celery">Celery</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/vegetables/corn">Corn</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/vegetables/cucumber">Cucumber</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/vegetables/eggplant">Eggplant</Link>
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
              <li className="hover:underline">
                <Link href="/shop/meat/beef">Beef</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/meat/lamb">Lamb</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/meat/meatalternatives">
                  Meat Alternatives
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/meat/pork">Pork</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/meat/poultry">Poultry</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/meat/veal">Veal</Link>
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
              <li className="hover:underline">
                <Link href="/shop/seafood/crabs">Crabs</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/seafood/fishfillets">Fish Fillets</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/seafood/fishwhole">Fish Whole</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/seafood/mussels&clams">Mussels & Clams</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/seafood/oysters">Oysters</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/seafood/salmon">Salmon</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/seafood/shrimp">Shrimp</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/seafood/speciality">Speciality</Link>
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
              <li className="hover:underline">
                <Link href="/shop/diary/butter">Butter</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/diary/cheese">Cheese</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/diary/condiments">Condiments</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/diary/eggs">Eggs</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/diary/hummus">Hummus</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/diary/milk">Milk</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/diary/pasta">Pasta</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/diary/pudding">Pudding</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/diary/sourcream">Sour Cream</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/diary/yogurt">Yogurt</Link>
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
              <li className="hover:underline">
                <Link href="/shop/bakery/baguettes">Baguettes</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/bakery/bagels">Bagels</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/bakery/buns">Buns</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/bakery/Challah&Broiche">
                  Broiche & Challah
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/bakery/flatbread">Flat Bread</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/bakery/muffins">Muffins</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop/bakery/waffles">Waffles</Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
