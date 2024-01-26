import { GithubIcon, MoreVertical } from "lucide-react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Trial = () => {
  return (
    <div className="w-full md:w-[80%] sm:w-[100%] mx-auto">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <Link className="w-16 h-16 block" to="/">
            <img src={logo} alt="" />
          </Link>
          <Button
            varient="primary"
            className={
              "w-32 h-9 justify-center hover:bg-[#eee] hover:border border-black hover:text-[#111]"
            }>
            <Link to="/login">login</Link>
          </Button>
        </div>
      </div>
      <div>
        <div>
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
            <div className="flex gap-3 items-center justify-center">
              <Button
                varient="primary"
                className={
                  "w-32 h-9 justify-center hover:bg-[#eee] hover:border border-black hover:text-[#111]"
                }>
                <Link to="/register">Get started</Link>
              </Button>
              <Button
                varient="icon"
                className={
                  "hover:bg-[#111] hover:text-[#eee] transition-colors duration-300"
                }>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/adii1203/url-shortner">
                  <GithubIcon />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="p-12 mt-6  ">
          <div className="flex flex-col gap-4 relative w-fit mx-auto">
            <div className="pointer-events-none w-44 h-44 filter blur-2xl mix-blend-multiply dark:mix-blend-normal rounded-full bg-[#3A86FF] absolute animate-blob_2 animation-delay-2000 opacity-20 top-[60px] left-[20]" />
            <div className="pointer-events-none w-44 h-44 filter blur-2xl opacity-20  mix-blend-multiply dark:mix-blend-normal rounded-full bg-[#ffbb00] absolute animate-blob animation-delay-2000 left-[80px]  " />
            <div className="pointer-events-none w-44 h-44 filter blur-2xl mix-blend-multiply dark:mix-blend-normal rounded-full bg-[#FB5607] absolute animate-blob_2 animation-delay-4000 opacity-20  " />
            <div className="pointer-events-none w-44 h-44 filter blur-2xl mix-blend-multiply dark:mix-blend-normal rounded-full bg-[#8338EC] absolute animate-blob animation-delay-400 opacity-20  bottom-0 right-0 " />
            <div className="w-[18rem] sm:w-[30rem] relative mt-5 mx-auto rotate-3 translate-x-6 hover:rotate-0 transition-transform duration-200 ">
              <div className="bg-[#eee] rounded-md px-2 py-3 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 rounded-full overflow-hidden">
                    <img
                      className="w-full"
                      src={
                        "https://github.githubassets.com/favicons/favicon.svg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="font-Outfit">
                    <a
                      href={`https://openurl.me/a6b4b600`}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-[#1d1d1d] text-lg">
                      openurl.me/a6b4b600
                    </a>
                  </div>
                </div>
                <button className="w-4 grid place-content-center rounded-sm hover:bg-slate-500/20 transition-colors duration-200">
                  <MoreVertical color="#1d1d1d" />
                </button>
              </div>
            </div>
            <div className="w-[18rem] sm:w-[30rem] relative mt-5 mx-auto -rotate-3 -translate-x-6 hover:rotate-0 transition-transform duration-200">
              <div className="bg-[#444] rounded-md px-2 py-3 shadow-md hover:scale-[1.01] transition-transform duration-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      className="w-full"
                      src={"https://abs.twimg.com/favicons/twitter.3.ico"}
                      alt=""
                    />
                  </div>
                  <div className="font-Outfit">
                    <a
                      href={`https://openurl.me/4e9601c5`}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-[#eee] text-lg">
                      openurl.me/4e9601c5
                    </a>
                  </div>
                </div>
                <button className="w-4 grid place-content-center rounded-sm hover:bg-slate-500/20 transition-colors duration-200">
                  <MoreVertical color="#eee" />
                </button>
              </div>
            </div>
            <div className="w-[18rem] sm:w-[30rem] relative mt-5 mx-auto rotate-3 translate-x-12 hover:rotate-0 transition-transform duration-200">
              <div className="bg-[#444] rounded-md px-2 py-3 shadow-md hover:scale-[1.01] transition-transform duration-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 rounded-full overflow-hidden">
                    <img
                      className="w-full"
                      src={
                        "	https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="font-Outfit">
                    <a
                      href={`https://openurl.me/56512e43`}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-[#eee] text-lg">
                      openurl.me/56512e43
                    </a>
                  </div>
                </div>
                <button className="w-4 grid place-content-center rounded-sm hover:bg-slate-500/20 transition-colors duration-200">
                  <MoreVertical color="#eee" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
