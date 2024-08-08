import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext/UserContext";

const PrivateRoute = ({ element }) => {
  const { user, loading } = useUser();

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default PrivateRoute;
