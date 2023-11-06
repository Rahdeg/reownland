import React from "react";
import WorkFlow from "./work-flow";

const BuildAuto = () => {
    return (
        <div className="w-full md:flex flex-col items-center justify-center px-10  lg:px-20  gap-6 mt-32">

            <h1 className=" text-black font-bold text-2xl  md:text-4xl text-center mb-5">Build for <span className=" text-[#0063B0]">Auto Repairs Hubs</span> of any Size </h1>



            <div className=" text-sm md:text-md">
                <p className="  text-text text-base text-center lg:w-[758px] lg:h-[50px]">Improve customer engagement through personalized mobile app interactions, including push notifications and full vehicle history access.   </p>

            </div>
            <WorkFlow />
        </div>
    );
};

export default BuildAuto;