"use client"
import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const Hero = () => {

    return (
        <div className="px-10 mt-3 md:mt-28 lg:mt-52    flex flex-col items-center justify-center">

            <div className=" hidden lg:flex flex-col  gap-y-2">
                <h1 className=" text-5xl  font-bold text-center text-black">3-in-1 Repair management Software </h1>
                <h1 className="text-5xl  font-bold text-center mt-2">Built with Your Growth in Mind</h1>
            </div>
            <div className=" flex flex-col lg:hidden mt-28 items-center justify-center text-[#0063B0] ">
                {/* <Button variant='outline' className=" my-3 rounded-full w-1/2">
                    Welcome to Reown
                </Button> */}
                <h1 className=" text-2xl md:text-3xl font-bold text-center md:px-20 text-black">3-in-1 Repair management Software Built with Your Growth in Mind</h1>
            </div>
            <div className="  text-sm md:text-xl space-y-2    mt-8 text-[#4D6476] text-center ">
                <div
                    className="body-text text-center flex flex-col px-10 md:px-28"
                >

                    <p>
                        Save operational costs, build customer loyalty and expands your
                    </p>
                    <p>
                        Auto-repair business from 1 branch to more with Reown.
                    </p>



                </div>
            </div>
            <div className="flex space-x-2 items-center justify-center mt-8 text-text">
                <Button className=" text-white text-base shadow-md px-[10px] py-[18px] rounded-full h-[50px] w-[195px]" variant='blueb'>
                    <PlayCircle className=" w-6 h-6 mr-2" />
                    Book a Demo
                </Button>
                <Button className="text-base px-[10px] py-[18px]  border shadow-md border-[#0063B0] h-[50px] w-[195px] rounded-full text-[#0063B0]" variant='outline'> Try for Free</Button>
            </div>
        </div>
    )
};

export default Hero;