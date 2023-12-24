import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";
import Trial from "../pages/Trial";

const SecureRoute = () => {
  const { isLoading } = useAuth();
  const { status } = useSelector((state) => state.user);

  return <>{isLoading ? null : status ? <Outlet /> : <Trial />}</>;
};

export default SecureRoute;
