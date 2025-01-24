import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../Context/appContext.jsx";

const PublicRoute = () => {
  const { user } = useContext(AppContext);

  // Redirect to Editor if the user is already logged in
  return user ? <Navigate to="/profile" /> : <Outlet />;
};

export default PublicRoute;