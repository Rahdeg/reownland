import React from "react";

import { Menu } from "lucide-react";
import LogoHeaderDark from "../logo-header";
import { Button } from "../ui/button";

const Header = () => {
    return <div className="fixed w-full z-50 flex  flex-col px-10  lg:px-20 xl:px-40 py-4 bg-[#FBFBFB] border-b-2 text-text">
        <div className=" flex items-center justify-between">
            <LogoHeaderDark />
            <div className=" hidden lg:flex items-center justify-center space-x-6">
                <p> About</p>
                <p> Features</p>
                <p> Customers</p>
                <p>Pricing</p>
                <p>Resources</p>
            </div>
            <div className=" hidden lg:flex items-center justify-center space-x-2 ">
                <Button size="lg" variant="blueb" className="rounded-full text-white">Book a Demo</Button>
                <Button size="lg" variant="outline" className="rounded-full">Try for Free</Button>
            </div>
            <div className="flex lg:hidden">
                <Menu />
            </div>
        </div>
    </div>;
};

export default Header;
