import React from "react";
import Mainnavbar from "@/components/Mainnavbar";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="flex bg-background-500 flex-col">
      {/* Services Section  */}
      <div className="flex flex-col text-3xl items-center pt-10 pb-16 w-full gap-2">
        <p className="text-lg text-primary">Our Services</p>
        <p className="font-bold">What we have to offer</p>
        <div className="flex flex-row gap-16 pt-4">
          <div className="flex flex-col shadow-sm rounded-md w-[200px] items-center bg-green-100 text-center p-2">
            <img
              src="/assets/freesecureshipping.png"
              className="w-[60px] h-[60px] mt-8 mb-2"
            ></img>
            <p className="text-lg font-bold">Free & Secure Shipping</p>
            <p className="text-slate-600 text-sm pt-4">
              We will provide a full process to enable as this is just a sample
              website
            </p>
          </div>
          <div className="flex flex-col shadow-sm rounded-md w-[200px] items-center bg-green-100 text-center p-2">
            <img
              src="/assets/return.png"
              className="w-[60px] h-[60px] mt-8 mb-2"
            ></img>
            <p className="text-lg font-bold">Return Policy</p>
            <p className="text-slate-600 text-sm pt-4">
              We will provide a full process to enable as this is just a sample
              website
            </p>
          </div>
          <div className="flex flex-col shadow-sm rounded-md w-[200px] items-center bg-green-100 text-center p-2">
            <img
              src="/assets/securecheckout.png"
              className="w-[60px] h-[60px] mt-8 mb-2"
            ></img>
            <p className="text-lg font-bold">Secure Payment</p>
            <p className="text-slate-600 text-sm pt-4">
              We will provide a full process to enable as this is just a sample
              website
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-3xl items-center pt-10 pb-16 w-full gap-2 ">
        <p className="text-lg text-primary">How are we different?</p>
        <p className="font-bold">Set up your own Nutrient Profile!</p>
        <div className="flex flex-row gap-20 pt-8">
          <div className="bg-nutrient-profile-bg bg-cover bg-center w-[550px] h-[550px] rounded-md shadow-sm flex justify-center items-center">
            <img
              src="/assets/profile.png"
              className="w-[190px] h-[190px]"
            ></img>
          </div>
          <div className="flex flex-col">
            <p className="text-lg text-slate-600 texx w-[560px]">
              At Nature Crunch we also provide a way to reach your health goals.{" "}
              <br></br> <br></br>Set up your own goals/required intake which can
              assist in finding the groceries you need for every purchase.
            </p>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-4 w-[265px] mt-8 rounded-lg shadow-lg bg-background-100 items-center p-4">
                <img
                  src="/assets/goals.png"
                  className="w-[48px] h-[48px]"
                ></img>
                <div className="flex flex-col text-sm">
                  <p className="font-semibold">Set your goals</p>
                  <p className="text-xs text-slate-400">
                    Set whatever goals you want to meet your daily health
                    requirments. Again this text needs to be changed.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 w-[265px] mt-8 rounded-lg shadow-lg bg-background-100 items-center p-4">
                <img
                  src="/assets/trackprogress.png"
                  className="w-[48px] h-[48px]"
                ></img>
                <div className="flex flex-col text-sm">
                  <p className="font-semibold">Track your progress</p>
                  <p className="text-xs text-slate-400">
                    Set whatever goals you want to meet your daily health
                    requirments. Again this text needs to be changed.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-4 w-[265px] mt-8 rounded-lg shadow-lg bg-background-100 items-center p-4">
                <img
                  src="/assets/reccs.png"
                  className="w-[48px] h-[48px]"
                ></img>
                <div className="flex flex-col text-sm">
                  <p className="font-semibold">
                    Reccomendations based on your goals
                  </p>
                  <p className="text-xs text-slate-400">
                    Set whatever goals you want to meet your daily health
                    requirments. Again this text needs to be changed.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 w-[265px] mt-8 rounded-lg shadow-lg bg-background-100 items-center p-4">
                <img
                  src="/assets/modifyprofile.png"
                  className="w-[48px] h-[48px]"
                ></img>
                <div className="flex flex-col text-sm">
                  <p className="font-semibold">Change your goals anytime</p>
                  <p className="text-xs text-slate-400">
                    Set whatever goals you want to meet your daily health
                    requirments. Again this text needs to be changed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
