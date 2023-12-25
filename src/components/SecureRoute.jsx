import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Trial from "../pages/Trial";

const SecureRoute = ({ isLoading }) => {
  const { status } = useSelector((state) => state.user);

  return <>{isLoading ? null : status ? <Outlet /> : <Trial />}</>;
};

export default SecureRoute;
