import { useState } from "react";
import Input from "./Input";

const Cta = () => {
  const [pasteFromClipboard, setPasteFromClipboard] = useState(false);

  const handleToggle = () => {
    setPasteFromClipboard(!pasteFromClipboard);
  };
  return (
    <div>
      <div className="text-white font-Outfit mt-14">
        <p
          className="text-4xl sm:text-5xl lg:text-6xl text-center font-600"
          style={{
            background: "#121FCF",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage:
              "radial-gradient(circle farthest-corner at center center,#CF1512 0%, #121FCF 80%)",
          }}>
          {"Shorten Your Loooong Links :)"}
        </p>
        <p className="text-sm text-center font-comfortaa mt-4 text-[#C9CED6] w-[18rem] sm:w-[24rem] mx-auto">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
      </div>
      <Input />
      <div className="flex justify-center gap-2 items-center mt-4">
        <div className="w-10 relative h-5 flex items-center rounded-full bg-[#181E29] outline outline-[#353C4A] outline-[2px] cursor-pointer">
          <div className="bg-[#144EE3] absolute left-1 translate-x-full transition-transform w-4 h-4 rounded-full shadow-md"></div>
        </div>
        <p className="text-[#C9CED6] text-sm font-500">
          Auto Paste from Clipboard
        </p>
      </div>
    </div>
  );
};

export default Cta;
