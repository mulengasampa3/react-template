import { ModalPropTypes } from "../../types/uiComponents.types";
import { cn } from "../../utils/twmerge";

function Modal({
    open,
    title,
    children,
    size = "default",
    scrollable,
    animated = "sm:animate-fadeInUp animate-none",
    closeModal }: ModalPropTypes) {
    const handleClose = () => {
        if (closeModal) {
            closeModal();
        }
    };

    return (
        // 
        <div className={`modal ${open ? "flex" : "hidden"} fixed w-screen h-screen justify-center top-0 left-0 z-[100] items-center bg-black bg-opacity-50 backdrop-blur-lg`}>
            <div
                className={cn(
                    "modal-dialog bg-white rounded-lg  no-scrollbar",
                    {
                        "w-full max-w-sm": size === "sm",
                        "w-full max-w-[800px]": size === "lg",
                        "w-full max-w-[500px]": size === "default",
                        "w-full max-w-[1140px]": size === "xl",
                        "w-[95%] h-[95%] max-w-none": size === "fullscreen",
                    }, animated 
                )}
            >
                {/* Modal header */}
                <div className="flex justify-between items-center px-2 bg-green-200 rounded-t-lg py-1 border-b">
                    <h5 className="text-xl font-semibold text-green-500">{title || ""}</h5>
                    <button
                        title="close"
                        type="button"
                        className=" text-white w-10 h-10 flex items-center justify-center border-[3px] border-white hover:bg-gray-300 hover:text-gray-900 rounded-[30%]"
                        onClick={() => handleClose()}
                    >
                        <i className="bx bx-x text-[30px]"></i>
                    </button>
                </div>

                {/* Modal body */}
                <div className={cn("",
                    scrollable? "max-h-[80vh] overflow-y-auto" : "h-full",
                )}>
                    {children || null}
                </div>
            </div>
        </div>
    );
}

export default Modal;
