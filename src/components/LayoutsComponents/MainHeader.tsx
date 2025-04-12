import { Avatar, Badge, Layout, theme } from 'antd';
import { HiOutlineBell } from 'react-icons/hi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
// import { RxHamburgerMenu } from "react-icons/rx";
const { Header } = Layout;

interface MainHeaderProps {
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    collapsed: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({ setCollapsed, collapsed }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div >
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            >
                <div className=' flex justify-between items-center pr-4  bg-barColor'>

                    {collapsed ? <RxHamburgerMenu onClick={() => setCollapsed(!collapsed)} className=' text-black w-8 h-8 cursor-pointer' /> : <RxHamburgerMenu onClick={() => setCollapsed(!collapsed)} className=' text-black w-8 h-8 cursor-pointer' />}
                    <div className=' flex items-center gap-6'>
                        <div>
                            <Link className='flex items-center' to={`/notification`}>
                                <Badge size="small" className=' cursor-pointer' count={5}>
                                    <HiOutlineBell className=' w-7 h-7' />
                                </Badge>
                            </Link>
                        </div>
                        <Link to={`/profile`}>
                            <div className=' flex items-center gap-2 cursor-pointer '>
                                <Avatar src={`https://avatar.iran.liara.run/public/24`} size={40} className=' ring-1 ring-[#1c4587]' />
                                <p className=' text-black font-semibold'>Side Leader</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </Header>
        </div>
    );
};

export default MainHeader;