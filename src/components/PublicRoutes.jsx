import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoutes = () => {
  const { isLoading } = useAuth();
  const { status } = useSelector((state) => state.user);
  return (
    <>
      {isLoading ? null : status ? (
        <Navigate to={"/"} replace={true} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PublicRoutes;
