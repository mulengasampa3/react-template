import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    icon?: string;
    message?: string;
    onConfirm?: () => void;
    confirmButtonText: string;
    cancelButtonText: string;
    children?: ReactNode;  // To support custom content like forms
    footerContent?: ReactNode;  // Custom footer content
}

const Modal: React.FC<ModalProps> = ({
    isOpen, 
    onClose,
    title,
    icon,
    message,
    onConfirm,
    confirmButtonText,
    cancelButtonText,
    children,
    footerContent,
}) => {
    if (!isOpen) return null;

    return (
        <div className="modal fixed inset-0 flex items-center justify-center z-[10000] bg-black bg-opacity-50">
            <div className="modal-dialog bg-white flex flex-col items-center justify-center animate-bounceIn rounded-lg shadow-lg pt-5 pr-4 pb-7 pl-4 w-full sm:max-w-[450px] sm:h-auto h-screen">
                {/* Modal Header */}
                <div className="modal-header">
                    <h3 className="modal-title text-[30px] font-[600] text-frontier-light-blue">{title}</h3>
                </div>

                {/* Modal Body */}
                <div className="modal-body flex flex-col items-center">
                    {icon && <i className={`${icon} text-[5.25rem] text-frontier-light-blue`}></i>}
                    {message && <p className="mb-4">{message}</p>}
                    {children && <div className="w-full">{children}</div>}  {/* For custom content like forms */}
                </div>

                {/* Modal Footer */}
                <div className="modal-footer flex justify-end space-x-4">
                    {footerContent || (
                        <>
                            {onConfirm && (
                                <button
                                    onClick={() => {
                                        onConfirm();
                                        onClose();
                                    }}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                >
                                    {confirmButtonText}
                                </button>
                            )}
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                            >
                                {cancelButtonText}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
