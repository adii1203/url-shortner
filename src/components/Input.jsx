import { ChevronRight, Link } from "lucide-react";
import { useEffect, useState } from "react";

const Input = ({ pasteFromClipboard }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const clip = async () => {
      try {
        const clipText = await navigator.clipboard.readText();
        const pattern =
          /(https:\/\/www.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,})(\.[a-zA-Z]{2,})/;
        // setValue(pattern.test(clipText) ? clipText : "");
        if (pattern.test(clipText) && pasteFromClipboard) {
          setValue(clipText);
        }
      } catch (error) {
        console.log(error);
      }
    };
    clip();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-[1fr_32px] place-content-center sm:grid-cols-[1fr_160px] sm:w-[70%] lg:w-[50%] gap-2 bg-[#181E29] mx-auto h-[2.6rem] rounded-full pr-1 py-2  pl-4 mt-14 outline-[#353C4A] outline">
        <div className="flex text-[#C9CED6] items-center gap-4">
          <Link className="text-[#C9CED6] w-4" />
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-transparent outline-none w-full"
            placeholder="Enter the link here"
          />
        </div>
        <button className="hidden sm:block px-3 h-8 capitalize bg-[#144EE3] rounded-[48px] text-center outline-[#144EE3] text-white">
          Shorten now
        </button>
        <button className="sm:hidden w-8 h-8 grid place-content-center bg-[#144EE3] rounded-full text-center outline-[#144EE3] text-white">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Input;
