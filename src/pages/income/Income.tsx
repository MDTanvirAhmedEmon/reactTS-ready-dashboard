import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
import totalBalance from '../../assets/income/total-balance.png'
import coin from '../../assets/income/coin.png'

const Income = () => {
    return (
        <div className=" w-full min-h-[100vh] bg-white rounded-lg px-3 py-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
                <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0 ">User Details</h2>
                <div className=" w-[250px]">
                    <Input prefix={<CiSearch className=" w-6 h-6" />} className="w-[250px]" placeholder="Search" />
                </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
                
                <div className=" bg-[#42004A] rounded-lg px-5 py-8">
                    <img src={totalBalance} className=" w-14 mb-4" alt="icon" />
                    <h2 className="text-white text-xl xl:text-2xl mb-3">Total Balance</h2>
                    <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-semibold">$2584.54</h2>
                </div>
                <div className=" bg-[#5E095E] rounded-lg px-5 py-8">
                    <img src={coin} className=" w-14 mb-4" alt="icon" />
                    <h2 className="text-white text-xl xl:text-2xl mb-3">Gold-Earned</h2>
                    <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-semibold">$35804.54</h2>
                </div>
                <div className=" bg-[#5E095E80] rounded-lg px-5 py-8">
                    <img src={coin} className=" w-14 mb-4" alt="icon" />
                    <h2 className="text-white text-xl xl:text-2xl mb-3">Platinum-Earned</h2>
                    <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-semibold">$78584.54</h2>
                </div>
                <div className=" bg-[#CDB3CD] rounded-lg px-5 py-8">
                    <img src={coin} className=" w-14 mb-4" alt="icon" />
                    <h2 className="text-white text-xl xl:text-2xl mb-3">Diamond-Earned</h2>
                    <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-semibold">$92584.54</h2>
                </div>

            </div>

        </div>
    );
};

export default Income;