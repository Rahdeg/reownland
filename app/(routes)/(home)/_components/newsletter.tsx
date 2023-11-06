import React from "react";


import { Apple, AppleIcon, PlayIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";


const Newsletter = () => {
    return (

        <div className="  mt-40 xl:px-40 lg:px-10   ">

            <Card className=" md:hidden   bg-[#E6EFF7]  rounded-b-none ">
                <CardContent className=" px-4 lg:py-8 py-4">
                    <div className=" flex  flex-col items-center justify-center">
                        <div className=" flex flex-col items-start justify-start space-y-4">
                            <h1 className=" text-black text-2xl font-bold"> Join our newsletter</h1>
                            <p className=" text-text text-xs pr-10">
                                Get exclusive updates  and news delivered directly to your inbox.
                            </p>
                        </div>
                        <div className=" flex flex-col  items-center justify-center space-y-3  w-full py-5">
                            <Input className=" rounded-full" placeholder="Enter your email" />
                            <Button className=" rounded-3xl text-white w-full" variant="blueb">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </CardContent>

            </Card>
            {/* <div className="absolute">

            </div> */}
            <Card className="bg-[#002642] rounded-t-none md:rounded-2xl relative lg:h-[442px]">
                <CardContent>
                    <div className="flex md:hidden flex-col items-center justify-center">
                        <div className=" flex items-center justify-between gap-x-20 py-3">
                            <div className=" flex flex-col">
                                <h1 className=" text-[#98A2B3] font-bold text-sm ">Product</h1>
                                <div className=" flex flex-col gap-3 mt-8 text-[#E6EFF7]  text-base lg:w-[202px] lg:h-[158px]">
                                    <p>Features</p>
                                    <p>Plan & Pricing</p>
                                    <p>Vehicle History Data</p>
                                    <p>Book a Demo</p>
                                    <p>Sign Up</p>
                                </div>

                            </div>
                            <div className=" flex flex-col">
                                <h1 className=" text-[#98A2B3] font-bold text-sm">Company</h1>
                                <div className=" flex flex-col gap-3 mt-8 text-[#E6EFF7]  text-base lg:w-[202px] lg:h-[158px]">
                                    <p>About</p>
                                    <p>Careers</p>
                                    <p>Vehicle Owners</p>
                                    <p>Auto Dealers</p>
                                    <p>Repair Hubs</p>
                                </div>
                            </div>
                        </div>

                        <div className=" flex items-center justify-between gap-x-2 py-3">
                            <div className=" flex flex-col">
                                <h1 className=" text-[#98A2B3] font-bold text-sm">Resources</h1>
                                <div className=" flex flex-col gap-3 mt-8 text-[#E6EFF7]  text-base lg:w-[202px] lg:h-[158px]">
                                    <p>Our Blog</p>
                                    <p>FAQs</p>
                                    <p>Find Repair Hubs</p>
                                    <p>Vehicle Owners Community</p>

                                </div>
                            </div>
                            <div className=" flex flex-col lg:w-[151px] lg:h-[152px] gap-4">
                                <h1 className=" text-[#98A2B3] font-semibold text-sm w-[151px] h-[40px]">Customer Mobile App available on</h1>
                                <div className=" mt-6 flex flex-col gap-4 w-full h-[96px]">
                                    <Button className=" bg-transparent rounded-3xl  border border-[#5B6B78] text-[#FFFFFF] w-[151px] h-[40px]" size="sm"> <Apple className=" mr-2 text-white fill-white" /> App store</Button>
                                    <Button className="bg-transparent rounded-3xl  border border-[#5B6B78] text-[#FFFFFF] w-[151px] h-[40px]" size="sm"><PlayIcon className=" mr-2 text-white fill-white" /> Play store</Button>
                                </div>
                            </div>
                        </div>

                        <div>

                        </div>

                    </div>
                    <div className="hidden w-full md:flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between lg:py-6  lg:mt-32 xl:px-24 lg:px-5 space-y-5">

                        <div className=" flex flex-col">
                            <h1 className=" text-[#98A2B3] font-bold text-sm mt-5">Product</h1>
                            <div className=" flex flex-col gap-3 mt-8 text-[#E6EFF7]  text-base lg:w-[202px] lg:h-[158px]">
                                <p>Features</p>
                                <p>Plan & Pricing</p>
                                <p>Vehicle History Data</p>
                                <p>Book a Demo</p>
                                <p>Sign Up</p>
                            </div>

                        </div>
                        <div className=" flex flex-col">
                            <h1 className=" text-[#98A2B3] font-bold text-sm">Company</h1>
                            <div className=" flex flex-col gap-3 mt-8 text-[#E6EFF7]  text-base lg:w-[202px] lg:h-[158px]">
                                <p>About</p>
                                <p>Careers</p>
                                <p>Vehicle Owners</p>
                                <p>Auto Dealers</p>
                                <p>Repair Hubs</p>
                            </div>
                        </div>
                        <div className=" flex flex-col">
                            <h1 className=" text-[#98A2B3] font-bold text-sm">Resources</h1>
                            <div className=" flex flex-col gap-3 mt-8 text-[#E6EFF7]  text-base lg:w-[202px] lg:h-[158px]">
                                <p>Our Blog</p>
                                <p>FAQs</p>
                                <p>Find Repair Hubs</p>
                                <p>Vehicle Owners Community</p>

                            </div>
                        </div>
                        <div className=" flex flex-col lg:w-[151px] lg:h-[152px] gap-4">
                            <h1 className=" text-[#98A2B3] font-semibold text-sm w-[151px] h-[40px]">Customer Mobile App available on</h1>
                            <div className=" mt-6 flex flex-col gap-4 w-full h-[96px]">
                                <Button className=" bg-transparent rounded-3xl  border border-[#5B6B78] text-[#FFFFFF] w-[151px] h-[40px]" size="sm"> <Apple className=" mr-2 text-white fill-white" /> App store</Button>
                                <Button className="bg-transparent rounded-3xl  border border-[#5B6B78] text-[#FFFFFF] w-[151px] h-[40px]" size="sm"><PlayIcon className=" mr-2 text-white fill-white" /> Play store</Button>
                            </div>
                        </div>


                    </div>
                </CardContent>
                <Card className=" hidden md:flex absolute   bg-[#E6EFF7]  left-12  md:-top-16  lg:-top-20  xl:w-[1000px] h-[202px] md:left-12 xl:left-24 lg:w-[850px]   ">
                    <CardContent className=" py-3 xl:px-16 px-8 w-full">
                        <div className=" flex  flex-col md:flex-row items-center justify-between w-full h-full">
                            <div className=" flex flex-col items-start justify-center w-[443px] h-[98px] gap-2">
                                <h1 className=" text-black text-4xl font-bold"> Join our newsletter</h1>
                                <p className=" text-black text-base">
                                    Get exclusive updates  and news delivered directly to your inbox.
                                </p>
                            </div>
                            <div className=" flex flex-col lg:flex-row items-center justify-center  space-x-3">
                                <Input className=" rounded-full w-[280px] h-[40px]" placeholder="Enter your email" />
                                <Button className=" rounded-3xl text-white w-[94px] h-[39px] py-[10px] px-[16px]" variant="blueb">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </CardContent>

                </Card>
            </Card>

        </div>


    );
};

export default Newsletter;