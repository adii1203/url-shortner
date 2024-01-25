import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { magic } from "../utils/magic";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";
import { refrechCredentials } from "../features/auth/authSlice";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleOAuthResult = async () => {
    try {
      const result = await magic.oauth.getRedirectResult();
      const profile = result.oauth.userInfo;
      console.log(profile);
      const { data } = await login(profile);
      if (data.success) {
        dispatch(refrechCredentials(data.data));
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleOAuthResult();
  }, []);

  return (
    <>
      <div className="h-screen grid place-content-center">
        <p>you will be redirect soon</p>
        <Loader className="animate-spin" />
      </div>
    </>
  );
};

export default Register;
