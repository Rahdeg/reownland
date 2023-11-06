import React from "react";
import { cn } from "../../../../lib/utils";


const easycard = [
    {
        id: 1,
        title: "Create Account",
        description: "Create and set up an account with your email and password.",
        bg: "bg-[#0063B0]",

    },
    {
        id: 2,
        title: "Add Repair Hubs",
        description: "Add one or more repair hubs with unique invite links provided.",
        bg: "bg-[#059646]"
    },
    {
        id: 3,
        title: "Onboard Customers",
        description: "Generate invite codes from your profile to onboard your customers.",
        bg: "bg-[#F3C969]"
    }
]


const EasyCard = () => {
    return (
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-20  px-10 mt-12 lg:px-20 xl:px-40 mb-10 w-full">
            {
                easycard.map((item) => (
                    <div className="flex items-center border shadow-md justify-center w-full xl:w-[373px] xl:h-[217px] rounded-2xl py-7 px-10 bg-white" key={item.id}>
                        <div className={cn("  flex  flex-col items-start justify-center",)}>
                            <div className={cn(" w-[69px] h-[24px] rounded-full flex items-center justify-center mt-3", item.bg, item.id === 3 ? "text-black" : "text-white")}>
                                <p className=" text-sm font-semibold"> STEP {item.id}</p>
                            </div>
                            <h1 className={cn(" text-base font-bold text-black mt-5",)}>{item.title} </h1>
                            <p className={cn(" text-[#415260] text-xs  xl:w-[296px] xl:h-[66px] mt-4",)}>{item.description} </p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default EasyCard;