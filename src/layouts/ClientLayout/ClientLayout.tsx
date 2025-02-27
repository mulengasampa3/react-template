import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from './topbar'

const ClientLayout: React.FC = () => {
    return (
        <div className="layout flex flex-col-reverse sm:flex-col items-center h-screen w-screen relative">
            {/* Topbar Component */}
            <Topbar />

            {/* Main Content */}
            <main className={`duration-300 h-full md:px-[10rem] px-0 overflow-auto transition-all  w-full z-10`}>
                <Outlet />
            </main>
        </div>
    );
};

export default ClientLayout;