import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refrechCredentials } from "../features/auth/authSlice";
import { usePersistenceLoginQuery } from "../features/auth/authApiSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = usePersistenceLoginQuery();

  useEffect(() => {
    if (data) {
      dispatch(refrechCredentials(data?.data));
    }
  }, [data, dispatch]);

  return { isLoading };
};

export default useAuth;
