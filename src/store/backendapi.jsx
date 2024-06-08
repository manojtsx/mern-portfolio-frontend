import { createContext, useContext } from "react";

export const APIContext = createContext();
export const APIProvider = ({ children }) => {
  const API = import.meta.env.VITE_REACT_API;

  return <APIContext.Provider value={API}>{children}</APIContext.Provider>;
};

export const useAPI = () => {
  const APIContextValue = useContext(APIContext);
  if (!APIContextValue) {
    throw new Error("useAPI used outside of the Provider");
  }
  return APIContextValue;
};
