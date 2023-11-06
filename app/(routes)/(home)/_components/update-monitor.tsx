"use client"
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "../../../../lib/utils";


const monitorItems = [
    {
        id: 1,
        title:
            <p className=" text-[#0063B0] ml-1 font-bold">Admin Dashboard   </p>
        ,
        description: <p className="  text-sm text-text mt-3 lg:mt-0">
            Visibility and data across all workshops.
        </p>,
        type: "update"
    },
    {
        id: 2,
        title: <p className=" text-[#0063B0] ml-1 font-bold">Reporting App</p>,
        description: <p className="  text-sm text-text mt-3 lg:mt-0">
            Log reports, accept appointment, send estimate and invoice.
        </p>,
        type: "reports"
    },
    {
        id: 3,
        title: <p className=" text-[#0063B0] ml-1 font-bold">Customer App </p>,
        description: <p className="  text-sm text-text mt-3 lg:mt-0">
            Cost-efficient customer interaction with access to vehicle history.
        </p>,
        type: "connect"
    }
]

const UpdatedMonitor = () => {

    const [typed, setTyped] = useState("update");



    const onClick = (type: string) => {
        setTyped(type);
    }



    return (
        <div className="flex flex-col px-10 mt-16 md:mt-40 xl:px-20  mb-10">
            <div className="flex items-center justify-center flex-col gap-y-6">
                <h1 className=" text-black text-2xl lg:text-5xl font-bold">
                    Monitor. Report. Manage.
                </h1>
                <p className="text-text text-sm lg:text-lg">
                    3 repair management apps that work together
                </p>
            </div>


            <div className="flex  flex-col lg:flex-row items-center justify-center xl:gap-x-32 mt-24 lg:gap-x-20   gap-y-5 ">
                <div className="flex flex-col gap-y-5 ">
                    {
                        monitorItems && monitorItems.map((item) => (
                            <div className="flex items-center gap-x-5 cursor-pointer" key={item.id} onClick={() => onClick(item.type)} >
                                <div className={cn("mr-auto opacity-10 border-2 border-[#0063B0]  h-24 md:h-10 lg:h-16 transition-all", typed === item.type && "opacity-100")} />
                                <div className="flex flex-col items-start justify-center w-full ">

                                    {item.title}
                                    {item.description}
                                </div>

                            </div>
                        ))
                    }

                    <div className="flex space-x-2 items-center justify-center mt-8 text-text">
                        <Button className=" text-white text-base px-[10px] py-[18px] rounded-full h-[50px] w-[195px]" variant='blueb'>
                            <PlayCircle className=" w-6 h-6 mr-2" />
                            Book a Demo
                        </Button>
                        <Button className="text-base px-[10px] py-[18px]  border shadow-md border-[#0063B0] h-[50px] w-[195px] rounded-full text-[#0063B0]" variant='outline'> Try for Free</Button>
                    </div>

                </div>
                <div className=" flex items-center justify-center border lg:w-[504px] lg:h-[619px] bg-[#F3F5F7] w-full">
                    {
                        typed === "update" && (
                            <div className=" flex items-end justify-end w-full">
                                <Image src="/home/frame20.png" width={400} height={300} alt="lo" className=" object-contain" />
                            </div>

                        )
                    }
                    {
                        typed === "reports" && (
                            <div className=" flex items-center justify-center w-full h-full">
                                <Image src="/home/02.png" width={300} height={400} alt="lo" />
                            </div>

                        )
                    }
                    {
                        typed === "connect" && (
                            <div className=" flex items-center justify-center">
                                <Image src="/home/01.png" width={300} height={400} alt="lo" />
                            </div>

                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default UpdatedMonitor;