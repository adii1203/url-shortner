/* eslint-disable react/prop-types */
import { MoreVertical } from "lucide-react";
import LinkOptions from "./LinkOptions";
import { useCreatEditModel } from "../../hooks/useCreatEditModel";

const Links = ({ showLinkOption, handleShowLinkOption, link }) => {
  const {
    setShowCreateEditModel,
    showCreateEditModel,
    CreatEditLinkModelCallback,
  } = useCreatEditModel(link);

  const handelEditLink = () => {
    handleShowLinkOption(link._id);
    setShowCreateEditModel(true);
  };

  return (
    <>
      <div className="w-full relative mt-5 md:w-[30rem] lg:w-[42rem] mx-auto ">
        <div className="bg-white rounded-md px-2 py-3 shadow-md hover:scale-[1.01] transition-transform duration-200 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 border rounded-full overflow-hidden">
              <img src={link.icon} alt="" />
            </div>
            <div className="font-Outfit">
              <a
                href="https://openurl.me/af46Fg"
                target="_blank"
                rel="noreferrer"
                className="block text-blue-700 text-lg">
                {`openurl.me/${link.key}`}
              </a>
              <a
                href={link.originUrl}
                target="_blank"
                rel="noreferrer"
                className=" font-comfortaa text-sm underline">
                {link.originUrl?.length > 35
                  ? link.originUrl.slice(0, 35) + "..."
                  : link.originUrl}
              </a>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleShowLinkOption(link._id)}
              className="w-4 grid place-content-center rounded-sm hover:bg-slate-500/20 transition-colors duration-200">
              <MoreVertical />
            </button>
          </div>
        </div>
        {showLinkOption?.includes(link._id) && (
          <LinkOptions handelEditLink={handelEditLink} />
        )}
      </div>
      {showCreateEditModel && <CreatEditLinkModelCallback />}
    </>
  );
};

export default Links;
