
import React from "react";
import { Button } from "./ui/button";
import { Flash } from "./icons/flash";

const WorkFlow = () => {
    const flows = [
        {
            label: "Simplify Workflow",
            logo: <Flash />,
            text: "Say goodbye to roadblocks and hello to a streamlined workflow that keeps your workshop running smothly without your physical presence",
            color: "text-sky-500",

        },
        {
            label: "Monitor Revenue",
            logo: <Flash />,
            text: "Say goodbye to roadblocks and hello to a streamlined workflow that keeps your workshop running smothly without your physical presence",
            color: "text-violet-500"
        },
        {
            label: "Image Generation",
            logo: <Flash />,
            text: "Say goodbye to roadblocks and hello to a streamlined workflow that keeps your workshop running smothly without your physical presence",
            color: "text-pink-700"
        },
    ]
    return (
        <div className=" flex flex-col lg:flex-row px-10  lg:px-20 xl:px-40 gap-12 ">
            {
                flows && flows.map((flow) => (
                    <div className=" flex gap-4 items-center justify-center" key={flow.label}>
                        {flow.logo}
                        <div className="flex flex-col items-start  mt-16">
                            <h1 className=" text-black font-semibold">{flow.label}</h1>
                            <p className=" text-sm text-text">{flow.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default WorkFlow;
