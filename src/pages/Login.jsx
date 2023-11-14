import { MoveRight } from "lucide-react";

export const Login = () => {
  return (
    <div className="h-screen bg-white dark:bg-[#09090b] grid place-content-center">
      <div className="sm:w-[28rem] md:w-[30rem] px-4 py-4 flex flex-col gap-6">
        <div className="mb-4">
          <h1 className="dark:text-white text-black text-2xl font-bold">
            Login
          </h1>
          <p className="text-[#353535] dark:text-white">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
        <form
          action=""
          className="flex flex-col gap-6 text-black dark:text-white">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#353535]">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              id="email"
              className="bg-white dark:bg-[#111217] px-2 py-[6px] border-[2px] border-[#CECECE] dark:border-[#333C4A]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#CECECE] focus:border-[#CECECE] dark:focus:ring-[#333C4A] dark:focus:border-[#333C4A]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-[#353535]">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              id="password"
              className="bg-white dark:bg-[#111217] px-2 py-[6px] border-[2px] border-[#CECECE] dark:border-[#333C4A]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#CECECE] focus:border-[#CECECE] dark:focus:ring-[#333C4A] dark:focus:border-[#333C4A]"
            />
          </div>
          <div className="bg-[#9F5FEF] rounded-md py-2 dark:text-white text-black font-semibold hover:bg-[#9F5FEF]/90">
            <button className="w-full capitalize">
              continue
              <MoveRight className="inline pl-1" />
            </button>
          </div>
        </form>
        <div className=" bg-[#D4D4D4] dark:bg-[#333C4A] h-[1.4px] relative flex justify-center text-gray-400">
          <div className=" bg-white dark:bg-[#09090b] rounded-full absolute flex justify-center items-center w-10 h-10 font-semibold -translate-y-1/2 ">
            OR
          </div>
        </div>
        <div>
          <button className="bg-white dark:bg-[#111217] flex justify-center items-center gap-2 w-full text-[#353535] dark:text-white font-semibold px-2 py-[6px] border-[2px] border-[#CECECE] dark:border-[#333C4A] rounded-md  hover:bg-gray-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 48 48"
              id="b"
              className="inline">
              <path
                className="c fill-none stroke-[#000] dark:stroke-[#fff] "
                d="m31.6814,34.8868c-1.9155,1.29-4.3586,2.0718-7.2514,2.0718-5.59,0-10.3395-3.7723-12.04-8.8541v-.0195c-.43-1.29-.6841-2.6582-.6841-4.085s.2541-2.795.6841-4.085c1.7005-5.0818,6.45-8.8541,12.04-8.8541,3.1664,0,5.9809,1.0945,8.2286,3.2055l6.1568-6.1568c-3.7332-3.4791-8.5805-5.6095-14.3855-5.6095-8.4045,0-15.6559,4.8277-19.1936,11.8641-1.4659,2.8927-2.3064,6.1568-2.3064,9.6359s.8405,6.7432,2.3064,9.6359v.0195c3.5377,7.0168,10.7891,11.8445,19.1936,11.8445,5.805,0,10.6718-1.9155,14.2291-5.1991,4.0655-3.7527,6.4109-9.2645,6.4109-15.8123,0-1.5245-.1368-2.9905-.3909-4.3977h-20.2491v8.3264h11.5709c-.5082,2.6777-2.0327,4.945-4.3195,6.4695h0Z"
              />
            </svg>
            <span>Login with google</span>
          </button>
        </div>
        <div className="text-sm">
          <p className="text-gray-400 text-center">
            By loggin in, you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
