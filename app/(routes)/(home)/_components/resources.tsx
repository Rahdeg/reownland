import React from "react";
import Image from "next/image";
import BlogCard from "./blog-card";
import { Button } from "../../../../components/ui/button";

const Resources = () => {
    return (
        <div className="flex flex-col lg:flex-row  items-start justify-center  gap-x-16 lg:mb-72 px-5  mt-6 xl:px-20  mb-20">
            <div className=" flex flex-col items-start justify-center space-y-8 ">
                {/* <Button variant="outline" size='sm' className="   text-black border-4 shadow-sm rounded-2xl w-[124px] h-[23px] py-[2px] px-[10px] ">
                    RESOURCES
                </Button> */}
                <h1 className=" text-2xl font-bold text-black ml-3">Latest From Our Blog</h1>
                <p className=" text-sm text-text ml-3">
                    We have partnered with businesses on the same<br />
                    mission as ours to create resources you need to <br />
                    get started.
                </p>
                <Button variant="blueb" size="lg" className=" rounded-full text-white  ">
                    Visit Blog
                </Button>
                <div className=" pt-6 ">
                    <div className="relative">
                        <Image alt="img" src='/home/cp.png' width={500} height={300} className=" rounded-2xl" />
                    </div>
                    <p className=" text-[#0063B0] my-6">olivia Rhiye . 20 Jan 2022</p>
                    <h1 className=" mb-3 text-xl text-black font-bold">Auto Repair 101</h1>
                    <p className=" text-text text-xs"> How do you create compelling presentation that wow your colleagues and impress your managers</p>
                </div>
            </div>
            <div className=" mt-0 ">
                <BlogCard />
            </div>

        </div>
    );
};

export default Resources;