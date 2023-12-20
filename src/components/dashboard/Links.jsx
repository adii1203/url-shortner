import { MoreVertical } from "lucide-react";

const Links = () => {
  return (
    <div className="w-full mt-5 md:w-[30rem] lg:w-[42rem] mx-auto ">
      <div className="bg-white rounded-md px-2 py-3 shadow-md hover:scale-[1.01] transition-transform duration-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 rounded-full overflow-hidden">
            <img src="https://github.com/fluidicon.png" alt="" />
          </div>
          <div className="font-Outfit">
            <a
              href="https://openurl.me/af46Fg"
              target="_blank"
              rel="noreferrer"
              className="block text-blue-700 text-lg">
              openurl.me/af46Fg
            </a>
            <a
              href="https://github.com/fluidicon.png"
              target="_blank"
              rel="noreferrer"
              className=" font-comfortaa text-sm underline">
              https://github.com/fluidicon.png
            </a>
          </div>
        </div>
        <div>
          <button className="w-4 grid place-content-center rounded-sm hover:bg-slate-500/20 transition-colors duration-200">
            <MoreVertical />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Links;
