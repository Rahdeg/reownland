import React from "react";
import WorkFlow from "./work-flow";

const BuildAuto = () => {
    return (
        <div className=" flex flex-col items-center justify-center px-10  lg:px-20 xl:px-40 gap-6 mt-24">
            <h1 className=" text-black font-bold  text-2xl px-18 lg:px-64 text-center">Build for Auto Repairs Hubs of any Size with one or Multiple Branches</h1>
            <p className=" text-xs text-text px-12 lg:px-72 text-center"> Simplify your workshop operation with our end-to-end software that features an admin analytics dashboard, a personalized reporting app for each branch of your repair hub, and a personilized customer app that enhances customers satisfaction and retention </p>
            <WorkFlow />
        </div>
    );
};

export default BuildAuto;
