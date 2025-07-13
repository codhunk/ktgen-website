import { createContext, useContext } from "react";

// Creating ToastContext
export const ToastContext = createContext();

// Creating UseToastContext Hook
export const useToastContext = () => {
    return useContext(ToastContext);
}