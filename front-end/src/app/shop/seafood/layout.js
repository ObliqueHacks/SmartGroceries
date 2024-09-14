"use client";
import Mainnavbar from "@/components/Mainnavbar";
import CategoriesBar from "@/components/CategoriesBar";
import { usePathname } from "next/navigation";

export default function SeafoodLayout({
  children, // will be a page or nested layout
}) {
  const pathname = usePathname(); // Get the current path
  const seafoodName = pathname.split("/").pop(); // Extract the fruit name from the path

  // Capitalize the first letter of the fruit name
  const formattedseafoodName =
    seafoodName.charAt(0).toUpperCase() + seafoodName.slice(1);
  return (
    <section className="flex flex-col bg-background-100 w-full">
      {/* Include shared UI here e.g. a header or sidebar */}
      <h1 className="ml-16 mt-12 font-semibold text-3xl">
        Seafood / <span className="text-third">{formattedseafoodName}</span>
      </h1>
      {children}
    </section>
  );
}
