import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col pt-16">
      <div className="flex flex-row items-center gap-32">
        <div className="bg-orange-500 flex flex-row gap-2 justify-end rounded-sm p-4 shadow-lg w-[450px] text-black">
          <img src="/assets/telephone.png" className="w-[40px] h-[40px]"></img>
          <p className="mr-8 font-bold text-sm">
            Get in touch <br></br>{" "}
            <span className="text-xl font-semibold">+880612002255</span>
          </p>
        </div>

        <span className="flex flex-row gap-4 text-sm font-bold">
          <img src="/assets/truck.png" className="w-[40px] h-[40px]"></img>
          <p>
            Free Shipping <br></br>{" "}
            <span className="text-xs text-slate-400 font-normal">
              For orders from $50
            </span>
          </p>
          <img src="/assets/dollar.png" className="w-[40px] h-[40px]"></img>
          <p>
            Satisifed or Refunded <br></br>{" "}
            <span className="text-xs text-slate-400 font-normal">
              Gauranteed Product Warranty
            </span>
          </p>
          <img src="/assets/heart.png" className="w-[40px] h-[40px]"></img>
          <p>
            100% Safety and Secure <br></br>{" "}
            <span className="text-xs text-slate-400 font-normal">
              Call us Anytime & Anywhere
            </span>
          </p>
        </span>
      </div>
      <div className="w-full bg-fourth flex flex-row  justify-center text-background-100 items-center gap-16 pb-16 pt-12">
        <div className="flex flex-col">
          <span className="flex flex-row gap-4 items-center">
            <img src="/assets/logo.png" className="w-[96px] h-[96px]"></img>
            <img src="/assets/logo2.png" className="w-[300px] h-[60px]"></img>
          </span>
          <p className="w-[280px] text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. .{" "}
          </p>
        </div>
        <div className="flex flex-col text-xs gap-2">
          <p className="text-sm font-semibold pb-2">Customer Service</p>
          <p>Testimonals</p>
          <p>Contact</p>
          <p>Location & Working Hours</p>
          <p>Our Garuntee</p>
          <p>Track Your Order</p>
          <p>Help Page</p>
        </div>
        <div className="flex flex-col text-xs gap-2">
          <p className="text-sm font-semibold pb-2">Quick Links</p>
          <p>Your Account</p>
          <p>Returns & Exchanges</p>
          <p>Return Center</p>
          <p>Purchase History</p>
          <p>Latest News Blog</p>
          <p>Shipping & Delivert</p>
        </div>
        <div className="flex flex-col text-xs gap-2">
          <p className="text-sm font-semibold pb-2">My Accounts</p>
          <p>My Account</p>
          <p>My Cart</p>
          <p>My Checkout</p>
          <p>Newsletter</p>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
}
