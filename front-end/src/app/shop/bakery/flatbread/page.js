
import React from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/";

import ProductCard from "@/components/ProductCard";

export default async function Page() {
  const res = await fetch(`${baseUrl}/data/bakery/flatbread.json`);
  const data = await res.json();
  const columns = 6;
  return (
    <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
      {data.map((item, index) => (
        <ProductCard key={index} item={item} index={index} columns={columns} />
      ))}
    </div>
  );
}
