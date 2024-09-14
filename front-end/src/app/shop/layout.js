
import CategoriesBar from "@/components/CategoriesBar";
export default function ShopLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex flex-col bg-background-100 w-full">
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex flex-col items-center justify-center">
        {" "}
        <CategoriesBar></CategoriesBar>
      </div>

      {children}
    </section>
  );
}
