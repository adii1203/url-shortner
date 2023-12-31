import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const Cta = () => {
  const navigate = useNavigate();
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
          <h1 className="text-5xl font-500 font-Outfit text-center max-w-3xl mx-auto dark:text-text-dark text-text-light z-50">
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
          <h2 className=" dark:text-text-dark text-center mx-auto max-w-2xl text-sm font-700 font-comfortaa">
            {" "}
            Unleash the Power of Concise URLs. Elevate your link-sharing
            experience with our user-friendly web app for shortening URLs.
            Simplify, Share, and Track with LinkSwift!
          </h2>
        </div>
        <div className="relative z-10 flex items-center justify-center gap-4">
          <Button
            onClick={() => {
              navigate("/login");
            }}
            variant="primary"
            text={"login"}
            className={
              " w-52 transition-all duration-300 z-50 dark:bg-secondary-dark dark:hover:bg-accent-dark bg-secondary-light hover:bg-accent-light"
            }></Button>
          <Button
            onClick={() => {
              navigate("/register");
            }}
            variant={"secondary"}
            text={"get started"}
            className={
              "w-25 dark:outline-text-dark dark:text-text-dark"
            }></Button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
