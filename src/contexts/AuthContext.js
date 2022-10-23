import React, { createContext, useState } from "react";

export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <AuthProvider.Provider value={{ user }}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
