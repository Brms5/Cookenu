import { createContext, useState } from "react";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {

  const token = localStorage.getItem("token");

  const [loginLogoutButton, setLoginLogoutButton] = useState(token ? "Logout" : "Login");

  const contextValue = {
      loginLogoutButton,
      setLoginLogoutButton,
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
};

export default GlobalProvider;

