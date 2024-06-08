import { useContext, createContext, useState } from "react";
import { useAPI } from "./backendapi";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const API = useAPI();
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState(undefined);
  const checkIsAdmin = async(server_token) =>{
     //Fetch user data from server
     const response = await fetch(`${API}api/auth/user`, {
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${server_token}`,
      },
    });
    const data = await response.json();

    //Set isAdmin based on the response from server'
    setIsAdmin(data.isAdmin);
  }
  checkIsAdmin(token);

  // Store Token In LS
  const storeTokenInLS = async (server_token) => {
    setToken(server_token);
    sessionStorage.setItem("token", server_token);

    //Fetch user data from server
    const response = await fetch(`${API}api/auth/user`, {
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${server_token}`,
      },
    });
    const data = await response.json();

    //Set isAdmin based on the response from server'
    setIsAdmin(data.isAdmin);
  };

  // Make the logout function
  const logout = () =>{
    sessionStorage.removeItem("token");
    setToken(sessionStorage.getItem("token"));
    setIsAdmin(false);
  }

  return (
    <AuthContext.Provider value={{ storeTokenInLS, isAdmin, token,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth outside of the Provider");
  }
  return authContextValue;
};
