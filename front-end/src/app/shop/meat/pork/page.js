import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import ProductCard from "@/components/ProductCard";

export default async function Page() {
  const chops = await fetch(
    "http://localhost:3000/data/meat/pork/chops&tenderloins.json"
  );
  const chopsData = await chops.json();
  const limitedChopsData = chopsData.slice(0, 8);

  const ground = await fetch(
    "http://localhost:3000/data/meat/pork/ground&sausage.json"
  );
  const groundData = await ground.json();
  const limitedGroundData = groundData.slice(1, 8);

  const precut = await fetch(
    "http://localhost:3000/data/meat/pork/precut.json"
  );
  const precutData = await precut.json();

  const ribs = await fetch(
    "http://localhost:3000/data/meat/pork/ribsroasts&hams.json"
  );
  const ribsData = await ribs.json();
  const limitedRibsData = ribsData.slice(0, 8);

  const columns = 6;
  return (
    <div className="flex flex-col w-full">
      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Chops & Tenderloins</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedChopsData.map((item, index) => (
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
      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Ground & Sausage</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedGroundData.map((item, index) => (
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
      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Ribs</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedRibsData.map((item, index) => (
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
      <section className="w-full pt-8">
        <h1 className="font-medium text-2xl px-16">Precut</h1>
        <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
          {precutData.map((item, index) => (
            <ProductCard
              key={index}
              item={item}
              index={index}
              columns={columns}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
