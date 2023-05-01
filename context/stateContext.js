import { createContext, useContext, useState } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("Arshil");
  const [snackbar, setSnackbar] = useState({
    message: "",
    type: "",
    show: false,
  });
  function showSnackbar(message, type) {
    setSnackbar({
      show: true,
      message: (message ??= message),
      type: (type ??= type),
    });
    setTimeout(() => {
      setSnackbar({
        ...snackbar,
        show: false,
      });
    }, 4000);
  }
  return (
    <stateContext.Provider
      value={{ snackbar, showSnackbar, setSnackbar, user }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
