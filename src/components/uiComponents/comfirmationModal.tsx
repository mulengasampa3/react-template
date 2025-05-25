import React, { useEffect } from "react";

interface ConfirmationModalProps {
    isOpen: boolean;
    title: string;
    description: string;
    confirmLabel: string;
    iconName?: string; // Optional prop for the icon name
    iconColor?: string; // Optional prop for the icon color
    buttonColor?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    title,
    description,
    confirmLabel,
    iconName = "bi-exclamation-circle", // Default icon
    iconColor = "text-company-color-primary", // Default color
    buttonColor = "bg-red-500",
    onConfirm,
    onCancel,
}) => {
    // Handle keydown for Enter and Escape
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                event.preventDefault(); // Prevent accidental form submission if inside a form
                onConfirm();
            } else if (event.key === "Escape") {
                event.preventDefault();
                onCancel();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onConfirm, onCancel]);

    if (!isOpen) return null;

    return (
        <div className="modal fixed inset-0 flex items-center justify-center z-[10000] bg-black bg-opacity-50">
            <div className="modal-dialog bg-white flex flex-col items-center justify-center sm:animate-bounceIn animate-none rounded-lg shadow-lg pt-5 pr-4 pb-7 pl-4 w-full sm:max-w-[450px] sm:h-auto h-screen">
                {/* Modal Header */}
                <div className="modal-header">
                    <h3 className="modal-title text-[30px] font-[600] text-company-color-primary">{title}</h3>
                </div>

                {/* Modal Body */}
                <div className="modal-body flex flex-col items-center">
                    <i className={`${iconName} text-[5.25rem] ${iconColor}`}></i>
                    <p className="mb-4 text-center">{description}</p>
                </div>

                {/* Modal Footer */}
                <div className="modal-footer flex justify-end space-x-4">
                    <button
                        onClick={onConfirm}
                        className={`px-4 py-2 text-white text-sm rounded hover:bg-red-600 transition ${buttonColor}`}
                    >
                        {confirmLabel}
                    </button>
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;