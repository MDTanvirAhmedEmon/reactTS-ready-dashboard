import totalUser from '../../assets/dashboard/total-user.png'
import totalIncome from '../../assets/dashboard/total-income.png'
import goldUser from '../../assets/dashboard/gold-user.png'
import platinumUser from '../../assets/dashboard/platinum-user.png'
import daimondUser from '../../assets/dashboard/daimond-user.png'

const Dashboard = () => {
    return (
        <>
            <div className=' grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4'>

                <div className='bg-[#fefefe] rounded-lg px-8 py-5 text-center shadow-md'>
                    <h2 className=' mb-3 text-xl font-semibold text-[#4E4E4E]'>Total User</h2>
                    <img className=' mx-auto mb-3 w-12' src={totalUser} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>852,650</h2>
                </div>

                <div className='bg-[#fefefe] rounded-lg px-8 py-5 text-center shadow-md'>
                    <h2 className=' mb-3 text-xl font-semibold text-[#4E4E4E]'>Income</h2>
                    <img className=' mx-auto mb-3 w-12' src={totalIncome} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>$82650</h2>
                </div>

                <div className='bg-[#fefefe] rounded-lg px-8 py-5 text-center shadow-md'>
                    <h2 className=' mb-3 text-xl font-semibold text-[#4E4E4E]'>Gold User</h2>
                    <img className=' mx-auto mb-3 w-12' src={goldUser} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>852,650</h2>
                </div>

                <div className='bg-[#fefefe] rounded-lg px-8 py-5 text-center shadow-md'>
                    <h2 className=' mb-3 text-xl font-semibold text-[#4E4E4E]'>Total User</h2>
                    <img className=' mx-auto mb-3 w-12' src={platinumUser} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>252,650</h2>
                </div>

                <div className='bg-[#fefefe] rounded-lg px-8 py-5 text-center shadow-md'>
                    <h2 className=' mb-3 text-xl font-semibold text-[#4E4E4E]'>Diamond User </h2>
                    <img className=' mx-auto mb-3 w-12' src={daimondUser} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>22,650</h2>
                </div>

            </div>

        </>
    );
};

export default Dashboard;