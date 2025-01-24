import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../Context/appContext.jsx";

const PrivateRoute = () => {
  const { user } = useContext(AppContext);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;