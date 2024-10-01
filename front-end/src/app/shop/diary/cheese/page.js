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
  const block = await fetch(
    "http://localhost:3000/data/diary/cheese/block.json"
  );
  const blockData = await block.json();
  const limitedBlockData = blockData.slice(0, 8);

  const cream = await fetch(
    "http://localhost:3000/data/diary/cheese/cream.json"
  );
  const creamData = await cream.json();
  const limitedCreamData = creamData.slice(0, 8);

  const shredded = await fetch(
    "http://localhost:3000/data/diary/cheese/shredded.json"
  );
  const shreddedData = await shredded.json();
  const limitedShreddedData = shreddedData.slice(0, 8);

  const sliced = await fetch(
    "http://localhost:3000/data/diary/cheese/sliced.json"
  );
  const slicedData = await sliced.json();
  const limitedSlicedData = slicedData.slice(0, 8);

  const columns = 6;
  return (
    <div className="flex flex-col w-full">
      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Block</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedBlockData.map((item, index) => (
              <ProductCard key={index} item={item} index={index} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Sliced</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedSlicedData.map((item, index) => (
              <ProductCard key={index} item={item} index={index} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Shredded</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedShreddedData.map((item, index) => (
              <ProductCard key={index} item={item} index={index} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Cream</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedCreamData.map((item, index) => (
              <ProductCard key={index} item={item} index={index} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}