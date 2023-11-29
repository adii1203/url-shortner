import { LogIn } from "lucide-react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-3">
        <p
          className="font-Outfit font-extrabold text-[1.9rem]"
          style={{
            background: "#121FCF",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage:
              "radial-gradient(circle farthest-corner at right center, #121FCF 20%, #CF1512 100%)",
          }}>
          LOGO
        </p>
        <div className="text-white flex gap-8 md:gap-4 font-comfortaa">
          <button className=" transition-shadow hover:drop-shadow-[0px_0px_8px_#C9CED6] text-sm font-bold capitalize flex items-center gap-1 bg-[#181E29] px-[18px] py-[4px] sm:px-[24px] sm:py-[8px] rounded-[48px] text-center outline-1 outline-[#353C4A] outline">
            login
            <LogIn className="w-[18px] text-[#C9CED6]" />
          </button>
          <button className="hidden transition-shadow hover:drop-shadow-[0_2px_8px_#144EE3] text-sm font-bold capitalize sm:flex items-center gap-1 bg-[#144EE3] px-[24px] py-[8px] rounded-[48px] text-center outline-[#144EE3] outline-[2px]">
            register now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
