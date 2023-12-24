import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        formData,
        {
          withCredentials: true,
        }
      );
      dispatch(login(res.data));
      navigate("/home");
      if (error) {
        setError(false);
      }
    } catch (error) {
      if (error.response.status === 400) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen relative grid place-content-center bg-[#eff1ed]">
      <div className="bg-white font-Outfit w-[20rem] flex flex-col gap-6 px-6 py-5 outline outline-1 outline-[#100b00] rounded-sm">
        <div className="">
          <p className="font-bold text-2xl capitalize">login</p>
          <p className="text-sm text-gray-500">
            {`don't have an acount? `}
            <Link to={"/register"} className="text-black">
              creat one
            </Link>
          </p>
        </div>
        <form onSubmit={handelSubmit} className="flex flex-col gap-4">
          <div className="w-full">
            <label htmlFor="email" className="hidden"></label>
            <input
              className={
                error
                  ? "border border-red-500 w-full rounded-[4px] px-2 py-1"
                  : "w-full border border-black/40 rounded-[4px] px-2 py-1"
              }
              type="email"
              id="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={
                error
                  ? "w-full border border-red-500 rounded-[4px] px-2 py-1 "
                  : "w-full border border-black/40 rounded-[4px] px-2 py-1 "
              }
              type="password"
              id="password"
              placeholder="Password"
            />
            <p className="text-sm text-gray-500">
              forgot password?
              <Link className="text-black font-bold"> reset</Link>
            </p>
            {
              <p
                className={
                  error ? "text-sm text-red-500" : "hidden text-sm text-red-500"
                }>
                Invalide credentials
              </p>
            }
          </div>
          <button
            disabled={loading}
            className={
              loading
                ? "w-full bg-[#fff] disabled:cursor-not-allowed outline outline-1 outline-black  text-center py-1 rounded text-white capitalize font-semibold"
                : "w-full bg-[#100b00] text-center py-1 rounded text-white capitalize font-semibold hover:bg-[#100b00]/90 transition-colors"
            }>
            {loading ? (
              <Loader className="mx-auto text-black animate-spin" />
            ) : (
              "log in"
            )}
          </button>
        </form>

        <div className="">
          <button className="w-full group flex items-center justify-center gap-2 bg-white py-1 rounded text-[#100b00] hover:bg-[#100b00] hover:text-white outline outline-[1px] transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 48 48"
              id="b"
              className="inline">
              <path
                className="c fill-black group-hover:fill-white transition-color duration-300"
                d="m31.6814,34.8868c-1.9155,1.29-4.3586,2.0718-7.2514,2.0718-5.59,0-10.3395-3.7723-12.04-8.8541v-.0195c-.43-1.29-.6841-2.6582-.6841-4.085s.2541-2.795.6841-4.085c1.7005-5.0818,6.45-8.8541,12.04-8.8541,3.1664,0,5.9809,1.0945,8.2286,3.2055l6.1568-6.1568c-3.7332-3.4791-8.5805-5.6095-14.3855-5.6095-8.4045,0-15.6559,4.8277-19.1936,11.8641-1.4659,2.8927-2.3064,6.1568-2.3064,9.6359s.8405,6.7432,2.3064,9.6359v.0195c3.5377,7.0168,10.7891,11.8445,19.1936,11.8445,5.805,0,10.6718-1.9155,14.2291-5.1991,4.0655-3.7527,6.4109-9.2645,6.4109-15.8123,0-1.5245-.1368-2.9905-.3909-4.3977h-20.2491v8.3264h11.5709c-.5082,2.6777-2.0327,4.945-4.3195,6.4695h0Z"
              />
            </svg>
            continue with google
          </button>
        </div>
        <div className="text-sm">
          <p className="text-gray-400 text-center">
            By loggin in, you agree to our{" "}
            <a href="#" className="text-black hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-black hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
