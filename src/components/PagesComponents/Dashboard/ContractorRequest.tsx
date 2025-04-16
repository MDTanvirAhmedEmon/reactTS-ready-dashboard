/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";

interface Name {
    firstName: string;
    lastName: string;
}

interface AdminData {
    _id: string;
    name: Name;
    email: string;
    number: number,
    location: string,
    role: string;
}

interface AdminMeta {
    limit: number;
    total: number;
}

interface AdminDataSource {
    data: AdminData[];
    meta: AdminMeta;
}


const ContractorRequest: React.FC = () => {

    const onFinish = (values: any): void => {
        console.log(values);
    };

    // Admin data
    const adminData: AdminDataSource = {
        data: [
            {
                _id: "1",
                name: {
                    firstName: "John",
                    lastName: "Doe",
                },
                email: "john.doe@example.com",
                number: 8852215615,
                location: "Dkaka, Bangladesh",
                role: "User",
            },
            {
                _id: "2",
                name: {
                    firstName: "Jane",
                    lastName: "Smith",
                },
                email: "jane.smith@example.com",
                number: 88452215615,
                location: "Dkaka, Bangladesh",
                role: "Admin",
            },
            {
                _id: "3",
                name: {
                    firstName: "Michael",
                    lastName: "Johnson",
                },
                email: "michael.johnson@example.com",
                number: 8852215615,
                location: "Dkaka, Bangladesh",
                role: "User",
            },
        ],
        meta: {
            limit: 10,
            total: 3,
        },
    };

    // Define columns with types
    const columns = [
        {
            title: "S No.",
            dataIndex: "id",
            render: (_: any, record: AdminData) => <span>{record?._id}</span>,
        },
        {
            title: "Name",
            dataIndex: "name",
            render: (_: any, record: AdminData) =>
                <div className=' flex items-center gap-2'>
                    <img
                        src={`https://avatar.iran.liara.run/public/${record?._id}`}
                        alt=""
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                        <span>{record?.name?.firstName} {record?.name?.lastName}</span>
                    </div>
                </div>,
        },
        {
            title: "Email",
            dataIndex: "email",
            render: (_: any, record: AdminData) => <span>{record?.email}</span>,
        },
        {
            title: "Contact Number",
            dataIndex: "number",
            render: (_: any, record: AdminData) => <span>{record?.number}</span>,
        },
        {
            title: "Location",
            dataIndex: "location",
            render: (_: any, record: AdminData) => <span>{record?.location}</span>,
        },
        // {
        //     title: "Action",
        //     render: (_: any, record: AdminData) => (
        //         <div className="flex items-center">
        //             <Button
        //                 type="text"
        //                 className="w-fit px-2"
        //             >
        //                 <FiTrash size={20} className="text-red-400 " />
        //             </Button>
        //         </div>
        //     ),
        // },
    ];

    return (
        <>
            <div className="flex justify-between items-center mt-5">
                <h2 className="text-md md:text-xl font-semibold ">Contractor Request</h2>
                <div>
                    <button
                        className="bg-primary rounded-md font-semibold cursor-pointer"
                    >
                        View All
                    </button>
                </div>
            </div>
            <Table
                columns={columns}
                className="mt-5 overflow-x-scroll xl:overflow-auto w-full bg-white"
                dataSource={adminData?.data}
                pagination={false}
                rowKey="_id"
            />
        </>
    );
};

export default ContractorRequest;
