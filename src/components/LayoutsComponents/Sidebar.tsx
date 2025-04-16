import { Layout, Menu, } from 'antd';
import { Link } from 'react-router-dom';
// import logo from '../../assets/logo.svg'
import logo from '../../assets/logo.svg'
// import dashboard from '../../assets/sideBar/dashboard.svg'
// import income from '../../assets/sideBar/income.svg'
// import dashboardActive from '../../assets/sideBar/active-dashboard.svg'
import { CiLogout } from 'react-icons/ci';
// import { useLocation } from 'react-router-dom';

const { Sider } = Layout;

import React from 'react';
import { RiBarChartGroupedLine, RiDashboard3Line, RiSettings2Line, RiUserLine } from 'react-icons/ri';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { MdOutlineCategory } from 'react-icons/md';

interface SidebarProps {
    collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
    // const location = useLocation();


    return (
        <div className='fixed top-0 left-0 bottom-0 bg-barColor '>
            <Sider className='h-[100vh] w-[300px] bg-barColor' width={250} collapsedWidth={80} trigger={null} collapsible collapsed={collapsed}>
                <div className=' flex justify-center items-center py-7 '>
                    <img src={logo} className=' w-20' />
                </div>

                <Menu
                    mode="inline"
                    className='px-2 custom-menu'
                    // selectedKeys={[location.pathname]}
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            // icon: <img src={dashboard} className='menu-icon text-primaryColor' />,
                            icon: <RiDashboard3Line className='w-6 h-6' />,
                            label: <Link className=' text-[16px]' to={`/`}>Dashboard</Link>,
                        },
                        {
                            key: '2',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            // icon: <img src={income} className='menu-icon' />,
                            icon: <IoAnalyticsOutline className='w-6 h-6' />,
                            label: <Link className=' text-[16px]' to={`/income`}>Income</Link>,
                        },
                        {
                            key: '3',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            icon: <RiBarChartGroupedLine className='w-6 h-6' />,
                            label: <Link className=' text-[16px]' to={`/income`}>Subscriptions</Link>,
                        },
                        {
                            key: '4',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            icon: <RiUserLine className='w-6 h-6' />,
                            label: <Link className=' text-[16px]' to={`/user-details`}>User Details</Link>,
                        },
                        {
                            key: '5',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            icon: <MdOutlineCategory className='w-6 h-6' />,
                            label: <Link className=' text-[16px]' to={`/income`}>Manage</Link>,
                        },
                        {
                            key: '6',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            icon: <RiSettings2Line className='w-6 h-6' />,
                            label: <p className=' text-[16px]'>Settings</p>,
                            children: [
                                {
                                    key: "6-1",
                                    label: <Link className={``} to={`/settings/profile`}>Profile</Link>,
                                },
                                {
                                    key: "6-2",
                                    label: <Link className={``} to={`/settings/about-us`}>About Us</Link>,
                                },
                                {
                                    key: "6-3",
                                    label: <Link className={``} to={`/settings/privacy-policy`}>Privacy Policy</Link>,
                                },
                                {
                                    key: "6-4",
                                    label: <Link className={``} to={`/settings/terms-and-condtion`}>Terms And Condition</Link>,
                                },
                            ]
                        },
                        // {
                        //     key: '2',
                        //     icon: <img src={userManagement} className='menu-icon' />,
                        //     label: <span>User Management</span>,
                        //     children: [
                        //         {
                        //             key: "2-1",
                        //             label: <Link className={``} to={`/user-management/all-user`}>All User</Link>,
                        //         },
                        //         {
                        //             key: "2-2",
                        //             label: <Link className={``} to={`/user-management/all-donor`}>All Donor</Link>,
                        //         },
                        //     ]
                        // },
                        // {
                        //     key: '3',
                        //     icon: <img src={addSkill} className='menu-icon' />,
                        //     label: <Link to={`/add-skill-category`}>Add Skill Category</Link>,
                        // },
                        // {
                        //     key: '4',
                        //     icon: <img src={addAudio} className='menu-icon' />,
                        //     label: <Link to={`/add-audio-topic`}>Add Audio Topic</Link>,
                        // },
                        // {
                        //     key: '5',
                        //     icon: <img src={reportManagement} className='menu-icon' />,
                        //     label: <Link to={`/report-management`}>Report Management</Link>,
                        // },
                        // {
                        //     key: '6',
                        //     icon: <img src={makeAdmin} className='menu-icon' />,
                        //     label: <Link to={`/make-admin`}>Make Admin</Link>,
                        // },
                        // {
                        //     key: '7',
                        //     icon: <img src={settings} className='menu-icon' />,
                        //     label: <sapn>Settings</sapn>,
                        //     children: [
                        //         {
                        //             key: "7-1",
                        //             label: <Link className={``} to={`/settings/about-us`}>About Us</Link>,
                        //         },
                        //         {
                        //             key: "7-2",
                        //             label: <Link className={``} to={`/settings/contact-us`}>Contact Us</Link>,
                        //         },
                        //         {
                        //             key: "7-3",
                        //             label: <Link className={``} to={`/settings/privacy-policy`}>Privacy Policy</Link>,
                        //         },
                        //         {
                        //             key: "7-4",
                        //             label: <Link className={``} to={`/settings/terms-and-condtion`}>Terms And Condition</Link>,
                        //         },
                        //     ]
                        // },
                    ]}
                />
            </Sider>
            <div className="flex justify-center items-center relative">
                <Link to="/auth/login" className="w-full flex justify-center">
                    <div
                        className="absolute bottom-12 w-[80%] py-2 bg-[#f6f6f6] hover:bg-gray-100 shadow-md rounded-lg flex justify-center items-center gap-3 cursor-pointer transition-all duration-200"
                    >
                        <CiLogout className="w-6 h-6 text-[#222]" />
                        <p className="text-base font-medium text-[#222]">Log Out</p>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Sidebar;