import Button from "../ui/Button";
import { useDeleteLinkMutation } from "../../app/api/linkSlice";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const DeleteLinkModel = ({ props }) => {
  const [deleteLink, { isLoading, isSuccess, isError, error }] =
    useDeleteLinkMutation();

  const handelDelete = async () => {
    await deleteLink(props._id);
  };

  return (
    <div className="bg-[#eee] w-[22rem] mx-auto px-3 py-4 rounded-md text-center">
      <div className=" flex flex-col gap-2">
        <div className="w-10 h-10 rounded-full overflow-hidden mx-auto">
          <img
            className="w-full h-full object-cover"
            src={
              props?.icon ||
              "https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
            }
            alt=""
          />
        </div>
        <p className="font-semibold text-[#444]">
          Warning: Deleting this link will remove all of its stats. This action
          cannot be undone.
        </p>
      </div>
      <Button
        onClick={handelDelete}
        varient={"danger"}
        className="w-full py-2 justify-center mt-4">
        {isLoading ? <Loader className="animate-spin" /> : "Delete"}
      </Button>
    </div>
  );
};

export default DeleteLinkModel;
