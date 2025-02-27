import Breadcrumb from "../../components/uiComponents/breadcrumb";

export default function Dashboard() {
    return (
        // From the layout this is our main container
        <div className="h-full">
            {/* Header Section */}
            <div className="w-full h-[60px] flex items-center sm:px-4 px-4">
                {/* Breadcrumbs, Page Title, Search, and Other Buttons */}
                <div className="flex items-center gap-2 w-full">
                    <div className="flex-1 flex-col">
                        <h2 className="font-extrabold text-2xl leading-4 text-62">DASHBOARD</h2>
                        {/* Breadcrumbs / Page Title */}
                        <Breadcrumb items={[
                            { label: "Home", path: "/" },
                            { label: "Dashboard" }
                        ]} />
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="wrapper border w-full h-[calc(100%_-_60px)] gap-x-2 flex flex-col md:flex-row items-center md:items-start p-1">
                
            </div>
        </div>

    );
}
