/* eslint-disable react/prop-types */
import { BarChart, Clipboard, QrCode } from "lucide-react";
import { useSelector } from "react-redux";
const AllLinks = () => {
  const links = useSelector((state) => state.links.links);

  return (
    <div className="mt-6 max-w-[32rem] mx-auto">
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <SingleLink key={index} link={link} />
        ))}
      </div>
    </div>
  );
};

const SingleLink = ({ link }) => {
  const { key, originUrl, clicks, icon } = link;
  return (
    <div className="bg-white grid grid-cols-2 items-center justify-around gap-8 z-10 relative py-2 px-2 outline outline-1 outline-[#100b00] rounded">
      <div className="flex items-center gap-2 ">
        <div className="w-10 rounded-full overflow-hidden ">
          <img
            className="w-10"
            src={icon !== "" ? icon : "https://robohash.org/2"}
            alt=""
          />
        </div>
        <div>
          <p className="font-semibold">{`openurl.me/${key}`}</p>
          <a className="hover:underline text-gray-500" href={originUrl}>
            {originUrl.length > 23 ? `${originUrl.slice(0, 23)}...` : originUrl}
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:bg-gray-200 rounded-full w-6 h-6 grid place-content-center">
          <Clipboard className="w-4" />
        </button>
        <button className="hover:bg-gray-200 rounded-full w-6 h-6 grid place-content-center p-1">
          <QrCode className="w-4" />
        </button>
        <div className="flex bg-slate-200 gap-1 px-1 rounded">
          <BarChart className="w-5" />
          <p className="">{clicks}</p>
        </div>
      </div>
    </div>
  );
};

export default AllLinks;
