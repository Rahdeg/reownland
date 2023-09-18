"use client"
import React from "react";
import { motion } from "framer-motion";
import HeadingEm from "./header/header-em";
import { Button } from "./ui/button";
import { PlayCircle } from "lucide-react";

const Hero = () => {
    return (
        <div className="px-10   flex flex-col items-center justify-center">
            <div className=" hidden lg:flex mt-28 lg:mt-52">
                <HeadingEm
                    text="3-in-1 Repair management Software Built with Your Growth in"
                    emphasis="Mind"
                    lineBreakIndexes={[3]}
                    textAlign="center"
                />
            </div>
            <div className=" flex flex-col lg:hidden mt-28 items-center justify-center text-[#0063B0] ">
                <Button variant='outline' className=" my-3 rounded-full w-1/2">
                    Welcome to Reown
                </Button>
                <h1 className=" text-2xl md:text-3xl font-bold text-center md:px-20 text-black">3-in-1 Repair management Software Built with Your Growth in Mind</h1>
            </div>
            <div className=" text-sm lg:text-2xl md:px-20   lg:font-extralight font-normal mt-3 text-text text-center ">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    viewport={{ once: true }}
                    className="body-text text-center"
                >
                    Save operational build customer loyalty and expands your
                    Auto-repair business from 1 branch to more with Reown
                </motion.p>
            </div>
            <div className="flex space-x-2 items-center justify-center mt-6 text-text">
                <Button className=" text-white rounded-full" variant='blueb'>
                    <PlayCircle className=" w-4 h-4 mr-2" />
                    Book a Demo
                </Button>
                <Button className=" rounded-full" variant='outline'> Try for Free</Button>
            </div>
        </div>
    )
};

export default Hero;
