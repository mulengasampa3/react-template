import { ReactNode } from "react";

export type ModalPropTypes = {
    children?: ReactNode;
    className?: string;
    open: boolean;
    title?: string;
    closeModal: () => void;
    size?: "sm" | "lg" | "xl" | "fullscreen" | "default";
    scrollable?: boolean;
    animated?: string,
};
