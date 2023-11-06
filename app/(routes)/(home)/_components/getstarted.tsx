import React from "react";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";


const Getstarted = () => {
    return (
        <div className="flex flex-col items-center justify-center px-10  mt-24 lg:px-20  mb-10">
            <div className=" flex flex-col text-center items-center justify-center space-y-12">
                <Button variant="outline" size='sm' className=" text-black border-2 shadow-sm rounded-2xl w-[124px] h-[23px] py-[2px] px-[10px]">
                    GET STARTED
                </Button>
                <div className=" hidden md:flex flex-col space-y-3 ">
                    <h1 className=" lg:text-4xl text-xl font-bold text-black lg:w-[950px]">Simplify your workshop operations and
                    </h1>
                    <h1 className=" lg:text-4xl text-xl font-bold text-black lg:w-[950px]">improve your customer satisfaction
                    </h1>
                    <h1 className=" lg:text-4xl text-xl font-bold text-black lg:w-[950px]">with Reown.
                    </h1>
                </div>
                <h1 className="md:hidden w-[365px] h-[90px] font-bold text-xl">
                    Simplify your Workshop Operations and Improve your Customer Satisfaction with Reown
                </h1>



                <div className="flex space-x-2 items-center justify-center mt-16 text-text px-5 md:px-0">
                    <Button className=" text-white text-base px-[10px] py-[18px] rounded-full h-[50px] w-[195px]" variant='blueb'>
                        <PlayCircle className=" w-6 h-6 mr-2" />
                        Book a Demo
                    </Button>
                    <Button className="text-base px-[10px] py-[18px]  border shadow-md border-[#0063B0] h-[50px] w-[195px] rounded-full text-[#0063B0]" variant='outline'> Try for Free</Button>
                </div>

            </div>

            <div className="lg:my-20 flex items-center justify-center w-full mt-6 md:mt-0">

                <Image src="/home/workshop.png" alt="" width={800} height={800} />
            </div>

        </div>
    );
};

export default Getstarted;