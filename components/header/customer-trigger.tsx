
"use client"
import { Users } from "lucide-react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card"
import { useRouter } from "next/navigation";
import { cn } from "../../lib/utils";
import { useState } from "react";
import NavIcons from "../icons/icons-nav-svg";

interface CustomerTriggerProps {
    value: string,
    setValue: any
}


const CustomerTrigger = ({ value, setValue }: CustomerTriggerProps) => {

    const router = useRouter();

    const onClick = (route: string) => {
        return router.push(route);
    }
    return (
        <HoverCard >
            <HoverCardTrigger onClick={() => setValue("customers")} className={cn(" hover:text-[#0063B0] hover:font-semibold", value === "customers" && "text-[#0063B0] font-semibold")}>Customers</HoverCardTrigger>
            <HoverCardContent className=" flex flex-col  items-start justify-center space-y-8" >
                <div className="flex items-center justify-center gap-x-3">
                    <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                        {NavIcons.owners}
                    </div>
                    <div className=" flex flex-col items-start" onClick={() => onClick("/vehicle-owners")}>
                        <h1 className=" text-base font-semibold">Vehicle Owners</h1>
                        <p className=" text-sm text-[#667085]">Explore powerful features for vehicle owners</p>

                    </div>
                </div>

                <div className="flex items-center justify-center gap-x-3" onClick={() => onClick("/customers-dealers")}>
                    <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                        {NavIcons.Auto}
                    </div>
                    <div className=" flex flex-col items-start">
                        <h1 className=" text-base font-semibold">Auto Dealers</h1>
                        <p className=" text-sm text-[#667085]">Partner with us as an auto dealer</p>

                    </div>
                </div>


                <div className="flex items-center justify-center gap-x-3" onClick={() => onClick("/repair-hub")}>
                    <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                        {NavIcons.Repair}
                    </div>
                    <div className=" flex flex-col items-start">
                        <h1 className=" text-base font-semibold">Repair Hubs</h1>
                        <p className=" text-sm text-[#667085]">Simplify your workshop operation</p>

                    </div>
                </div>

            </HoverCardContent>
        </HoverCard>

    );
};

export default CustomerTrigger;