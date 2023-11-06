"use client"
import React, { useState } from "react";
import LogoHeaderDark from "../logo-header";
import { Button } from "../ui/button";
import Link from "next/link";
import MobileToggle from "../mobile-toggle";
import AboutTrigger from "./about-trigger";
import FeatureTrigger from "./feature-trigger";
import { cn } from "../../lib/utils";
import CustomerTrigger from "./customer-trigger";
import ResourcesTrigger from "./resources-trigger";
import { usePathname } from "next/navigation";
import LogoHeaderWhite from "../logo-white";

const Header = () => {

    const [value, setValue] = useState("");

    const pathname = usePathname();

    const isVehicleOwner = pathname?.includes("/vehicle-owners");

    return <div className={cn("fixed w-full z-50 flex  flex-col px-5 md:px-10  lg:px-20  py-4 bg-[#FBFBFB] border-b-1 text-text", isVehicleOwner && "bg-black text-white")}>
        <div className=" flex items-center justify-between">
            <Link href='/'>
                {
                    isVehicleOwner ? <LogoHeaderWhite /> : <LogoHeaderDark />
                }

            </Link>

            <div className=" hidden lg:flex items-center justify-center space-x-6 cursor-pointer">
                <AboutTrigger value={value} setValue={setValue} />
                <FeatureTrigger value={value} setValue={setValue} />
                <CustomerTrigger value={value} setValue={setValue} />
                <p onClick={() => setValue("Pricing")} className={cn(" hover:text-[#0063B0] hover:font-semibold", value === "Pricing" && "text-[#0063B0] font-semibold")}>Pricing</p>
                <ResourcesTrigger value={value} setValue={setValue} />
            </div>
            <div className=" hidden lg:flex items-center justify-center space-x-2 ">
                <Button size="head" variant="blueb" className="rounded-full text-white shadow-md">Book a Demo</Button>
                <Button size="heads" variant="outline" className={cn("rounded-full", isVehicleOwner && "text-black")}>Try for Free</Button>
            </div>
            <div className="flex lg:hidden">
                <MobileToggle />
            </div>
        </div>
    </div>;
};

export default Header;