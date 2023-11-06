import { Facebook, Instagram, Twitter, Youtube, YoutubeIcon } from "lucide-react";
import React from "react";
import LogoHeaderDark from "./logo-header";
import Icons from "./icons/icons-svg";

const Footer = () => {
    return (
        <div className=" flex flex-col lg:flex-row  items-center space-y-4  md:space-y-0 justify-between mt-20 lg:px-20 mb-10 py-6">
            <div className="flex items-center justify-center  gap-2">
                <LogoHeaderDark />
                <p className=" text-text text-sm">2023 Reown. All Right Reserved</p>
            </div>
            <div className="flex items-center justify-center  text-text xl:gap-x-16 text-sm gap-x-9" >
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
            </div>
            <div className="flex items-center justify-center text-black space-x-2">
                <h1 className=" flex items-center justify-center border-2 border-black rounded-full p-2 h-8 w-8 fill-black">
                    {Icons.Twitter}
                </h1>
                <h1 className=" flex items-center justify-center border-2 border-black rounded-full p-2 h-8 w-8 fill-black">
                    {Icons.Instagram}
                </h1>
                <h1 className=" flex items-center justify-center border-2 border-black rounded-full p-2 h-8 w-8 fill-black">
                    {Icons.Youtube}
                </h1>
                <h1 className=" flex items-center justify-center border-2 border-black rounded-full p-2 h-8 w-8 fill-black">
                    {Icons.Facebook}
                </h1>
            </div>

        </div>
    );
};

export default Footer;