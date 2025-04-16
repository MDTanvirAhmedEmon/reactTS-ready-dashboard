import { Input } from "antd";
import { CiSearch } from "react-icons/ci";


const Income = () => {
    return (
        <div className=" w-full min-h-[100vh] bg-white rounded-lg px-3 py-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
                <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0 ">User Details</h2>
                <div className=" w-[250px]">
                    <Input prefix={<CiSearch className=" w-6 h-6" />} className="w-[250px]" placeholder="Search" />
                </div>
            </div>
        </div>
    );
};

export default Income;