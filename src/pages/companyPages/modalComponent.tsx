import React, { useState } from "react";
import Breadcrumb from "../../components/molecules/breadcrumb";
import Modal from "../../components/organisms/modal"; // Import the Modal component

export default function ModalDemo() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="h-full">
            {/* Header Section */}
            <div className="w-full h-[60px] flex items-center sm:px-4 px-4">
                <div className="flex items-center gap-2 w-full">
                    <div className="flex-1 flex-col">
                        <h2 className="font-extrabold text-2xl leading-4 text-62 uppercase">Modals</h2>
                        <Breadcrumb
                            items={[
                                { label: "Home", path: "/" },
                                { label: "Modals" },
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="wrapper w-full h-[calc(100%_-_60px)] gap-x-2 flex flex-col md:flex-row items-center md:items-start p-4">
                {/* Button to Open Modal */}
                <button
                    className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-blue-700"
                    onClick={() => setModalOpen(true)}
                >
                    Open Modal
                </button>
            </div>

            {/* Modal Component */}
            <Modal
                open={modalOpen}
                closeModal={() => setModalOpen(false)}
                title="Modal Component"
                size="default"
                scrollable
                animated="sm:animate-bounceInDown animate-none"
            >
                <p className="">
                    This is an example modal integrated into the Dashboard page.
                </p>
                <p>You can use this to display information, forms, or other content.</p>
            </Modal>
        </div>
    );
}
