import React, { useState, useEffect, useRef } from "react";

interface NavbarProps {
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    sidebarOpen: boolean;
}

interface DropdownItem {
    avatar?: string;
    title: string;
    description: string;
    time?: string;
}

interface DropdownIconProps {
    iconClass: string;
    dropdownItems: DropdownItem[];
    type: 'notification' | 'chat' | 'extras'; // Add 'extras' type
    grid?: boolean; // Add grid prop for extras dropdown
}

const DropdownIcon: React.FC<DropdownIconProps> = ({ iconClass, dropdownItems, type, grid = false}) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const iconRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                iconRef.current &&
                dropdownRef.current &&
                !iconRef.current.contains(event.target as Node) &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const title = type === 'notification' ? 'Notifications' : type === 'chat' ? 'Chats' : 'Extras';
    const newItemLabel = type === 'notification' ? 'New' : type === 'chat' ? 'New Messages' : ''; // No new label for extras
    const viewAllLabel = type === 'notification' ? 'View All Notifications' : type === 'chat' ? 'View All Chats' : 'View All Options';

    return (
        <div className="DropdownComponent relative">
            <div
                className="notification-icon mx-[5px] w-[40px] h-[40px] bg-transparent border rounded-xl hover:rounded-[50%] transition-all cursor-pointer relative"
                onClick={toggleDropdown}
                ref={iconRef}
            >
                <i className={`${iconClass} w-full h-full text-white flex items-center justify-center text-[27px] font-[500] absolute`}></i>
                {dropdownItems.length > 0 && (
                    <span className="bubble absolute w-[20px] h-[20px] rounded-[30%] text-[12px] font-bold flex items-center justify-center text-white bg-[red] right-[-5px] top-[-5px]">
                        {dropdownItems.length}
                    </span>
                )}
            </div>
            {dropdownVisible && (
                <div
                    className="z-10 absolute top-[55px] right-[20px] w-[350px] bg-auth-form-color shadow-lg rounded-lg overflow-hidden"
                    ref={dropdownRef}
                >
                    <div className="p-3 text-white font-semibold border-b border-gray-300 flex justify-between items-center">
                        {title}
                        {newItemLabel && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{dropdownItems.length} {newItemLabel}</span>}
                    </div>
                    <ul className={`max-h-[300px] overflow-y-auto ${grid ? 'grid grid-cols-3 gap-2 p-2' : ''}`}> {/* Grid added here */}
                        {dropdownItems.map((item, index) => (
                            <li key={index} className={`flex items-start gap-3 p-3 border-b border-gray-200 hover:bg-gray-100 ${grid ? 'rounded-lg overflow-hidden flex-col items-center justify-center text-center border border-gray-300' : ''}`}> {/* Grid item styling */}
                                {item.avatar ? (
                                    <img src={item.avatar} alt={item.title} className={`w-10 h-10 rounded-full ${grid ? 'mb-2' : ''}`} />
                                ) : (
                                    <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-[#4d4d4d] text-[#dcdcdc] font-bold ${grid ? 'mb-2' : ''}`}>
                                        {item.title[0].toUpperCase()}
                                    </div>
                                )}
                                <div className="flex-1">
                                    <p className="font-medium text-gray-100">{item.title}</p>
                                    <p className="text-sm text-gray-400">{item.description}</p>
                                    <p className="text-xs text-gray-600">{item.time}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full text-center py-2 text-white font-medium hover:bg-gray-200">{viewAllLabel}</button>
                </div>
            )}
        </div>
    );
};

const Navbar: React.FC<NavbarProps> = ({ setSidebarOpen, sidebarOpen }) => {
    const notifications: DropdownItem[] = [
        { avatar: "https://randomuser.me/api/portraits/men/10.jpg", title: "Daisy Anderson", description: "The standard chunk of lorem", time: "5 sec ago" },
        { title: "New Orders", description: "You have received new orders", time: "2 min ago" },
        { title: "New Orders", description: "You have received new orders", time: "2 min ago" },
        { avatar: "https://randomuser.me/api/portraits/women/5.jpg", title: "Althea Cabardo", description: "Many desktop publishing packages", time: "14 sec ago" },
        { title: "Account Created", description: "Successfully created new email", time: "28 min ago" },
        { title: "New Product Approved", description: "Your new product has approved", time: "2 hrs ago" },
        { avatar: "https://randomuser.me/api/portraits/women/20.jpg", title: "Katherine Pechon", description: "Making this the first true generator", time: "15 min ago" },
    ];

    const chats: DropdownItem[] = [
        { avatar: "https://randomuser.me/api/portraits/men/2.jpg", title: "John Doe", description: "Hey, how are you?", time: "1 min ago" },
        { title: "Jane Smith", description: "Meeting today?", time: "5 min ago" },
    ];

    const extras: DropdownItem[] = [
        { title: "Item 1", description: "Description 1" },
        { title: "Item 2", description: "Description 2" },
        { title: "Item 3", description: "Description 3" },
        { title: "Item 4", description: "Description 4" },
        { title: "Item 5", description: "Description 5" },
        { title: "Item 6", description: "Description 6" },
        // ... more extras items
    ];

    return (
        <div className="w-[100%] h-[55px] bg-auth-form-color flex justify-between items-center pl-2 pr-5">
            <div
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="minimize-btn mx-[5px] w-[45px] h-[45px] bg-frontier-light-blue rounded-xl hover:rounded-[50%] transition-all"
            >
                <i className="bx bx-menu w-full h-full text-white flex items-center justify-center text-[30px] font-[500] cursor-pointer"></i>
            </div>
            <div className="right-navbar w-auto h-full flex items-center">
                <DropdownIcon iconClass="bx bxs-bell-ring" dropdownItems={notifications} type="notification" />
                <DropdownIcon iconClass="bx bxs-chat" dropdownItems={chats} type="chat" />
                <DropdownIcon iconClass="bx bx-grid-alt" dropdownItems={extras} type="extras" grid={true} /> 
            </div>
        </div>
    );
};

export default Navbar;