import { ChevronDown } from "lucide-react";

const Nav = () => {
  // user profile image
  // user name
  return (
    <div className="sticky top-0">
      <div className=" bg-white mt-2 ">
        <div className="flex items-center justify-end p-3 font-Outfit rounded-lg border overflow-hidden gap-2">
          <div className="w-10 rounded-full overflow-hidden">
            <img
              // src="https://fastly.picsum.photos/id/168/200/200.jpg?hmac=VxnpUGg87Q47YRONmdsU2vNGSPjCs5vrwiAL-0hEIHM"
              src="https://avatars.githubusercontent.com/u/114096753?v=4"
              alt=""
            />
          </div>
          <div className="px-3 flex items-center gap-1 rounded-md hover:bg-[#e8eef4] bg-[#f2f5f7] cursor-pointer transition-colors duration-300">
            <p>aditya</p>
            <ChevronDown className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
