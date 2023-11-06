import React from "react";

import Image from "next/image";

import { PlayCircle } from "lucide-react";
import Heading from "../../../../components/ui/heading";
import Icons from "../../../../components/icons/icons-svg";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";


const Monitor = () => {
    return (
        <div className=" flex flex-col items-center justify-center px-10 mt-32 lg:px-20 xl:px-40 mb-10">
            <Heading title="Monitor. Report. Manage" description="3 Managemet apps, built to function together" />
            <div className="flex items-center justify-between w-full flex-col lg:flex-row">
                <div className=" flex flex-col items-start  mt-20">
                    <p className=" text-2xl text-black  font-bold">
                        Stay Updated with on all<br /> Workshop Activity with <span className=" block text-blue-500">One Central Dashboard</span>
                    </p>
                    {Icons.Monitor}
                    <p className=" text-sm text-text py-2">
                        Admin tool offers a centralized location for overseeing and <br />tracking
                        activities across multiple workshop branches.<br /> it simplifies the process by enabling you to assign admin roles <br /> to your staff and manage their access through customized permission
                    </p>
                </div>
                <div className=" relative  mt-16">
                    {/* <Image src="/screen.png" alt="non" width={600} height={400} /> */}
                    <Card className=" bg-[#F0F5FB]">
                        <CardContent>

                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex items-center justify-between w-full mt-14 flex-col lg:flex-row">
                <div className=" relative  mt-16">
                    <Card className=" bg-[#F0F5FB]">
                        <CardContent>

                        </CardContent>
                    </Card>
                </div>

                <div className=" flex flex-col items-start  mt-20">
                    <p className=" text-2xl text-black  font-bold">
                        Log Reports and Capture <br /> Workshop Activity with a <span className=" block text-blue-500">Personalized Reporting App</span>
                    </p>
                    {Icons.Monitor}
                    <p className=" text-sm text-text py-2">
                        Reporting app is tailored to each workshop, enabling <br />them to log reports, schedule and confirm<br /> appointments,send estimates and invoices to <br /> customers, access VIN information, and set due maintenance dates
                    </p>
                </div>

            </div>
            <div className="flex items-center justify-between w-full mt-14 flex-col lg:flex-row">
                <div className=" flex flex-col items-start  mt-20">
                    <p className=" text-2xl text-black  font-bold">
                        Stay Connected with Your Customers<br /> with a <span className=" block text-blue-500">Personalized Customer App</span>
                    </p>
                    {Icons.Monitor}
                    <p className=" text-sm text-text py-2">
                        Customer app allows you to onboard your customers <br />using invite codes to customize their user experience.<br /> reduce communication cost, and effectively build and <br /> manage their vehicle history data
                    </p>
                </div>
                <div className=" relative  mt-16">
                    <Card className=" bg-[#F0F5FB]">
                        <CardContent>

                        </CardContent>
                    </Card>
                </div>

            </div>
            <div className="flex space-x-2 items-center justify-center mt-6 text-text">
                <Button className=" text-white rounded-full" variant='blueb'>
                    <PlayCircle className=" w-4 h-4 mr-2" />
                    Book a Demo
                </Button>
                <Button className=" rounded-full" variant='outline'> Try for Free</Button>
            </div>
        </div>
    );
};

export default Monitor;