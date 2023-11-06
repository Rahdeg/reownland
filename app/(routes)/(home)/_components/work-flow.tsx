"use client"
import React from "react";
import Icons from "../../../../components/icons/icons-svg";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";



const WorkFlow = () => {
    const router = useRouter();

    const flows = [
        {
            label: "Simplify Workflow",
            logo: Icons.Flash,
            text: "Enjoy a streamlined workflow that keeps your workshop running smoothly.",
            color: "text-sky-500",
            extra: true

        },
        {
            label: "Monitor Revenue",
            logo: Icons.Dollars,
            text: "Stay in Control of your finances by tracking revenue in real-time.",
            color: "text-violet-500",
            extra: true
        },
        {
            label: "Manage Customers",
            logo: Icons.Users,
            text: "Log reports, set due dates, attach images, invoices, and estimates.",
            color: "text-pink-700",
            extra: true

        },
    ]
    return (
        <div className="  flex flex-col md:flex-row gap-x-8 xl:gap-12  mt-9  gap-y-4">
            {
                flows && flows.map((flow) => (
                    <div className=" group flex flex-col cursor-pointer gap-3  px-3 items-start justify-center border-2 rounded-3xl bg-gradient-to-r from-white via-blue-100/50 to-white w-full xl:w-[342px] lg:w-[300px] h-[248px]" key={flow.label}>
                        {flow.logo}
                        <div className="flex flex-col items-start gap-2 ">
                            <h1 className=" text-[#002642] font-semibold">{flow.label}</h1>
                            <p className=" text-xs text-[#676E7E]  ">{flow.text}</p>
                            {
                                flow.extra && (
                                    <p onClick={() => router.push("/repair-hub")} className=" group-hover:opacity-100 cursor-pointer  text-[#0063B0] text-base font-medium  flex items-center justify-center opacity-0 ">
                                        Learn more
                                        <ArrowRight className="w-3 h-3 ml-2 text-center" />
                                    </p>
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default WorkFlow;