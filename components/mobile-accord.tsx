"use client"

import { useRouter } from "next/navigation";
import NavIcons from "./icons/icons-nav-svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import Icons from "./icons/icons-svg";


const MobAcc = () => {

    const router = useRouter();

    const onClick = (route: string) => {
        return router.push(route);
    }

    return (
        <Accordion type="single" collapsible className="w-full text-base text-[#4D6476]">
            <AccordionItem value="item-1" className="w-full border-none">
                <AccordionTrigger className=" text-sm font-semibold w-full">About</AccordionTrigger>
                <AccordionContent className=" py-3">
                    <div className="flex items-start justify-start gap-x-3">
                        <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                            {NavIcons.About}
                        </div>
                        <div className=" flex flex-col items-start" onClick={() => onClick("/aboutus")}>
                            <h1 className=" text-base font-semibold">About us</h1>
                            <p className=" text-sm text-[#667085]">Something about us</p>

                        </div>
                    </div>
                </AccordionContent>
                <AccordionContent className="">
                    <div className="flex items-start justify-start gap-x-3" onClick={() => onClick("/contactus")}>
                        <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                            {NavIcons.Contact}
                        </div>
                        <div className=" flex flex-col items-start">
                            <h1 className=" text-base font-semibold">Contact us</h1>
                            <p className=" text-sm text-[#667085]">Send us a message</p>

                        </div>
                    </div>

                </AccordionContent>
                <AccordionContent className="">
                    <div className="flex items-start justify-start gap-x-3" onClick={() => onClick("/privacy")}>
                        <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                            {NavIcons.Policy}
                        </div>
                        <div className=" flex flex-col items-start">
                            <h1 className=" text-base font-semibold">Privacy Policy</h1>
                            <p className=" text-sm text-[#667085]">How we collect and manage your data</p>

                        </div>
                    </div>

                </AccordionContent>

                <AccordionContent className="">
                    <div className="flex items-start justify-start gap-x-3" onClick={() => onClick("/terms")}>
                        <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                            {NavIcons.Terms}
                        </div>
                        <div className=" flex flex-col items-start">
                            <h1 className=" text-base font-semibold">Terms of Use</h1>
                            <p className=" text-sm text-[#667085]">Before you use our product</p>

                        </div>
                    </div>

                </AccordionContent>

            </AccordionItem>

            <AccordionItem value="item-2 border-none" className="w-full border-none">
                <AccordionTrigger className=" text-sm font-semibold"> Features</AccordionTrigger>
                <AccordionContent className="  ">
                    <ScrollArea className="h-[300px] ">
                        <p className=" p-4 text-[#0063B0] font-semibold">
                            Operations
                        </p>
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
                        <Separator />
                        <p className=" p-4 text-[#0063B0] font-semibold">
                            Communications
                        </p>
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
                        <Separator />
                        <div className=" text-[#0063B0] w-full flex  p-2 hover:border hover:rounded-md hover:text-[#0063B0] hover:font-semibold hover:bg-[#E6EFF7] text-base">
                            <p>Integrations</p>
                            <Badge className="  text-[#059646] bg-[#EFFFF2] hover:bg-[#EFFFF2] text-xs ml-2">
                                Coming soon
                            </Badge>
                        </div>

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

                    </ScrollArea>

                </AccordionContent>

            </AccordionItem>


            <AccordionItem value="item-3" className="w-full border-none">
                <AccordionTrigger className=" text-sm font-semibold w-full">Customers</AccordionTrigger>
                <AccordionContent className=" py-3">
                    <div className="flex items-start justify-start gap-x-3">
                        <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                            {NavIcons.owners}
                        </div>
                        <div className=" flex flex-col items-start" onClick={() => onClick("/vehicle-owners")}>
                            <h1 className=" text-base font-semibold">Vehicle Owners</h1>
                            <p className=" text-sm text-[#667085]">Explore powerful features for vehicle owners</p>

                        </div>
                    </div>
                </AccordionContent>
                <AccordionContent className="">
                    <div className="flex items-start justify-start gap-x-3" onClick={() => onClick("/customers-dealers")}>
                        <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                            {NavIcons.Auto}
                        </div>
                        <div className=" flex flex-col items-start">
                            <h1 className=" text-base font-semibold">Auto Dealers</h1>
                            <p className=" text-sm text-[#667085]">Partner with us as an auto dealer</p>

                        </div>
                    </div>
                </AccordionContent>
                <AccordionContent className="">
                    <div className="flex items-center justify-start gap-x-3" onClick={() => onClick("/repair-hub")}>
                        <div className=" rounded-full flex items-center justify-center bg-[#F0F5FB] p-2">
                            {NavIcons.Repair}
                        </div>
                        <div className=" flex flex-col items-start">
                            <h1 className=" text-base font-semibold">Repair Hubs</h1>
                            <p className=" text-sm text-[#667085]">Simplify your workshop operation</p>

                        </div>
                    </div>
                </AccordionContent>

            </AccordionItem>


            <AccordionItem value="item-4 border-none" className="w-full border-none">
                <AccordionTrigger className=" text-sm font-semibold">Pricing</AccordionTrigger>
                <AccordionContent className="  ">
                    Introduction
                </AccordionContent>

            </AccordionItem>
            <AccordionItem value="item-5 border-none" className="w-full border-none">
                <AccordionTrigger className=" text-sm font-semibold">Resources</AccordionTrigger>
                <AccordionContent className="  ">
                    <ScrollArea className="h-[300px] ">
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
                    </ScrollArea>
                </AccordionContent>

            </AccordionItem>
        </Accordion>

    )
};

export default MobAcc;