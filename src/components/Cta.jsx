import { Link } from "react-router-dom";
import Input from "./Input";
const Cta = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 mt-16">
        <div className="relative w-fit mx-auto group">
          <div className="absolute group-hover:opacity-100 transition duration-200 blur to-[#8338EC] -inset-0.5 opacity-60 bg-gradient-to-r from-[#3A86FF] rounded-md"></div>
          <div className="relative font-comfortaa text-center text-black text-[14px] font-semibold leading-none mx-auto bg-[#F9F4F5] px-4 py-1 rounded-md">
            short share track
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-500 font-Outfit text-center max-w-3xl mx-auto">
            Elevate your online{" "}
            <span
              style={{
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
              className="bg-gradient-to-r from-[#FFBE0B] to-[#FF006E]">
              presence
            </span>{" "}
            with oue link shortening{" "}
            <span
              style={{
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
              className="bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">
              wizard.
            </span>
          </h1>
          <h2 className="text-gray-600 text-center mx-auto max-w-2xl text-sm font-700 font-comfortaa">
            {" "}
            Unleash the Power of Concise URLs. Elevate your link-sharing
            experience with our user-friendly web app for shortening URLs.
            Simplify, Share, and Track with LinkSwift!
          </h2>
        </div>
        <div className="relative z-10 flex items-center justify-center gap-4">
          <Link
            to={"/login"}
            className="bg-[#100b00] text-white font-Outfit px-6 py-1 rounded-full hover:bg-white/80 hover:text-black hover:outline outline-[1px] transition-all duration-200">
            log in
          </Link>
          <Link
            to={"/register"}
            className="bg-[#89fc00] text-black font-Outfit px-8 py-1 rounded-full hover:bg-white hover:text-black outline outline-black  outline-[1px] transition-all duration-200">
            get started
          </Link>
        </div>
      </div>
      <Input />
    </div>
  );
};

export default Cta;
