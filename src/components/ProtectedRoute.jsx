import { useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user, authToken }) => {
  const isAuthenticated = useMemo(
    () => (user, authToken) => {
      return user && authToken;
    },
    []
  );
  return isAuthenticated(user, authToken) ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
