/* eslint-disable react/prop-types */
import { BarChart, Clipboard, QrCode } from "lucide-react";
import { useSelector } from "react-redux";
const AllLinks = () => {
  const links = useSelector((state) => state.links);

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
  const { route, destinationUrl, clicks } = link;
  return (
    <div className="bg-white flex items-center gap-8 z-10 relative py-2 px-2 outline outline-1 outline-gray-500/50 rounded">
      <div className="flex items-center gap-2 ">
        <div className="w-12 rounded-full overflow-hidden ">
          <img src="http://robohash.org/2" alt="" />
        </div>
        <div>
          <p className="font-bold">{`openurl.me/${route}`}</p>
          <a className="hover:underline" href={destinationUrl}>
            {destinationUrl}
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:bg-gray-200 rounded-full w-6 h-6 grid place-content-center p-1">
          <Clipboard className="w-5" />
        </button>
        <button className="hover:bg-gray-200 rounded-full w-6 h-6 grid place-content-center p-1">
          <QrCode className="w-5" />
        </button>
        <div className="flex font-bold bg-slate-200 gap-1 px-1 rounded">
          <BarChart className="w-5" />
          <p className="">{clicks}</p>
        </div>
      </div>
    </div>
  );
};

export default AllLinks;
