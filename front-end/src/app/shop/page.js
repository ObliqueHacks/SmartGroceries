import Mainnavbar from "@/components/Mainnavbar";
import React from "react";
import CategoriesBar from "@/components/CategoriesBar";
import { Separator } from "@radix-ui/react-separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const res = await fetch("http://localhost:3000/data/fruits/apples.json");
  const data = await res.json();
  const columns = 6;
  return (
    <div className="flex flex-col pt-8 bg-background-100 gap-4 w-full">
      <div className="ml-16">
        <section>
          <h1 className="font-semibold text-2xl">Everyday needs</h1>
          <Carousel opts={{ align: "start" }} className="max-w-[88%] ml-6">
            <CarouselContent className="ml-2 gap-1">
              {data.map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  index={index}
                  className="w-[90%]"
                />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="grid grid-cols-[auto_600px] w-full pt-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">Popular right now</h1>
            <p className="text-sm text-slate-500">
              Check out these hot items that everyone is raving about, from
              everyday customer favorites to unique items you won't find
              anywhere else!
            </p>
            <Carousel
              opts={{ align: "start" }}
              className="max-w-[800px] w-full "
            >
              <CarouselContent className="gap-x-8 pl-2">
                {data.map((item, index) => (
                  <ProductCard
                    key={index}
                    item={item}
                    index={index}
                    className="w-[90%]"
                  />
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/shopimage1.jpg" className="h-[400px] pr-6"></img>
          </div>
        </section>

        <section className="grid grid-cols-[auto_600px] w-full pt-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">The best local eats</h1>
            <p className="text-sm text-slate-500">
              We're proud to partner with tons of local farms and artisans who
              bring us an array of incredible food all year round!
            </p>
            <Carousel
              opts={{ align: "start" }}
              className="max-w-[800px] w-full "
            >
              <CarouselContent className="gap-x-8 pl-2">
                {data.map((item, index) => (
                  <ProductCard
                    key={index}
                    item={item}
                    index={index}
                    className="w-[90%]"
                  />
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/shopimage2.jpg" className="h-[400px] pr-6"></img>
          </div>
        </section>

        <section className="grid grid-cols-[auto_900px] w-full pt-14 items-center pb-20">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-4xl">Skip the delivery fees</h1>
            <p className="text-sm text-slate-500">
              New customers get DeliveryPass perks on us for 60 days, including
              unlimited free delivery, timeslot reservations, and exclusive
              savings. Sign up now
            </p>
            <Button
              variant="link"
              className="text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[50px] h-[15px]"
            >
              Sign Up
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/shopimage3.jpg" className="h-[400px] pr-6"></img>
          </div>
        </section>
      </div>
    </div>
  );
}
