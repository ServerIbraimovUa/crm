"use client";

import Loader from "@/components/admin-panel/Loader";
import Login from "@/components/admin-panel/Login";
import Navbar from "@/components/admin-panel/Navbar";
import Sidebar from "@/components/admin-panel/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const isLoading = useAppSelector((state) => state.loadingReducer);
    const { data: session } = useSession();

    if (!session?.user) {
        return <Login />;
    }
    return (
        <div className="flex">
            <Sidebar />

            <div className="w-full h-full">
                <Navbar />

                <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
            </div>

            {isLoading && <Loader />}
        </div>
    );
}
