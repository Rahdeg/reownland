import { Menu } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import MobileNav from "./mobile-nav";


const MobileToggle = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className=" md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 flex gap-0 w-full">
                <div className="w-full mt-12">
                    <MobileNav />
                </div>

            </SheetContent>
        </Sheet>
    )
};

export default MobileToggle;