import React from "react";
import Icons from "../../../../components/icons/icons-svg";
import Image from "next/image";

const NewWhy = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-44 px-10  lg:px-20 w-full ">
            <div className=" flex flex-col items-center justify-center gap-8">
                <h1 className=" text-black text-2xl lg:text-5xl font-bold">
                    Why Reown Software?
                </h1>
                <p className=" text-[#5B6B78] text-sm lg:text-lg">
                    We stand out for so many reasons.
                </p>
            </div>
            <div className=" flex items-center justify-center   md:mt-36 mb-4 flex-col gap-y-4  w-full mt-60  ">
                <div className=" xl:w-[1154px] h-[453px] flex items-center justify-center  flex-col md:flex-row w-full gap-x-4 gap-y-8" >
                    <div className=" bg-[#F0F5FB] xl:w-[667px] h-[453px] border rounded-2xl flex flex-col items-start justify-between w-full  p-4  ">
                        <div className=" ">
                            {Icons.Busines}
                        </div>
                        <div className=" xl:w-[630px] h-[152px] flex flex-col  gap-y-2 ">
                            <h1 className=" text-2xl font-bold">Cost Saving</h1>
                            <p className=" md:w-[520px] md:h-[66px]">Push notifications for reports, and due date reminders on the customer app significantly reduce expenses on phone calls, SMS, and human resources.</p>

                        </div>
                    </div>
                    <div className=" xl:w-[467px] h-[451px] bg-[#F0F5FB] w-full flex items-start justify-between flex-col border rounded-2xl p-4">
                        <div className=" xl:w-[415px] h-[92px] flex flex-col gap-y-2">
                            <h1 className=" text-2xl font-bold">99% Customer Retention</h1>
                            <p className=" md:w-[350px] md:h-[44px]" >Connect better with your customers with personalized interaction on the mobile app.</p>

                        </div>
                        <div className=" mt-10 lg:mt-0 ">
                            {Icons.Woman}
                        </div>
                    </div>
                </div>

                <div className=" xl:w-[1168px] lg:w-[980px] h-[384px] bg-[#F0F5FB] flex items-center justify-between border rounded-lg w-full mt-52 flex-col md:mt-0 md:flex-row py-3">
                    <div className=" relative hidden md:block ">
                        <Image src="/home/Desktop.png" alt="r" width={800} height={800} className=" object-contain" />
                    </div>
                    <div className=" w-[353px] h-[84px] px-5 mt-6 md:mt-0">
                        <h1 className=" w-[353px] h-[30px] font-bold">Insightful Visibility & Analytics</h1>
                        <p className=" text-sm h-[44px]">Track workshop(s) operation and monitor all activity from an analytics dashboard.</p>
                    </div>
                    <div className=" relative md:hidden  w-[300px] h-[209px]">
                        <Image src="/home/Desktop.png" alt="r" fill className=" object-contain" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default NewWhy;