import React from "react";
import CompanyLogo from "./company-logo";
import Image from "next/image";


const Company = () => {
    return (
        <div className="w-full md:flex flex-col items-center  justify-center ">

            {/* <div className="relative  lg:w-[1200px] lg:h-[700px] py-0 mt-28  pl-20">
                <Image alt="hero" src="/Hero.png" className=" ml-16 object-center flex items-center justify-center" fill />


            </div> */}

            <div className="relative  py-0 md:mt-28 mt-20 ml-10 ">
                <Image alt="hero" src="/home/Hero.png" width={1000} height={800} className="" />

            </div>



            <div className="bg-[#FBFBFB] w-full h-[323px]">
                <div className=" text-center mt-2 md:mt-20  lg:mt-36  space-y-4">
                    <p className="  text-text px-4 text-base ">Trusted by our Partners</p>
                    <CompanyLogo />
                </div>
            </div>
        </div>
    )
};

export default Company;