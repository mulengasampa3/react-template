import React, { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import '../../assets/styles/globalStyles/global.css'

const Layout: React.FC = () => {
    // State to manage sidebar open/close status
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); // Sidebar closed by default for mobile

    return (
        <div className="layout flex h-screen w-screen relative bg-dc">
            {/* Sidebar */}
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Mobile backdrop for sidebar */}
            <div
                className={`sidebar-backdrop right-0 fixed inset-y-[0px] inset-[0px] bg-black transition-opacity z-30
                            ${sidebarOpen ? "opacity-50" : "opacity-0 pointer-events-none"} lg:hidden`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            {/* Main Content */}
            <main className={`main-content fixed right-0 duration-150 h-full overflow-auto transition-all z-10 ${sidebarOpen ? 'w-full ' : 'w-[calc(100%-290px)]'} ${sidebarOpen ? 'lg:w-full lg: z-10' : 'lg:w-[calc(100%-290px)] w-dvw'} `}>
                <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
                <div className="content relative w-full py-[0.5px] h-[calc(100%-55px)]">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
