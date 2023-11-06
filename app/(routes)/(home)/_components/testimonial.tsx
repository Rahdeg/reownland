import React from "react";

import TestimonialCard from "./testimonial-card";
import { Button } from "../../../../components/ui/button";

const Testimonial = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-36 lg:px-20  mb-10">
            <div className=" flex flex-col text-center items-center justify-center space-y-5 mb-20">
                <Button variant="outline" size='sm' className=" border-4 border-[#F0F5FB] mb-4 text-black rounded-2xl py-[2px] px-[10px] w-[242px] h-[23px]">
                    TESTIMONIALS
                </Button>
                <h1 className=" md:text-5xl text-xl font-bold">Why Customers Love our Product.</h1>
                <p className=" md:text-[18px] text-sm text-text lg:w-[768px] lg:h-[50px]">Our customers can focus on what they do best—fixing vehicles—while we provide exceptional software support. </p>
            </div>
            <TestimonialCard />

        </div>
    );
};

export default Testimonial;