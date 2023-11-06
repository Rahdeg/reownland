
"use client"
import { Users } from "lucide-react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { Badge } from "../ui/badge";
import Icons from "../icons/icons-svg";
import NavIcons from "../icons/icons-nav-svg";


interface ResourcesTriggerProps {
    value: string,
    setValue: any
}


const ResourcesTrigger = ({ value, setValue }: ResourcesTriggerProps) => {
    const [font, setFont] = useState("operation");



    const router = useRouter();

    const onClick = (route: string) => {
        return router.push(route);
    }
    return (
        <HoverCard  >
            <HoverCardTrigger onClick={() => setValue("Resources")} className={cn(" hover:text-[#0063B0] hover:font-semibold", value === "Resources" && "text-[#0063B0] font-semibold")}>Resources</HoverCardTrigger>
            <HoverCardContent className=" flex  items-start justify-between space-x-16 w-full px-10" >
                <div className=" flex items-center flex-col justify-center p-3 space-y-5">
                    <div className=" flex items-start justify-center w-full gap-x-3">
                        <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                            {NavIcons.RepairHub}
                        </div>
                        <div>
                            <h1 className=" text-base font-semibold">Repair Hubs</h1>
                            <p className=" text-sm w-[297px]">Find repair hubs near you.</p>
                        </div>
                    </div>

                    <div className=" flex items-start justify-center w-full  gap-x-3">
                        <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                            {NavIcons.VehicleOwner}
                        </div>
                        <div onClick={() => onClick('/customers-owners')}>
                            <h1 className=" text-base font-semibold">Vehicle Owners’ Community</h1>
                            <p className=" text-sm w-[297px]">Unlock exclusive benefits on the vehicles owners’ community.</p>
                        </div>
                    </div>
                    <div className=" flex items-start justify-center w-full  gap-x-3">
                        <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                            {NavIcons.VehicleHistory}
                        </div>
                        <div>
                            <h1 className=" text-base font-semibold">Vehicle History Data</h1>
                            <p className=" text-sm w-[297px]">Boost your vehicle’s value with vehicle history data.</p>
                        </div>
                    </div>
                    <div className=" flex items-start justify-center w-full  gap-x-3">
                        <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                            {NavIcons.Carrer}
                        </div>
                        <div>
                            <h1 className=" text-base font-semibold">Careers</h1>
                            <p className=" text-sm w-[297px]">Join our team!</p>
                        </div>
                    </div>
                    <div className=" flex items-start justify-center w-full  gap-x-3">
                        <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                            {NavIcons.Faq}
                        </div>
                        <div>
                            <h1 className=" text-base font-semibold">FAQs</h1>
                            <p className=" text-sm w-[297px]">Have questions? Find your answers here.</p>
                        </div>
                    </div>
                </div>

                <div className=" flex items-center flex-col justify-center p-3 space-y-5 w-full">
                    <div className=" flex items-center justify-between w-full">
                        <p className=" text-[#A9A9A9] text-sm">From our Blog</p>
                        <p className=" text-[#0063B0] text-base">All Blog Resources <span className=" inline-flex"> {Icons.Arrows}</span> </p>
                    </div>
                    <div className=" flex flex-col items-center gap-y-6 justify-center">
                        <div className=" flex items-center justify-center gap-x-4">
                            <div className="w-[110px] h-[80px] rounded-md shadow-sm bg-[#002642]">

                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h1 className=" text-base font-semibold">
                                    Blog Topic/Example
                                </h1>
                                <p className=" text-[#667085] text-sm">
                                    Brief Blog topic/Article intro comes here just like it is on the blog...
                                </p>
                                <p className=" text-[#0063B0] text-sm">Read Blog <span className=" inline-flex"> {Icons.Arrowd}</span></p>
                            </div>
                        </div>
                        <div className=" flex items-center justify-center gap-x-4">
                            <div className="w-[110px] h-[80px] rounded-md shadow-sm bg-[#002642]">

                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h1 className=" text-base font-semibold">
                                    Blog Topic/Example
                                </h1>
                                <p className=" text-[#667085] text-sm">
                                    Brief Blog topic/Article intro comes here just like it is on the blog...
                                </p>
                                <p className=" text-[#0063B0] text-sm">Read Blog <span className=" inline-flex"> {Icons.Arrowd}</span></p>
                            </div>
                        </div>
                        <div className=" flex items-center justify-center gap-x-4">
                            <div className="w-[110px] h-[80px] rounded-md shadow-sm bg-[#002642]">

                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h1 className=" text-base font-semibold">
                                    Blog Topic/Example
                                </h1>
                                <p className=" text-[#667085] text-sm">
                                    Brief Blog topic/Article intro comes here just like it is on the blog...
                                </p>
                                <p className=" text-[#0063B0] text-sm">Read Blog <span className=" inline-flex"> {Icons.Arrowd}</span></p>
                            </div>
                        </div>
                        <div className=" flex items-center justify-center gap-x-4">
                            <div className="w-[110px] h-[80px] rounded-md shadow-sm bg-[#002642]">

                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h1 className=" text-base font-semibold">
                                    Blog Topic/Example
                                </h1>
                                <p className=" text-[#667085] text-sm">
                                    Brief Blog topic/Article intro comes here just like it is on the blog...
                                </p>
                                <p className=" text-[#0063B0] text-sm">Read Blog <span className=" inline-flex"> {Icons.Arrowd}</span></p>
                            </div>
                        </div>
                    </div>


                </div>












            </HoverCardContent>
        </HoverCard>

    );
};

export default ResourcesTrigger;