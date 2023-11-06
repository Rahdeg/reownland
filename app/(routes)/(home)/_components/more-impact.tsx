import React from "react";
import Icons from "../../../../components/icons/icons-svg";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";


const MoreImpact = () => {
    return (
        <div className=" flex flex-col items-center justify-center px-10 mt-48 xl:px-20  mb-10">
            <div className=" mb-10 space-y-3">
                <h1 className=" lg:text-4xl text-2xl text-center font-bold w-full   lg:w-[696px]  ">More Impactful Features for you  </h1>
            </div>

            <div className="flex flex-col items-center justify-center lg:flex-row mt-10 w-full gap-y-4 lg:gap-x-16 " >
                <div className="relative w-[349px] h-[226px] bg-[#F0F5FB] rounded-2xl md:hidden">
                    <Image
                        src="/home/FIRST.gif"
                        alt="first"
                        fill
                        className=" object-contain py-4"
                    />
                </div>
                <div className=" hidden md:flex relative w-[545px]  lg:p-0 h-[490px] border rounded-3xl bg-[#F0F5FB] items-center justify-center">

                    <Image
                        src="/home/FIRST.gif"
                        alt="first"
                        width={400}
                        height={300}
                        className=" object-cover  rounded-3xl -right-8 absolute"
                    />
                </div>

                <div className=" flex flex-col items-start justify-center space-y-4  lg:w-[545px] lg:h-[269px] w-full">
                    <Button variant='outline' size='lg' className="rounded-2xl mb-5 border-4 border-[#F0F5FB]  text-black w-[179px] h-[23px] py-[2px] px-[10px]">
                        VEHICLE HISTORY
                    </Button>
                    <h1 className=" text-xl font-bold text-black">Reliable Vehicle History</h1>
                    <p className="  text-base text-text">
                        Build customer loyalty with a comprehensive vehicle history that unlocks amazing benefits for your customers.
                    </p>
                    <Button variant="blueb" size="lg" className=" shadow-sm  rounded-full  text-white w-[186px] h-[50px] py-[10px] px-[18px]">
                        Explore Benefits
                    </Button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center  lg:flex-row mt-10 w-full xl:gap-x-16 lg:gap-x-8 " >
                <div className=" md:hidden">
                    {/* {Icons.Content} */}
                </div>
                <div className=" flex flex-col items-start justify-center gap-[22px]  lg:w-[545px] lg:h-[287px]">
                    <Button variant='outline' size='lg' className=" border-4 border-[#F0F5FB] rounded-2xl py-[4px] shadow-sm px-[4px] w-[133px] h-[31px]">
                        CUSTOMER APP
                    </Button>
                    <h1 className=" text-xl font-bold text-black w-full ">Shop Locator Feature  </h1>
                    <p className=" text-base text-text w-full mt-4 lg:mt-0">
                        Customers can locate all your workshop branches on the app to easily compare distance and book appointments.
                    </p>
                    <Button variant="blueb" className=" shadow-sm  rounded-full text-white w-[186px] h-[50px] py-[10px] px-[18px]">
                        More Features
                    </Button>
                </div>
                <div className="hidden lg:flex xl:w-[545px] lg:h-[490px] lg:w-[450px] border rounded-3xl bg-[#F0F5FB] w-[300px] items-center justify-center ">
                    {Icons.Content}
                </div>

            </div>

            <div className="hidden lg:flex xl:hidden flex-col items-center justify-center lg:flex-row mt-10 w-full lg:gap-x-12 " >

                <div className=" hidden md:flex relative w-[545px]  lg:p-0 h-[490px] border rounded-3xl bg-[#F0F5FB] items-center justify-center">
                    {/* {Icons.Card} */}
                    <Image
                        src="/home/morecard.png"
                        alt="first"
                        width={650}
                        height={500}
                        className=" object-cover  rounded-3xl -right-20 absolute"
                    />
                </div>

                <div className=" flex flex-col items-start justify-center  gap-y-3 lg:w-[545px] lg:h-[269px] w-full">
                    <Button variant='outline' size='lg' className="rounded-2xl mb-5 border-4 border-[#F0F5FB]  text-black w-[179px] h-[23px] py-[2px] px-[10px]">
                        COMMUNITY PERKS
                    </Button>
                    <h1 className=" text-xl font-bold text-black">Boost Your Customer Base </h1>
                    <p className="  text-base text-text">
                        Acquire more customers from our vehicle owners’ community.
                    </p>
                    <Button variant="blueb" size="lg" className=" shadow-sm  rounded-full  text-white w-[186px] h-[50px] py-[10px] px-[18px]">
                        Community Plans
                    </Button>
                </div>
            </div>

            <div className=" lg:hidden xl:flex  flex-col items-center justify-center xl:flex-row mt-10 w-full  xl:gap-x-28" >
                <div className="relative w-[349px] h-[226px] bg-[#F0F5FB] rounded-2xl md:hidden">
                    <Image
                        src="/home/morecard.png"
                        alt="first"
                        fill
                        className=" object-contain py-4"
                    />
                </div>
                <div className=" hidden md:flex relative w-[545px]  lg:p-0 h-[490px] border rounded-3xl bg-[#F0F5FB] items-center justify-center">
                    {/* {Icons.Card} */}
                    <Image
                        src="/home/morecard.png"
                        alt="first"
                        width={800}
                        height={650}
                        className=" object-contain rounded-3xl -right-24 bottom-4 absolute"
                    />
                </div>
                <div className=" flex flex-col items-start justify-center space-y-4 xl:gap-[22px] xl:w-[503px] xl:h-[269px] w-full lg:mt-0 mt-10">
                    <Button variant='outline' size='lg' className=" border-4 border-[#F0F5FB] shadow-sm rounded-full w-[179px] h-[23px] px-[10px] py-[2px]">
                        COMMUNITY PERKS
                    </Button>
                    <h1 className=" text-2xl font-bold text-black ">Boost Your Customer Base</h1>
                    <p className=" text-base text-text ">
                        Acquire more customers from our vehicle owners’ community.
                    </p>
                    <Button variant="blueb" size="lg" className=" shadow-sm  rounded-full text-white w-[186px] h-[50px] py-[10px] px-[18px]">
                        Community Plans
                    </Button>

                </div>


            </div>
        </div>
    );
};

export default MoreImpact;