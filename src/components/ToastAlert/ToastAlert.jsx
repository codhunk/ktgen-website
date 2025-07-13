/* ------------- React Toast ------------- */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastAlert = () => {
  return (
    <>
      {/* Snack Bar Alert */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ToastAlert;
