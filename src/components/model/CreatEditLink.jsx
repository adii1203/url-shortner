import { useMemo, useState } from "react";
import Button from "../ui/Button";
import { X } from "lucide-react";

const CreatEditLink = ({
  props,
  showCreateEditModel,
  setShowCreateEditModel,
}) => {
  const [link, setLink] = useState(
    props || {
      originUrl: "",
      key: "",
    }
  );

  const saveDisabled = useMemo(() => {
    const pattern =
      /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

    if (
      !showCreateEditModel ||
      !pattern.test(link.originUrl) ||
      (props &&
        Object.entries(props).every(([key, value]) => link[key] === value))
    ) {
      return true;
    } else {
      return false;
    }
  }, [showCreateEditModel, props, link]);

  const creatLink = () => {
    console.log("creatLink");
  };
  const editLink = () => {
    console.log("editLink");
  };

  return (
    <div className="h-full z-[100]  absolute inset-0 bg-white/60">
      <div className="w-full overflow-hidden h-full grid place-content-center">
        <div className="bg-white w-[22rem] md:w-[26rem] mx-auto px-3 py-4 rounded-md shadow-lg">
          <div className="flex justify-end">
            <button
              onClick={() => setShowCreateEditModel(false)}
              className="hover:bg-gray-200 rounded bg-gray-300/40">
              <X />
            </button>
          </div>
          <div>
            {props && (
              <div className="flex justify-center w-10 rounded-full overflow-hidden mx-auto">
                <img src={props.icon} alt="" />
              </div>
            )}
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="link">
              Destination url
            </label>
            <input
              value={link.originUrl}
              onChange={(e) => setLink({ ...link, originUrl: e.target.value })}
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="https://example.com"
              id="link"></input>
            {props && (
              <>
                <label
                  className="text-sm mt-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="link">
                  Key
                </label>
                <input
                  disabled={true}
                  value={link.key}
                  className="flex  h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="https://example.com"
                  id="key"></input>
              </>
            )}

            <Button
              onChange={props ? editLink : creatLink}
              variant={"primary"}
              disabled={saveDisabled}
              className={"w-full transition-colors duration-300 mt-2"}>
              {props ? "save" : "creat"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatEditLink;
