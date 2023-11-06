import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import Icons from "../../../../components/icons/icons-svg";




const Why = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-48  px-10  lg:px-20 w-full ">
            <div className=" flex flex-col items-center justify-center gap-8">
                <h1 className=" text-black text-2xl lg:text-5xl font-bold">
                    Why Reown Software?
                </h1>
                <p className=" text-[#5B6B78] text-sm lg:text-lg">
                    We stand out for so many reasons.
                </p>
            </div>
            <div className=" flex items-center justify-center md:justify-between  mt-36 mb-4 flex-col md:flex-row">

                <div className=" flex flex-col space-y-3">
                    <h1 className=" text-2xl font-bold text-black">
                        Save costs
                    </h1>
                    <p className="w-[319px] h-[184px] text-sm lg:text-base ">
                        Push notifications for reports, and due date reminders on the customer app significantly reduce expenses on phone calls, SMS, and human resources.
                    </p>

                </div>
                <div className=" w-full flex flex-col md:flex-row lg:w-[459px] lg:h-[442.5px] space-x-3 mb-36 mr-8">
                    <div className=" flex flex-col gap-0 md:gap-y-3 w-full ">
                        <div className="w-full lg:w-[215px] lg:h-[194px]">
                            {Icons.Success}
                        </div>
                        <div className="w-full lg:w-[215px] lg:h-[227px]">
                            {Icons.Two}
                        </div>


                    </div>
                    <div className=" flex flex-col gap-y-3 w-full ">
                        <div className=" w-full lg:w-[215px] lg:h-[242px]">
                            {Icons.Three}
                        </div>
                        <div className="w-full lg:w-[158px] lg:h-[126px]">
                            {Icons.One}
                        </div>


                    </div>

                </div>
                <div className=" flex flex-col space-y-2 lg:ml-20 w-full items-center justify-center">
                    <div className=" flex flex-col lg:w-[324px] lg:h-[169px] space-y-3">
                        <h1 className=" text-black text-xl md:text-2xl font-bold">
                            99% Customer Retention
                        </h1>
                        <p className=" text-text text-sm md:text-base">
                            Connect better with your customers with personalized interaction on mobile app.
                        </p>
                    </div>
                    <div className="flex flex-col lg:w-[324px] lg:h-[286px] space-y-3">
                        <h1 className=" text-black text-xl md:text-2xl font-bold">
                            Insightful Visibility & analytist
                        </h1>
                        <p className=" text-text text-sm md:text-base">
                            Track workshop(s) operation and monitor all activity from an analytics dashboard.
                        </p>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Why;