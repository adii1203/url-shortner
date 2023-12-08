import { Link2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addLink } from "../features/linkSclice";

const Input = () => {
  const dispatch = useDispatch();
  const [link, setLink] = useState("");

  const shortLink = async () => {
    if (link === "") return;
    try {
      const res = await axios.post("http://localhost:5000/api/shortLink", {
        url: link,
      });
      dispatch(addLink(res.data.data));
      console.log(res.data.data);
      //
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" relative z-10 grid grid-cols-[1fr_auto] px-4 place-content-center max-w-[32rem] gap-2 bg-[#F9F4F5] mx-auto h-[2.6rem] rounded-md mt-14 outline-[1px] outline-gray-600 outline">
        <div className="flex text-gray-600 items-center gap-4">
          <Link2 className="text-black w-5" />
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="bg-transparent outline-none w-full"
            placeholder="Enter the link here"
          />
        </div>
        <button className="">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.8640000000000001"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M44 44V4H24V20H4V44H44Z"
                fill="#000000"
                stroke="#000000"
                strokeWidth="0.72"
                strokeLinecap="round"
                strokeLinejoin="round"></path>{" "}
              <path
                d="M21 28L17 32L21 36"
                stroke="white"
                strokeWidth="0.72"
                strokeLinecap="round"
                strokeLinejoin="round"></path>{" "}
              <path
                d="M34 23V32H17"
                stroke="white"
                strokeWidth="0.72"
                strokeLinecap="round"
                strokeLinejoin="round"></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Input;
