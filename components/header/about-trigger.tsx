
"use client"
import { Users } from "lucide-react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../../components/ui/hover-card"
import { useRouter } from "next/navigation";
import { cn } from "../../lib/utils";
import { useState } from "react";
import NavIcons from "../icons/icons-nav-svg";

interface AboutTriggerProps {
    value: string,
    setValue: any
}


const AboutTrigger = ({ value, setValue }: AboutTriggerProps) => {

    const router = useRouter();

    const onClick = (route: string) => {
        return router.push(route);
    }
    return (
        <HoverCard >
            <HoverCardTrigger onClick={() => setValue("about")} className={cn(" hover:text-[#0063B0] hover:font-semibold", value === "about" && "text-[#0063B0] font-semibold")}>About</HoverCardTrigger>
            <HoverCardContent className=" flex flex-col  items-start justify-center space-y-8" >
                <div className="flex items-center justify-center gap-x-3">
                    <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                        {NavIcons.About}
                    </div>
                    <div className=" flex flex-col items-start" onClick={() => onClick("/aboutus")}>
                        <h1 className=" text-base font-semibold">About us</h1>
                        <p className=" text-sm text-[#667085]">Something about us</p>

                    </div>
                </div>

                <div className="flex items-center justify-center gap-x-3" onClick={() => onClick("/contactus")}>
                    <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                        {NavIcons.Contact}
                    </div>
                    <div className=" flex flex-col items-start">
                        <h1 className=" text-base font-semibold">Contact us</h1>
                        <p className=" text-sm text-[#667085]">Send us a message</p>

                    </div>
                </div>


                <div className="flex items-center justify-center gap-x-3" onClick={() => onClick("/privacy")}>
                    <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                        {NavIcons.Policy}
                    </div>
                    <div className=" flex flex-col items-start">
                        <h1 className=" text-base font-semibold">Privacy Policy</h1>
                        <p className=" text-sm text-[#667085]">How we collect and manage your data</p>

                    </div>
                </div>

                <div className="flex items-center justify-center gap-x-3" onClick={() => onClick("/terms")}>
                    <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                        {NavIcons.Terms}
                    </div>
                    <div className=" flex flex-col items-start">
                        <h1 className=" text-base font-semibold">Terms of Use</h1>
                        <p className=" text-sm text-[#667085]">Before you use our product</p>

                    </div>
                </div>

            </HoverCardContent>
        </HoverCard>

    );
};

export default AboutTrigger;