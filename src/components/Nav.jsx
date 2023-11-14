import img from "../assets/7.png";
import Search from "./Search";
const Nav = () => {
  return (
    <div className="">
      <div className="py-3 flex items-center justify-between">
        <Search />
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-[#D4D4D4] overflow-hidden">
            <img src={img} alt="" />
          </div>
          <div className="flex items-center px-2 py-1 cursor-pointer transition-colors rounded-md gap-1 hover:bg-black/10">
            <p className="font-comfortaa">Aditya</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                fill="#0F0F0F"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
