// Toast Context Hook
import { ToastContext } from "./ToastContext";

/* ------------- React Toast ------------- */
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContextProvider = ({ children }) => {
  const notifyWarn = (
    msg,
    position = "bottom-center",
    autoClose = 5000,
    themeVal
  ) =>
    toast.warn(`${msg}`, {
      position,
      autoClose,
      theme: themeVal ? "dark" : "light",
    });

  const notifySuccess = (
    msg,
    position = "bottom-center",
    autoClose = 5000,
    themeVal
  ) =>
    toast.success(`${msg}`, {
      position,
      autoClose,
      theme: themeVal ? "dark" : "light",
    });

  const notifyError = (
    msg,
    position = "bottom-center",
    autoClose = 5000,
    themeVal
  ) =>
    toast.error(`${msg}`, {
      position,
      autoClose,
      theme: themeVal ? "dark" : "light",
    });

  return (
    // ToastContext Provider
    <ToastContext.Provider value={{ notifySuccess, notifyWarn, notifyError }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
