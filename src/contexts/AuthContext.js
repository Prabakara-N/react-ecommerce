import { createContext, useContext, useEffect, useState } from "react";

// create context
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
