/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


type Tab = "category" | "materials";

const Manage = () => {
    const [activeTab, setActiveTab] = useState<Tab>("category");



    return (
        <div className=" bg-white rounded-md px-3 py-4 min-h-screen">
            <div className=" mb-5">
                <h2 className="text-md md:text-xl font-semibold ">Subscription</h2>

            </div>
            <div className=" flex justify-between gap-4">
                <div className=" flex gap-4">
                    <button
                        onClick={() => setActiveTab("category")}
                        className={`cursor-pointer px-8 py-2 rounded-md  ${activeTab === "category"
                            ? "text-primary bg-primaryColor text-white"
                            : " border border-primaryColor"
                            }`}
                    >
                        Category
                    </button>
                    <button
                        onClick={() => setActiveTab("materials")}
                        className={`cursor-pointer px-8 py-2 rounded-md  ${activeTab === "materials"
                            ? "text-primary bg-primaryColor text-white"
                            : " border border-primaryColor"
                            }`}
                    >
                        Materials
                    </button>
                </div>
                <div>
                    <button className=" bg-primaryColor py-2 px-4 rounded-md cursor-pointer text-white">+ Add</button>
                </div>
            </div>

        </div>
    );
};

export default Manage;