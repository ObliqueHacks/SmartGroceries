import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"], // Specify the character subsets you need
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify the font weights you need
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
