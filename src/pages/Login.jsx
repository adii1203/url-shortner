import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader, Lock, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginAction } from "../app/actions/authActions";
import Button from "../components/ui/Button";

const Login = () => {
  const { user, loading, loginError } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return toast.error("please fill all the fields");
    }
    await dispatch(loginAction(formData));
    if (user && !loading) {
      navigate("/home");
    }
  };

  return (
    <div className="h-screen w-screen relative grid place-content-center  bg-[#111]  ">
      <div className="flex flex-col items-center w-full">
        <div className="text-center text-[#eee]">
          <h1 className="font-bold font-Outfit text-[4rem] md:text-[5rem] leading-[4rem] md:leading-[5rem] text-text-light dark:text-text-dark">
            welcome
          </h1>
          <p className=" font-comfortaa font-semibold text-sub-light dark:text-sub-dark ">
            we are glade to see you back{" "}
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <form onSubmit={handelSubmit}>
            <div className="flex flex-col items-center gap-4 mt-4 justify-center w-full sm:w-[22rem]">
              <div className="w-full rounded-md bg-[#1a1a1a] flex items-center px-2 gap-2 ">
                <User color="#eee" />
                <input
                  type="email"
                  placeholder="Email"
                  className=" w-full py-3 outline-none bg-transparent font-comfortaa text-sm text-[#eee] font-bold"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="w-full rounded-md bg-[#1a1a1a] flex items-center px-2 gap-2 ">
                <Lock color="#eee" />
                <input
                  type="password"
                  placeholder="password"
                  className=" w-full py-3 outline-none bg-transparent font-comfortaa text-sm text-[#eee] font-bold"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <Button
                loading={loading}
                variant="primary"
                className="w-full justify-center bg-[#eee] p-2 font-Outfit font-semibold">
                {loading ? <Loader className="animate-spin" /> : "log in"}
              </Button>
            </div>
            <Link to={"/"} className="text-sm font-comfortaa text-[#eee]">
              forgot password.
            </Link>
          </form>

          {/* <div className="w-full">
            <Button
              variant="secondary"
              text={"log in with google"}
              className={
                "bg-sub-alt-light dark:bg-sub-alt-dark hover:bg-accent-light dark:hover:bg-accent-light text-text-light dark:text-text-dark hover:text-sub-alt-light"
              }
            />
          </div> */}
          <p className="text-center text-[#eee]">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="text-text-light dark:text-text-dark font-comfortaa font-semibold hover:underline">
              sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
