import React from "react";
import EasyCard from "./easy-card";

const SetUp = () => {
    return (
        <div className=" mt-20 flex flex-col items-center justify-center w-full lg:h-[461px] bg-[#FBFBFB] py-5">
            <p className=" lg:text-[43px] text-2xl font-bold text-black text-center mb-10">Its Super Easy to Set Up.</p>
            <EasyCard />
        </div>
    );
};

export default SetUp;