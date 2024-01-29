import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useRegisterMutation } from "../features/auth/authApiSlice";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(userDetails.name && userDetails.email && userDetails.password))
      return;

    try {
      const res = await register(userDetails);
      console.log(res);
      if (res?.data?.statusCode === 201) {
        navigate("/emai_verification");
      } else {
        toast.error(res?.error?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen relative grid place-content-center  bg-[#111]  ">
      <div className="text-center text-[#eee]">
        <h1 className="font-bold font-Outfit text-[3rem] leading-[4rem] md:leading-[5rem] text-text-light dark:text-text-dark">
          Sign Up
        </h1>
        <p className=" font-comfortaa font-semibold text-sub-light dark:text-sub-dark ">
          Enter your information to create an account{" "}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 py-4">
          <div className="w-full rounded-md bg-[#1a1a1a] flex items-center px-2 gap-2 ">
            <User color="#eee" />
            <input
              autoComplete="one-time-code"
              type="text"
              placeholder="Name"
              className=" w-full py-3 outline-none bg-transparent font-comfortaa text-sm text-[#eee] font-bold"
              value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
            />
          </div>
          <div className="w-full rounded-md bg-[#1a1a1a] flex items-center px-2 gap-2 ">
            <Mail color="#eee" />
            <input
              autoComplete="one-time-code"
              type="email"
              placeholder="Email"
              className=" w-full py-3 outline-none bg-transparent font-comfortaa text-sm text-[#eee] font-bold"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            />
          </div>
          <div className="w-full rounded-md bg-[#1a1a1a] flex items-center px-2 gap-2 ">
            <Lock color="#eee" />
            <input
              autoComplete="one-time-code"
              type="password"
              placeholder="password"
              className=" w-full py-3 outline-none bg-transparent font-comfortaa text-sm text-[#eee] font-bold"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
            />
          </div>

          <Button
            type="submit"
            varient="primary"
            className="bg-[#eee] text-[#111] font-bold items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full">
            {isLoading ? <Loader className="animate-spin" /> : "Sign Up"}
          </Button>
        </div>
      </form>
      <p className="text-center text-[#eee]">
        {"Don't have an account?"}
        <Link
          to={"/login"}
          className="text-text-light dark:text-text-dark font-comfortaa font-semibold hover:underline">
          log in
        </Link>
      </p>
    </div>
  );
};

export default Register;
