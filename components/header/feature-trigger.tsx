
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
import NavIcons from "../icons/icons-nav-svg";


interface FeatureTriggerProps {
    value: string,
    setValue: any
}


const FeatureTrigger = ({ value, setValue }: FeatureTriggerProps) => {
    const [font, setFont] = useState("operation");



    const router = useRouter();

    const onClick = (route: string) => {
        return router.push(route);
    }
    return (
        <HoverCard  >
            <HoverCardTrigger onClick={() => setValue("feature")} className={cn(" hover:text-[#0063B0] hover:font-semibold", value === "feature" && "text-[#0063B0] font-semibold")}>Features</HoverCardTrigger>
            <HoverCardContent className=" flex  items-start justify-between w-full" >
                <div className=" w-[300px] h-96 p-5  bg-[#FBFBFB] flex flex-col items-start mt-5  space-y-7">
                    <p className=" text-[#A9A9A9] text-sm">
                        Features
                    </p>
                    <p onClick={() => setFont("operation")} className={cn(" text-[#5B6B78] w-full p-2 hover:border hover:rounded-md hover:text-[#0063B0] hover:font-semibold hover:bg-[#E6EFF7] ", font === "operation" && " border rounded-md p-2 text-[#0063B0] font-semibold bg-[#E6EFF7]")}>
                        Operations
                    </p>
                    <p onClick={() => setFont("communications")} className={cn(" text-[#5B6B78] w-full  p-2 hover:border hover:rounded-md hover:text-[#0063B0] hover:font-semibold hover:bg-[#E6EFF7]", font === "communications" && " border rounded-md p-2 text-[#0063B0] font-semibold bg-[#E6EFF7]")}>
                        Communications
                    </p>
                    <div onClick={() => setFont("integrations")} className={cn(" text-[#5B6B78] w-full flex  p-2 hover:border hover:rounded-md hover:text-[#0063B0] hover:font-semibold hover:bg-[#E6EFF7]", font === "integrations" && " border rounded-md p-2 text-[#0063B0] font-semibold bg-[#E6EFF7]")}>
                        <p>Integrations</p>
                        <Badge className="  text-[#059646] bg-[#EFFFF2] hover:bg-[#EFFFF2] text-xs ml-2">
                            Coming soon
                        </Badge>
                    </div>

                </div>

                {
                    font === "operation" && (
                        <div className=" flex items-start justify-between">
                            <div className=" flex items-center flex-col justify-center p-3 space-y-5">
                                <div className=" flex items-start justify-center w-full gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Acct}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Account Set-up</h1>
                                        <p className=" text-sm w-[297px]">Create your account and customize your profile to match your business needs.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.CopyInd}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold w-[200px]">Customer Management</h1>
                                        <p className=" text-sm w-[297px]">Maintain profiles, track communication history, and provide personalized service.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.VehicleMan}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Vehicle Management</h1>
                                        <p className=" text-sm w-[297px]">Track vehicle history, maintenance schedules, and more, all in one place.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Reporting}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Reporting</h1>
                                        <p className=" text-sm w-[297px]">Easily log and generate reports on all customer vehicle activities, saving time on manual documentation.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Estimates}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Estimate</h1>
                                        <p className=" text-sm w-[297px]">Generate detailed and editable estimates for your services and save time on charge negotiations with customers.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Invoice2}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Invoice</h1>
                                        <p className=" text-sm w-[297px]">Generate accurate and professional-looking invoices for seamless billing and client satisfaction.</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex items-center flex-col justify-center p-3 space-y-5">
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.VehicleHistory}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Vehicle History</h1>
                                        <p className=" text-sm w-[297px]">Maintain a comprehensive record of each customer’s vehicle repair and service history. Access past work details, parts replaced, and more for better decision-making.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Inspection}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Inspections</h1>
                                        <p className=" text-sm w-[297px]">Ensure a comprehensive assessment of a vehicle's condition, identify potential issues, and attach images to inspection reports.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Technician}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Technician Job Tracking</h1>
                                        <p className=" text-sm w-[297px]">Keep track of technician jobs and monitor performance via customer feedback and ratings.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.TechnicianPay}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Technician Payout </h1>
                                        <p className=" text-sm w-[297px]">Calculate technician earnings, track commissions, and streamline your payroll process.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Vin}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">VIN Decoder </h1>
                                        <p className=" text-sm w-[297px]">Access essential details about a vehicle's make, model, year, and more, ensuring precise identification.</p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    )
                }

                {
                    font === "communications" && (
                        <div className=" flex items-start justify-between">
                            <div className=" flex items-center flex-col justify-center p-3 space-y-5">
                                <div className=" flex items-start justify-center w-full gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.DueR}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Due Reminders</h1>
                                        <p className=" text-sm w-[297px]">Stay informed about upcoming repairs via sms, email, in-app and push notifications, ensuring timely completion and customer satisfaction.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Appointment}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold w-[200px]">Appointments</h1>
                                        <p className=" text-sm w-[297px]">Schedule and organize service appointments, ensuring a smooth and efficient process for both your customers and technicians.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Notifi}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Notifications</h1>
                                        <p className=" text-sm w-[297px]">Receive alerts about new repair requests, updates on ongoing repairs, and other important information.</p>
                                    </div>
                                </div>

                            </div>

                            <div className=" flex items-center flex-col justify-center p-3 space-y-5">
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Vectoor}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Customer Review & Ratings</h1>
                                        <p className=" text-sm w-[297px]">Encourage customers to share their experiences and gather valuable feedback to improve your repair services.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Rating}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Technician Ratings</h1>
                                        <p className=" text-sm w-[297px]">Monitor and evaluate your technicians' performance based on feedback from customers.</p>
                                    </div>
                                </div>




                            </div>


                        </div>
                    )
                }

                {
                    font === "integrations" && (
                        <div className=" flex items-start justify-between">
                            <div className=" flex items-center flex-col justify-center p-3 space-y-5">
                                <div className=" flex items-start justify-center w-full gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.OnlineP}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Online Payment </h1>
                                        <p className=" text-sm w-[297px]">Simplify transactions and improve customer convenience by enabling seamless online payment options.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Accounting}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold w-[200px]">Accounting</h1>
                                        <p className=" text-sm w-[297px]">Simplify bookkeeping, invoicing, and financial reporting.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Group7}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">BNPL for Customers</h1>
                                        <p className=" text-sm w-[297px]">Offer flexible payment options to your customers with upcoming Buy Now, Pay Later (BNPL) integration.</p>
                                    </div>
                                </div>
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.SparePart}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">Spare Part Ordering</h1>
                                        <p className=" text-sm w-[297px]">Simplify ordering, restocking, and ensure timely availability of spare parts.</p>
                                    </div>
                                </div>

                            </div>

                            <div className=" flex items-center flex-col justify-center p-3 space-y-5">
                                <div className=" flex items-start justify-center w-full  gap-x-3">
                                    <div className=" w-12 h-12 rounded-full bg-[#F0F5FB] px-2 flex items-center justify-center">
                                        {NavIcons.Pos}
                                    </div>
                                    <div>
                                        <h1 className=" text-base font-semibold">POS Terminals for Offline Payment</h1>
                                        <p className=" text-sm w-[297px]">Accept offline payments effortlessly with upcoming (POS) terminal integration, providing customers with multiple payment options.</p>
                                    </div>
                                </div>





                            </div>


                        </div>
                    )
                }







            </HoverCardContent>
        </HoverCard>

    );
};

export default FeatureTrigger;