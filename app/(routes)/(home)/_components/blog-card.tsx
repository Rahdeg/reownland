import Image from "next/image";
import React from "react";

const ourBlog = [
    {
        id: 1,
        info: "olivia Rhiye . 20 Jan 2022",
        title: "Migrating to Linear 101",
        description: <p className="text-text text-base  w-[219px] h-[96px]">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</p>,
        imgSrc: "/home/wcp.png"
    },
    {
        id: 2,
        info: "olivia Rhiye . 20 Jan 2022",
        title: "Migrating to Linear 101",
        description: <p className="text-text text-base  w-[219px] h-[96px]">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</p>,
        imgSrc: "/home/wcp.png"
    },
    {
        id: 3,
        info: "olivia Rhiye . 20 Jan 2021",
        title: "Building your API Stack",
        description: <p className="text-text text-base  w-[219px] h-[96px]">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...</p>,
        imgSrc: "/home/wcp2.png"
    }
]

const BlogCard = () => {

    return (
        <>
            <div className=" md:hidden  w-[400px] h-[400px]  mt-8 flex flex-row  items-center gap-x-2 overflow-x-auto pb-2   ">
                {
                    ourBlog && ourBlog.map((blog) => (
                        <div className=" flex flex-col md:flex-row  items-start justify-between gap-y-4 gap-x-3 " key={blog.id}>
                            <div className=" w-[320px] h-[200px] relative">
                                <Image alt="cp" src={blog.imgSrc} fill className=" rounded-2xl" />

                            </div>
                            <div className=" ">
                                <p className=" text-[#0063B0]  text-sm">{blog.info}</p>
                                <h1 className=" mb-3 text-lg text-black font-bold mt-3">{blog.title}</h1>
                                {blog.description}

                            </div>
                        </div>
                    ))
                }
            </div>
            <div className=" hidden md:block  lg:w-[564px] lg:h-[200px] space-y-5 mt-8   ">
                {
                    ourBlog && ourBlog.map((blog) => (
                        <div className=" flex flex-col md:flex-row  items-start justify-between gap-y-4 gap-x-3 " key={blog.id}>
                            <div className=" w-[320px] h-[200px] relative">
                                <Image alt="cp" src={blog.imgSrc} fill className=" rounded-2xl" />

                            </div>
                            <div className=" ">
                                <p className=" text-[#0063B0]  text-sm">{blog.info}</p>
                                <h1 className=" mb-3 text-lg text-black font-bold mt-3">{blog.title}</h1>
                                {blog.description}

                            </div>
                        </div>
                    ))
                }
            </div>
        </>

    );
};

export default BlogCard;