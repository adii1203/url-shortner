/* eslint-disable react/prop-types */
import { Clipboard, Pencil, QrCode } from "lucide-react";

const AllLinks = () => {
  const links = [
    {
      shortLink: "short.sh/A34dksf",
      originalLink: "https://www.youtube.com/watch",
      clicks: 123,
      status: "active",
    },
    {
      shortLink: "short.sh/A34dksf",
      originalLink: "https://www.youtube.com/watch",
      clicks: 123,
      status: "active",
    },
    {
      shortLink: "short.sh/A34dksf",
      originalLink: "https://www.youtube.com/watch",
      clicks: 123,
      status: "active",
    },
    {
      shortLink: "short.sh/A34dksf",
      originalLink: "https://www.youtube.com/watch",
      clicks: 245,
      status: "deactive",
    },
    {
      shortLink: "short.sh/A34dksf",
      originalLink: "https://www.youtube.com/watch",
      clicks: 98,
      status: "active",
    },
    {
      shortLink: "short.sh/A34dksf",
      originalLink: "https://www.youtube.com/watch",
      clicks: 784,
      status: "deactive",
    },
  ];
  return (
    <div className="mt-12 rounded-md overflow-hidden flex flex-col gap-1 md:w-[70%] mx-auto">
      <div className="text-white capitalize bg-[#181E29] py-2 px-4 font-comfortaa text-sm font-600 grid grid-cols-[170px_1fr_80px_80px_80px_80px] items-center justify-between">
        <p className="text-center">Short Link</p>
        <p className="text-center">Original Link</p>
        <p className="text-center">Qr code</p>
        <p className="text-center">clicks</p>
        <p className="text-center">status</p>
        <p className="text-center">action</p>
      </div>
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <SingleLink key={index} link={link} />
        ))}
      </div>
    </div>
  );
};

const SingleLink = ({ link }) => {
  const { shortLink, originalLink, clicks, status } = link;
  return (
    <div className="text-[#C9CED6] bg-[#0E131E] grid py-2 px-4 font-comfortaa text-sm font-600  grid-cols-[170px_1fr_80px_80px_80px_80px] items-center justify-between">
      <div className="flex items-center gap-1 justify-center">
        <p className="">{shortLink}</p>
        <button className="hover:bg-[#172234] w-8 h-8 grid place-content-center rounded-full">
          <Clipboard className="w-5" />
        </button>
      </div>
      <p className="text-center overflow-hidden">
        {originalLink.length > 20
          ? originalLink.slice(0, 20) + "..."
          : originalLink}
      </p>
      <div className="flex justify-center">
        <button className="hover:bg-[#172234] rounded-md px-1 py-1">
          <QrCode />
        </button>
      </div>
      <p className="text-center">{clicks}</p>
      <p
        className={
          status === "active"
            ? "text-center text-green-600"
            : "text-center text-red-600"
        }>
        {status}
      </p>
      <div className="flex justify-center">
        <button className="hover:bg-[#172234] rounded-full w-7 h-7 flex justify-center items-center">
          <Pencil className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default AllLinks;
