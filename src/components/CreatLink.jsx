import { X } from "lucide-react";
import Button from "./ui/Button";
const CreateLink = ({ loading, createLink, setIsCreateLinkModelOpen }) => {
  return (
    <div className="fixed inset-0 overflow-hidden w-full h-full bg-white/50">
      <div className="w-full h-full grid place-content-center">
        <div className="bg-white w-[22rem] md:w-[28rem] mx-auto px-4 py-6 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] rounded-md">
          <div className=" flex justify-end">
            <Button
              onClick={() => setIsCreateLinkModelOpen(false)}
              className={"border p-0 w-6 rounded hover:bg-gray-500/20"}>
              <X className="" />
            </Button>
          </div>
          <div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="link">
              Destination Link
            </label>
            <input
              className="font-comfortaa flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="https://example.com"
              id="link"></input>
          </div>
          <Button
            loading={loading}
            onClick={createLink}
            variant={"primary"}
            className={
              "w-full font-semibold  font-Outfit mt-6 transition-colors duration-500"
            }>
            {loading ? "Loading..." : "Create Link"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateLink;
