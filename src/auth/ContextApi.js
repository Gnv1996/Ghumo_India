import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const isLoggedIn = () => {
    return user != null;
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
