import React, { useState, useEffect, TouchEvent } from 'react';

interface Tab {
    label: string;
    content: string;
}

const Tabs: React.FC = () => {
    const tabs: Tab[] = [
        { label: 'New Loan', content: 'New Loan' },
        { label: 'Documentation', content: 'Documentation' },
        { label: 'Due Diligence', content: 'Due Diligence' },
        { label: 'Approved', content: 'Approved' },
        { label: 'Payment', content: 'Payment' },
        { label: 'Disqualified', content: 'Disqualified' },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const totalTabs = tabs.length;

    // Swipe handling
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const handleTabChange = (direction: 'left' | 'right') => {
        setActiveTab((prev) => {
            if (direction === 'left') return prev > 0 ? prev - 1 : totalTabs - 1;
            if (direction === 'right') return prev < totalTabs - 1 ? prev + 1 : 0;
            return prev;
        });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') handleTabChange('left');
        if (event.key === 'ArrowRight') handleTabChange('right');
    };

    const handleTouchStart = (e: TouchEvent) => setTouchStart(e.touches[0].clientX);
    const handleTouchEnd = () => {
        if (touchStart !== null && touchEnd !== null) {
            const swipeDistance = touchStart - touchEnd;
            if (swipeDistance > 50) handleTabChange('right'); // Swipe left
            if (swipeDistance < -50) handleTabChange('left'); // Swipe right
        }
        setTouchStart(null);
        setTouchEnd(null);
    };

    useEffect(() => {
        // Add keyboard event listener
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="w-full bg-white h-full">
            {/* Tab Navigation */}
            <div className=" flex bg-green-500 h-[70px] w-full overflow-x-auto justify-between px-7 items-center">
                <div className="flex gap-2">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`min-w-[100px] sm:text-[14px] text-[12px] rounded ${
                                activeTab === index
                                    ? 'bg-frontier-light-blue text-white'
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="filter-container flex  ">
                    <div className="search h-auto relative">
                        <input
                            type="text"
                            placeholder="Filter..."
                            className="block w-[200px] h-[40px] p-2 bg-grey-form-input text-form-text border-none pl-4 rounded-[30px]  placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-frontier-light-blue"
                        />
                        <button
                            className="absolute w-[37px] h-[37px] flex items-center bg-transparent border-none justify-center right-[1%] top-[9.5px] rounded-full text-frontier-dark-blue hover:text-frontier-light-blue transition-all duration-100 ease-linear hover:bg-gray-300 focus:outline-none"
                        >
                            <i className='bx bx-search-alt text-[25px] text'></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="bg-blue-500 justify-center flex w-full h-[calc(100%-70px)]">
                <div className="button-container flex flex-col justify-center">
                    <button
                        onClick={() => handleTabChange('left')}
                        className="w-[50px] h-full sm:flex hidden items-center justify-center bg-gray-200 text-frontier-light-blue hover:text-frontier-dark-blue transition-all duration-100 ease-linear focus:outline-none"
                    >
                        <i className='bi bi-chevron-compact-left text-[70px] text' ></i>
                    </button>
                </div>

                <div
                    className=" bg-orange-500 sm:w-[calc(100%-128px)] w-full overflow-x-auto  flex flex-col items-center justify-center"
                    onTouchStart={handleTouchStart}
                    onTouchMove={(e) => setTouchEnd(e.touches[0].clientX)}
                    onTouchEnd={handleTouchEnd}
                >
                    <header className="record-navigation h-[60px] w-full bg-frontier-light-blue">

                    </header>
                    
                    {tabs[activeTab].content}
                </div>

                <div className="button-container flex flex-col justify-center">
                    <button
                        onClick={() => handleTabChange('right')}
                        className="w-[50px] h-full sm:flex hidden items-center justify-center bg-gray-200 hover:text-frontier-dark-blue transition-all duration-100 ease-linear hover:bg-gray-300 focus:outline-none"
                    >
                        <i className='bi bi-chevron-compact-right text-[70px] text-frontier-light-blue' ></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
