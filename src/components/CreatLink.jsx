import { Loader, X } from "lucide-react";
import Button from "./ui/Button";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addOne } from "../features/linkSclice";
import toast from "react-hot-toast";

const CreateLink = ({ setIsCreateLinkModelOpen }) => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { authToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const createLink = async () => {
    if (!input) {
      toast.error("Please enter a url");
      return;
    }
    const regex =
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    if (!regex.test(input)) {
      toast.error("Please enter a valid url");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/v1/link/short",
        {
          link: input,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      dispatch(addOne(res.data.data));
      toast.success("Link Created Successfully");
      setIsCreateLinkModelOpen(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
              type="url"
              placeholder="https://example.com"
              id="link"
              value={input}
              required={true}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <Button
            loading={loading}
            onClick={createLink}
            variant={"primary"}
            className={
              "w-full font-semibold  font-Outfit mt-6 transition-colors duration-500"
            }>
            {loading ? (
              <Loader className="mx-auto text-black animate-spin" />
            ) : (
              "short"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateLink;
