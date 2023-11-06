import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MobAcc from "./mobile-accord";

const MobileNav = () => {
    return (
        <div className=" flex border-t-2 border-[#F2F4F7] flex-col items-start justify-start mt-8 px-6 w-full">
            <div className=" flex flex-col  gap-y-6 cursor-pointer mt-3 text-[#4D6476] text-base w-full">

                <MobAcc />
            </div>
            <div className=" flex flex-col  items-center justify-center gap-y-2 mt-4 w-full py-6 px-4 ">
                <Button className=" w-full rounded-full h-[40px] bg-[#0063B0] text-white">Book a Demo</Button>
                <Button className="w-full rounded-full bg-[#FFFFFF] text-[#4D6476] h-[40px] border border-[#E4E4E4]">Try for Free</Button>
            </div>
        </div>
    );
};

export default MobileNav;