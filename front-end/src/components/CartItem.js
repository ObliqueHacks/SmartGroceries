import React from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { HiOutlineMinus } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const CartItem = ({ item }) => {
  const { removeItem, addItem, decreaseItem, frequencyMap } = useCart();
  const { toast } = useToast();
  const handleDecrease = () => {
    if (frequencyMap[item.Name] === 1) {
      toast({
        variant: "destructive",
        title: "Minimum is 1",
      });
    } else {
      decreaseItem(item);
    }
  };

  return (
    <React.Fragment>
      <img src={item.Image} className="w-[80px] h-[80px]" />
      <div className="flex flex-col justify-center">
        <p className="font-semibold text-sm">{item.Name}</p>
        <div className="pt-[30px] flex flex-row justify-between items-center">
          <p className="text-slate-400 text-xs">{item.Price}</p>
          <span className="flex flex-row items-center gap-4">
            <div className="w-[35px] h-[35px] border-[1px] border-slate-400 rounded-full flex flex-col items-center justify-center hover:border-slate-600 transition-colors ease-in duration-100 hover:text-third cursor-pointer">
              <RiDeleteBin6Line size={16} onClick={() => removeItem(item)} />
            </div>
            <div className="h-[35px] w-[80px] flex flex-row border-[1px] border-slate-400 rounded-full items-center justify-center gap-4 hover:border-slate-600 transition-colors ease-in duration-100 cursor-pointer">
              <HiOutlineMinus
                className="hover:text-third transition-colors ease-in duration-100"
                size={15}
                onClick={() => handleDecrease()}
              />
              <p>{frequencyMap[item.Name] || 0}</p>
              <HiOutlinePlus
                className="hover:text-third transition-colors ease-in duration-100"
                size={15}
                onClick={() => addItem(item)}
              />
            </div>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CartItem;
