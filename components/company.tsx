import React from "react";
import { Leftphone } from "./icons/left-phone";
import { BgMac } from "./icons/bg-mac";
import CompanyLogo from "./company-logo";

const Company = () => {
    return (
        <div className=" flex flex-col items-center justify-center mt-32">
            <div className=" hidden relative md:flex items-center justify-center px-10  lg:px-20 xl:px-40">
                <BgMac />
            </div>
            {/* <div className=" absolute">
                <Leftphone />
            </div> */}
            <div> </div>
            <div className="bg-[#FBFBFB] w-full h-72">
                <div className=" text-center mt-2 md:mt-20 lg:mt-44">
                    <p className="  text-text px-4">These Awesome Companies already use and trust our service</p>
                    <CompanyLogo />
                </div>
            </div>
        </div>
    )
};

export default Company;
