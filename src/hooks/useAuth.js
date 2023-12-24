import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/v1/user/refresh-token",
          {},
          { withCredentials: true }
        );
        if (res.status === 200) {
          dispatch(login(res.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    checkLogin();
  }, [dispatch]);

  return { isLoading };
};

export default useAuth;
