import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useState(AuthProvider);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return <div></div>;
};

export default PrivateRoute;
