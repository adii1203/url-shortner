import { CopyPlus, PenLine, QrCode, Trash } from "lucide-react";
import Button from "../ui/Button";

const LinkOptions = ({ handelEditLink }) => {
  return (
    <div className="absolute z-50 top-[80%] border right-6 w-48 bg-white rounded shadow-md">
      <div className="px-2 py-3 flex flex-col gap-1">
        <Button
          onClick={() => handelEditLink()}
          variant={"outline"}
          className={
            "w-full text-gray-500 border-none font-Outfit justify-start gap-3 py-1 hover:bg-gray-100"
          }>
          <PenLine className="w-4" />
          <span>edit</span>
        </Button>
        <Button
          variant={"outline"}
          className={
            "w-full text-gray-500 border-none rounded font-Outfit justify-start gap-3 py-1 hover:bg-gray-100"
          }>
          <QrCode className="w-4" />
          <span>qr code</span>
        </Button>
        <Button
          variant={"outline"}
          className={
            "w-full text-gray-500 border-none rounded font-Outfit justify-start gap-3 py-1 hover:bg-gray-100"
          }>
          <CopyPlus className="w-4" />
          <span>duplicate</span>
        </Button>
        <Button
          variant={"outline"}
          className={
            "w-full text-red-500 border-none rounded font-Outfit justify-start gap-3 py-1 hover:bg-red-100"
          }>
          <Trash className="w-4" />
          <span>delete</span>
        </Button>
      </div>
    </div>
  );
};

export default LinkOptions;
