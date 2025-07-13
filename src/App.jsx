// App Router
import AppRouter from "./app/AppRouter";

/* ---------- Context Provider ---------- */
import ToastContextProvider from "./contexts/ToastContext/ToastContextProvider";

const App = () => {
  return (
    <>
      {/* ToastContextProvider */}
      <ToastContextProvider>
        {/* AppRouter */}
        <AppRouter />
      </ToastContextProvider>
    </>
  );
};

export default App;
