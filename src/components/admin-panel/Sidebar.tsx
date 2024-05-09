"use client";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        path: "/admin/dashboard",
    },
    {
        title: "Products",
        icon: <RiShoppingCartLine />,
        path: "/admin/products",
    },
    {
        title: "Accounts",
        icon: <MdManageAccounts />,
        path: "#",
    },
    {
        title: "Transactions",
        icon: <GrTransaction />,
        path: "#",
    },
    {
        title: "Analytics",
        icon: <IoAnalytics />,
        path: "#",
    },
    {
        title: "Settings",
        icon: <IoSettings />,
        path: "#",
    },
];

const Sidebar = () => {
    const pathName = usePathname();
    return (
        <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
            <div className="flex items-center gap-4">
                <img className="size-12 rounded-lg" src="/admin.png" alt="logo" />
                <h2 className="text-[20px] font-semibold">Admin Panel</h2>
            </div>

            <ul className="space-y-4 mt-6">
                {menus.map((item) => (
                    <li key={item.title}>
                        <Link
                            href={item.path}
                            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${
                                pathName === item.path ? "bg-pink text-white" : "bg-gray-200"
                            }`}
                        >
                            <div className="text-[20px] ">{item.icon}</div>
                            <p>{item.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
