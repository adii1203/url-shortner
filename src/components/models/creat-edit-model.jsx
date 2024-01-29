import { useMemo, useState } from "react";
import Button from "../ui/Button";
import { Loader } from "lucide-react";
import { useCreateLinkMutation } from "../../features/links/linkApiSlice";
import toast from "react-hot-toast";

const CreatEditLink = ({
  props,
  showCreateEditModel,
  setShowCreateEditModel,
}) => {
  const [creatLink, { isLoading }] = useCreateLinkMutation();

  const [data, setData] = useState(
    props || {
      originUrl: "",
      key: "",
    }
  );

  const saveDisabled = useMemo(() => {
    const pattern =
      /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

    if (
      isLoading ||
      !pattern.test(data.originUrl) ||
      (props &&
        Object.entries(props).every(([key, value]) => data[key] === value))
    ) {
      return true;
    } else {
      return false;
    }
  }, [data, props, isLoading]);

  const handelSave = async (e) => {
    e.preventDefault();
    try {
      await creatLink(data).unwrap();
      toast.success("Link Created Successfully");
      setShowCreateEditModel(false);
    } catch (e) {
      toast.error(e.data.message || e.message);
    }
  };

  return (
    <div className="bg-[#eee] rounded-md px-6 py-4  ">
      <div className="mt-10 flex flex-col gap-4 divide-y-2 divide-[#444]/20">
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 rounded-full overflow-hidden">
            <img
              src={
                props ? `${props?.icon}` : 'https://robohash.org/3 alt="" />'
              }
            />
          </div>
          <h1 className="font-Outfit text-xl capitalize text-[#444]">
            {props ? `Edit openurl/${props?.key}` : "Create Link"}
          </h1>
        </div>
        <div className="pt-3">
          <form>
            <div className="flex flex-col w-[20rem] gap-1">
              <label
                htmlFor="title"
                className="font-semibold capitalize font-Outfit text-[#444]">
                destination Url
              </label>
              <input
                value={data.originUrl}
                onChange={(e) =>
                  setData({ ...data, originUrl: e.target.value })
                }
                className="border-2 border-[#444] rounded px-2 py-2 text-[#1a1a1a] font-comfortaa font-bold"
                type="text"
                name=""
                id=""
                placeholder="Ex:- https://github.com"
              />
            </div>
            <div className="flex flex-col w-[20rem] gap-1 mt-3">
              <lable
                htmlFor="key"
                className="font-semibold capitalize font-Outfit text-[#444]">
                key (optional)
              </lable>
              <input
                value={data.key}
                onChange={(e) => setData({ ...data, key: e.target.value })}
                type="text"
                name=""
                id=""
                placeholder="Ex:- github"
                className="border-2 border-[#444] rounded px-2 py-2 text-[#1a1a1a] font-comfortaa font-bold"
              />
            </div>
            <Button
              onClick={handelSave}
              disabled={saveDisabled}
              varient="primary"
              className={
                "w-full outline-none mt-3 py-2 justify-center font-bold hover:bg-transparent hover:text-[#111] hover:border-[#111] border-2"
              }>
              {isLoading ? (
                <Loader className="animate-spin" />
              ) : props ? (
                "Save Link"
              ) : (
                "Creat Link"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatEditLink;
