"use client";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi2";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

import { useEffect } from "react";

// Inside your component

const ProductCard = ({ item, index }) => {
  const { items, addItem, frequencyMap } = useCart();
  const { toast } = useToast();

  return (
    <div className="relative w-[230px] h-[270px] flex flex-col items-center hover:underline underline-offset-4 p-2">
      <img src={item.Image} className="w-[170px] h-[150px]" alt={item.Name} />
      <p className="pt-2 max-w-[170px] truncate  ">{item.Name}</p>
      <span className="flex flex-row justify-between mx-auto w-[92%] mt-auto font-medium">
        <p className="text-xs">${item.Price}</p>
        <div
          onClick={() => {
            addItem(item);
            toast({ title: "Added to cart" });
            console.log("added item");
            console.log(frequencyMap);
          }}
          className="w-[25px] h-[25px] text-third hover:text-background-100 bg-background-100 border-third border-2 rounded-full cursor-pointer hover:bg-third transition-colors ease-in duration-100 flex items-center justify-center"
        >
          <HiOutlinePlus size={17} />
        </div>
      </span>
      {/* Display the separator only if the current item is not the last item in its row */}
      {/* {(index + 1) % 6 !== 0 && (
        <Separator
          className="absolute left-[calc(100%)] mx-auto p-[1px]"
          orientation="vertical"
        />
      )} */}
    </div>
  );
};

export default ProductCard;
