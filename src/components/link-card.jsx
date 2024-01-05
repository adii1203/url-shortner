/* eslint-disable react/prop-types */
import { CopyPlus, MoreVertical, PenLine, QrCode, Trash } from "lucide-react";
import Popup from "reactjs-popup";
import Button from "./ui/Button";
import { useCreatEditModel } from "../hooks/useCreatEditModel";
import { useDeleteLinkModel } from "../hooks/useDeleteLinkModel";

const LinkCard = ({ link }) => {
  const { CreatEditLinkModelCallback, setShowCreateEditModel } =
    useCreatEditModel(link);
  const { DeleteLinkModelCallback, setShowDeleteLinkModel } =
    useDeleteLinkModel(link);

  return (
    <>
      <CreatEditLinkModelCallback />
      <DeleteLinkModelCallback />
      <div className="w-full relative mt-5 sm:w-[36rem] lg:w-[42rem] mx-auto ">
        <div className="bg-[#444] rounded-md px-2 py-3 shadow-md hover:scale-[1.01] transition-transform duration-200 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 rounded-full overflow-hidden">
              <img className="w-full" src={link?.icon} alt="" />
            </div>
            <div className="font-Outfit">
              <a
                href="https://openurl.me/af46Fg"
                target="_blank"
                rel="noreferrer"
                className="block text-[#eee] text-lg">
                {`openurl.me/${link.key}`}
              </a>
              <a
                href={link.originUrl}
                target="_blank"
                rel="noreferrer"
                className=" font-comfortaa text-sm underline text-blue-500">
                {link.originUrl?.length > 35
                  ? link.originUrl.slice(0, 35) + "..."
                  : link.originUrl}
              </a>
            </div>
          </div>

          <div>
            <Popup
              position={[
                "bottom left",
                "bottom right",
                "top left",
                "top right",
              ]}
              arrow={false}
              on={["hover", "focus"]}
              trigger={
                <button className="w-4 grid place-content-center rounded-sm hover:bg-slate-500/20 transition-colors duration-200">
                  <MoreVertical color="#eee" />
                </button>
              }>
              <div className="z-50 w-48 right-0 bg-[#111] rounded shadow-md">
                <div className="px-2 py-3 flex flex-col gap-1">
                  <Button
                    onClick={() => setShowCreateEditModel(true)}
                    varient={"primary"}
                    className={
                      "w-full font-Outfit justify-start gap-3 py-1 bg-[#444]/20 hover:bg-[#444]/60 text-[#eee]"
                    }>
                    <PenLine className="w-4" />
                    <span>edit</span>
                  </Button>
                  <Button
                    varient={"primary"}
                    className={
                      "w-full font-Outfit justify-start gap-3 py-1 bg-[#444]/20 hover:bg-[#444]/60 text-[#eee]"
                    }>
                    <QrCode className="w-4" />
                    <span>qr code</span>
                  </Button>
                  <Button
                    varient={"primary"}
                    className={
                      "w-full font-Outfit justify-start gap-3 py-1 bg-[#444]/20 hover:bg-[#444]/60 text-[#eee]"
                    }>
                    <CopyPlus className="w-4" />
                    <span>duplicate</span>
                  </Button>
                  <Button
                    onClick={() => setShowDeleteLinkModel(true)}
                    varient={"danger"}
                    className={
                      "w-full border-none rounded font-Outfit justify-start gap-3 py-1"
                    }>
                    <Trash className="w-4" />
                    <span>delete</span>
                  </Button>
                </div>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkCard;
