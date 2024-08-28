import Image from "next/image";
import Mainnavbar from "@/components/Mainnavbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-screen bg-background-100 flex-col">
      <Mainnavbar></Mainnavbar>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-start pt-10 w-full md:w-[50%] pl-0 md:pl-20">
          <Badge className="bg-red-100 opacity-90 w-[220px]">
            <img src="/assets/groceryiconforbadge.png" className="w-8"></img>
            <span className="text-primary text-xs">
              Grocery Delivery Service
            </span>
          </Badge>
          <p className="text-3xl md:text-6xl font-semibold">
            Make healthy life with <span className="text-third">fresh</span>{" "}
            grocery
          </p>
          <p className="text-md font-semibold pt-2 w-[90%] ">
            Get the best quality and most delicious grocery food in the world,
            you can get them all use our website
          </p>
          <Button className="bg-primary shadow-custom-medium-red w-32">
            Shop Now
          </Button>
          <p className="font-bold pt-10">You can also download now on</p>
          <div className="flex flex-row gap-4">
            <img
              src="/assets/playestore.png"
              className="w-32 md:w-52 cursor-pointer"
            ></img>
            <img
              src="/assets/appstore.png"
              className="w-32 md:w-52 cursor-pointer"
            ></img>
          </div>
        </div>
        <div className="flex flex-col bg-landing-photo bg-cover bg-center w-full md:w-[50%] h-[590px]">
          <div className="bg-white/60 flex flex-col justify-center items-center w-[110px] rounded-xl text-xs relative top-[10%] left-[10%] md:left-[0%] md:top-[50%] shadow-lg border border-gray-200 pb-2">
            <img src="/assets/fresh.png" className="w-12"></img>
            <p className="font-bold">100% Fresh</p>
            <p className="text-slate-500">Quality maintain</p>
          </div>
          <div className="bg-white/60 flex flex-row items-center w-[210px] rounded-xl text-xs relative top-[60%] left-[5%] md:right-[10%] md:left-[0%] shadow-lg border border-gray-200 p-2">
            <img src="/assets/location.png" className="w-8"></img>
            <p className="font-bold">
              Fast Delivery <br></br>{" "}
              <span className="font-normal">Free of cost of any delivery</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
