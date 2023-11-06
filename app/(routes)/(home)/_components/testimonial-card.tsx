import React from "react";

import Image from "next/image";
import { Card, CardContent } from "../../../../components/ui/card";
import Icons from "../../../../components/icons/icons-svg";

const TestimonialCard = () => {
    return (
        <div className=" flex items-center justify-center">
            <Card className=" bg-black xl:w-[1170px] lg:h-[484px] w-full mt-12 rounded-3xl ">
                <CardContent className=" flex flex-col md:flex-row items-center justify-between w-full pr-0">
                    <div className=" flex flex-col  lg:w-[690px] lg:h-[484px] lg:p-[64px] lg:gap-[20px] w-full">
                        <p className=" text-gray-300 mb-10">-Motor Rescue <span className=" text-white block">Satisfied customer</span></p>
                        <p> {Icons.Star}</p>
                        <p className=" text-white text-base my-6">
                            They were overwhelmed and stressed trying to <br />
                            manage their operations across 3 branches until<br />
                            Reown stepped in and made everything easier,saved<br />
                            them money, and made their work more efficient.
                        </p>
                        <div className=" xl:mt-8">
                            {Icons.Pagination}
                        </div>

                    </div>
                    <div className=" relative lg:w-[480px] lg:h-[464px] w-[350px] h-[464px] lg:mt-0 mt-4 ">
                        <Image src="/home/image.png" alt="alter" fill className=" object-cover rounded-3xl" />
                    </div>
                </CardContent>
            </Card>
        </div>

    );
};

export default TestimonialCard;